export interface Crop {
  id: string;
  name: string;
  scientificName?: string;
  season: string;
  suitableSoils: string[];
  suitableRegions?: string[];
  temperatureRange?: { min: number; max: number };
  rainfallRequirement?: { min: number; max: number }; // mm
  soilPHRange?: { min: number; max: number };
  waterRequirementPerHectare: number; // liters
  fertilizerRequirementPerHectare: number; // kg
  seedCostPerHectare: number;
  fertilizerCostPerHectare: number;
  irrigationCostPerHectare: number;
  laborCostPerHectare: number;
  totalCostPerHectare: number;
  expectedYieldPerHectare: number; // tonnes
  marketPrice: number; // per tonne
  expectedRevenuePerHectare: number;
  expectedProfitPerHectare: number;
  growthDuration: string; // months or days
  droughtTolerance: "Low" | "Medium" | "High";
  waterEfficiency: number; // subjective score 0-100
  riskLevel: "Low" | "Medium" | "High";
  historicalYield?: number;
  historicalProduction?: number;
  sustainabilityScore: number; // 0-100
  iconName?: string;
}

export interface FarmInput {
  land: number; // hectares
  water: number; // liters
  budget: number; // INR
  fertilizer: number; // kg
  soilType: string;
  soilPH?: number;
  nitrogen?: number;
  phosphorus?: number;
  potassium?: number;
  temperature?: number;
  rainfall?: number;
  region?: string;
  season: string;
}

export interface CropSuitability {
  crop: Crop;
  score: number; // 0-100
  reasons: string[];
  warnings: string[];
  factors: {
    soilScore: number;
    weatherScore: number;
    resourceEfficiencyScore: number;
    riskScore: number;
  };
}

export interface YieldPrediction {
  crop: Crop;
  predictedYieldPerHectare: number; // tonnes
  confidence: number;
  factors: string[];
  warnings: string[];
}

export interface OptimizationResult {
  cropId: string;
  cropName: string;
  allocatedLand: number; // hectares
  waterUsed: number;
  fertilizerUsed: number;
  cost: number;
  expectedYield: number;
  expectedRevenue: number;
  expectedProfit: number;
}

export interface StrategyComparison {
  strategyName: string;
  results: OptimizationResult[];
  totalLandUsed: number;
  totalWaterUsed: number;
  totalFertilizerUsed: number;
  totalCost: number;
  totalYield: number;
  totalRevenue: number;
  totalProfit: number;
  waterSaved?: number; // relative to max water available
  fertilizerSaved?: number;
}
