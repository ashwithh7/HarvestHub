import { Crop, FarmInput, CropSuitability } from '../types/agriculture';

export const calculateSuitability = (crop: Crop, farmInput: FarmInput): CropSuitability => {
  let score = 100;
  const reasons: string[] = [];
  const warnings: string[] = [];

  // Soil compatibility
  let soilScore = 0;
  if (crop.suitableSoils.includes(farmInput.soilType)) {
    soilScore = 25;
    reasons.push(`✓ Excellent soil compatibility (${farmInput.soilType})`);
  } else {
    soilScore = 5;
    warnings.push(`⚠ Soil type (${farmInput.soilType}) is not ideal`);
  }

  // pH compatibility
  if (farmInput.soilPH && crop.soilPHRange) {
    if (farmInput.soilPH >= crop.soilPHRange.min && farmInput.soilPH <= crop.soilPHRange.max) {
      soilScore += 10;
      reasons.push(`✓ Soil pH is within optimal range`);
    } else {
      warnings.push(`⚠ Soil pH is outside optimal range`);
    }
  } else {
    soilScore += 5; // default if unknown
  }

  // Season compatibility
  let weatherScore = 0;
  if (crop.season.toLowerCase() === farmInput.season.toLowerCase() || crop.season === "Annual") {
    weatherScore = 25;
    reasons.push(`✓ Suitable for ${farmInput.season} season`);
  } else {
    weatherScore = 5;
    warnings.push(`⚠ Might not perform best in ${farmInput.season}`);
  }

  // Temperature
  if (farmInput.temperature && crop.temperatureRange) {
    if (farmInput.temperature >= crop.temperatureRange.min && farmInput.temperature <= crop.temperatureRange.max) {
      weatherScore += 10;
      reasons.push(`✓ Optimal temperature for growth`);
    } else {
      warnings.push(`⚠ Temperature outside optimal range`);
    }
  } else {
    weatherScore += 5;
  }

  // Resource Efficiency
  const resourceEfficiencyScore = (crop.waterEfficiency / 100) * 15 + (crop.sustainabilityScore / 100) * 10;
  if (resourceEfficiencyScore > 20) {
    reasons.push(`✓ High resource efficiency and sustainability`);
  } else {
    warnings.push(`⚠ High resource consumption`);
  }

  // Risk Score
  const riskScore = crop.riskLevel === "Low" ? 15 : crop.riskLevel === "Medium" ? 10 : 5;
  if (riskScore === 15) {
    reasons.push(`✓ Low cultivation risk`);
  } else if (riskScore === 5) {
    warnings.push(`⚠ High risk crop`);
  }

  score = Math.round(soilScore + weatherScore + resourceEfficiencyScore + riskScore);
  
  // Cap at 100
  score = Math.min(score, 100);

  return {
    crop,
    score,
    reasons,
    warnings,
    factors: {
      soilScore,
      weatherScore,
      resourceEfficiencyScore,
      riskScore
    }
  };
};

export const evaluateAllCrops = (crops: Crop[], farmInput: FarmInput): CropSuitability[] => {
  return crops.map(c => calculateSuitability(c, farmInput)).sort((a, b) => b.score - a.score);
};
