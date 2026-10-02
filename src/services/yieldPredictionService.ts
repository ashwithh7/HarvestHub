import { Crop, FarmInput, YieldPrediction } from '../types/agriculture';
import { calculateSuitability } from './suitabilityService';

export const predictYield = (crop: Crop, farmInput: FarmInput): YieldPrediction => {
  const suitability = calculateSuitability(crop, farmInput);
  
  // Baseline prediction logic
  // A real ML model would be invoked here. We use an explainable baseline.
  
  let predictedYield = crop.expectedYieldPerHectare;
  
  // Modify yield based on suitability score (50-100% of potential)
  const scoreFactor = Math.max(0.5, suitability.score / 100);
  predictedYield = predictedYield * scoreFactor;
  
  const factors: string[] = [];
  const warnings: string[] = [];
  
  if (suitability.score > 80) {
    factors.push("High suitability score ensures optimal yield.");
    factors.push("Favorable weather conditions expected.");
  } else {
    warnings.push("Yield reduced due to suboptimal environmental conditions.");
  }

  if (crop.riskLevel === "High") {
    warnings.push("High risk crop: yield variance may be significant.");
  }

  return {
    crop,
    predictedYieldPerHectare: parseFloat(predictedYield.toFixed(2)),
    confidence: Math.round(suitability.score * 0.9), // proxy for confidence
    factors,
    warnings
  };
};
