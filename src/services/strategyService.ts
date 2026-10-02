import { FarmInput, OptimizationResult, StrategyComparison, CropSuitability } from '../types/agriculture';
import { optimizeAllocation, OptimizationStrategy } from './optimizationService';

export const generateStrategyComparison = (
  scoredCrops: CropSuitability[],
  farmInput: FarmInput
): StrategyComparison[] => {
  const strategies: OptimizationStrategy[] = ["MAX_PROFIT", "MAX_YIELD", "RESOURCE_EFFICIENT"];
  const comparisons: StrategyComparison[] = [];

  strategies.forEach(strategy => {
    const results = optimizeAllocation(scoredCrops, farmInput, strategy);
    
    let totalLandUsed = 0;
    let totalWaterUsed = 0;
    let totalFertilizerUsed = 0;
    let totalCost = 0;
    let totalYield = 0;
    let totalRevenue = 0;
    let totalProfit = 0;

    results.forEach(r => {
      totalLandUsed += r.allocatedLand;
      totalWaterUsed += r.waterUsed;
      totalFertilizerUsed += r.fertilizerUsed;
      totalCost += r.cost;
      totalYield += r.expectedYield;
      totalRevenue += r.expectedRevenue;
      totalProfit += r.expectedProfit;
    });

    const comparison: StrategyComparison = {
      strategyName: strategy === "MAX_PROFIT" ? "Maximum Profit" : 
                    strategy === "MAX_YIELD" ? "Maximum Yield" : "Resource Efficient",
      results,
      totalLandUsed: parseFloat(totalLandUsed.toFixed(2)),
      totalWaterUsed: parseFloat(totalWaterUsed.toFixed(2)),
      totalFertilizerUsed: parseFloat(totalFertilizerUsed.toFixed(2)),
      totalCost: parseFloat(totalCost.toFixed(2)),
      totalYield: parseFloat(totalYield.toFixed(2)),
      totalRevenue: parseFloat(totalRevenue.toFixed(2)),
      totalProfit: parseFloat(totalProfit.toFixed(2)),
      waterSaved: parseFloat((farmInput.water - totalWaterUsed).toFixed(2)),
      fertilizerSaved: parseFloat((farmInput.fertilizer - totalFertilizerUsed).toFixed(2))
    };

    comparisons.push(comparison);
  });

  return comparisons;
};
