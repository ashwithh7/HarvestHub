import { Crop, FarmInput, OptimizationResult, CropSuitability } from '../types/agriculture';
import { predictYield } from './yieldPredictionService';
// @ts-expect-error package does not have types
import solver from 'javascript-lp-solver';

export type OptimizationStrategy = "MAX_PROFIT" | "MAX_YIELD" | "RESOURCE_EFFICIENT";

export const optimizeAllocation = (
  scoredCrops: CropSuitability[],
  farmInput: FarmInput,
  strategy: OptimizationStrategy
): OptimizationResult[] => {
  // Filter out crops with very low suitability to avoid poor recommendations
  const viableCrops = scoredCrops.filter(sc => sc.score > 20);
  
  if (viableCrops.length === 0) return [];

  // Prepare model for javascript-lp-solver
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const model: any = {
    optimize: 'objective',
    opType: 'max',
    constraints: {
      land: { max: farmInput.land },
      water: { max: farmInput.water },
      fertilizer: { max: farmInput.fertilizer },
      budget: { max: farmInput.budget }
    },
    variables: {},
    ints: {} // Use continuous variables for hectares (fractions allowed)
  };

  viableCrops.forEach(sc => {
    const crop = sc.crop;
    const prediction = predictYield(crop, farmInput);

    let objectiveValue = 0;
    
    // Profit per hectare
    const expectedRevenue = prediction.predictedYieldPerHectare * crop.marketPrice;
    const profitPerHectare = expectedRevenue - crop.totalCostPerHectare;

    if (strategy === "MAX_PROFIT") {
      objectiveValue = profitPerHectare;
    } else if (strategy === "MAX_YIELD") {
      objectiveValue = prediction.predictedYieldPerHectare;
    } else if (strategy === "RESOURCE_EFFICIENT") {
      // Maximize profit but heavily penalize water and fertilizer usage
      // Normalize to bring it to a comparable scale
      const waterPenalty = crop.waterRequirementPerHectare * 0.5; // Example penalty
      const fertPenalty = crop.fertilizerRequirementPerHectare * 20; 
      objectiveValue = profitPerHectare - waterPenalty - fertPenalty + (crop.sustainabilityScore * 100);
    }

    // Must be positive to be considered by the solver without complicating bounds
    // But profit can be negative. If negative, set objective to a very small number or 0
    if (objectiveValue < 0 && strategy !== "RESOURCE_EFFICIENT") {
        objectiveValue = 0;
    }

    model.variables[crop.id] = {
      objective: objectiveValue,
      land: 1,
      water: crop.waterRequirementPerHectare,
      fertilizer: crop.fertilizerRequirementPerHectare,
      budget: crop.totalCostPerHectare,
      // Ensure we don't allocate more than 60% of land to a single crop for diversification (optional constraint)
      // We can add a constraint per crop if needed, but let's keep it simple for now
    };
  });

  const solution = solver.Solve(model);
  
  const results: OptimizationResult[] = [];
  
  viableCrops.forEach(sc => {
    const crop = sc.crop;
    const allocatedLand = solution[crop.id] || 0;
    
    if (allocatedLand > 0.01) { // Ignore tiny fractions
      const prediction = predictYield(crop, farmInput);
      const expectedYield = prediction.predictedYieldPerHectare * allocatedLand;
      const cost = crop.totalCostPerHectare * allocatedLand;
      const expectedRevenue = expectedYield * crop.marketPrice;
      
      results.push({
        cropId: crop.id,
        cropName: crop.name,
        allocatedLand: parseFloat(allocatedLand.toFixed(2)),
        waterUsed: parseFloat((crop.waterRequirementPerHectare * allocatedLand).toFixed(2)),
        fertilizerUsed: parseFloat((crop.fertilizerRequirementPerHectare * allocatedLand).toFixed(2)),
        cost: parseFloat(cost.toFixed(2)),
        expectedYield: parseFloat(expectedYield.toFixed(2)),
        expectedRevenue: parseFloat(expectedRevenue.toFixed(2)),
        expectedProfit: parseFloat((expectedRevenue - cost).toFixed(2))
      });
    }
  });

  return results.sort((a, b) => b.allocatedLand - a.allocatedLand);
};
