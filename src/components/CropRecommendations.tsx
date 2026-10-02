import { Wheat, Apple, Carrot, Leaf, Sprout, FlowerIcon, Cherry, Citrus, Grape, Banana, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const crops = [
  // Cereals and Grains - Andhra Pradesh & Telangana
  {
    name: "Rice",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Clay", "Loamy"],
    growthTime: "3-6 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (150 kg/ha), Urea (100 kg/ha)",
      seeds: "20-25 kg/ha",
      irrigation: "Continuous flooding, 1200-1500 mm total"
    },
    cropRotation: ["Wheat", "Lentils", "Sugarcane", "Maize"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for stem borers and leaf folders",
      insurance: "Flood and pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Azolla and blue-green algae",
      composting: "Rice straw incorporation",
      irrigation: "Alternate wetting and drying method"
    },
    profitPrediction: {
      estimatedYield: "5-7 tons/ha",
      inputCost: "$500-700/ha",
      marketValue: "$150-250/ton",
      expectedProfit: "$500-1000/ha"
    }
  },
  {
    name: "Wheat",
    icon: Wheat,
    season: "Rabi",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "4-6 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 20-10-10 (200 kg/ha), Urea (100 kg/ha)",
      seeds: "120-150 kg/ha",
      irrigation: "4-6 irrigations, 50-60 mm each"
    },
    cropRotation: ["Maize", "Soybeans", "Chickpeas", "Mustard"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Regular monitoring for aphids and rust",
      insurance: "Crop insurance recommended for hail and drought"
    },
    sustainablePractices: {
      organicInputs: "Use compost and green manure",
      composting: "Incorporate crop residues",
      irrigation: "Drip irrigation for water efficiency"
    },
    profitPrediction: {
      estimatedYield: "4-6 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$200-300/ton",
      expectedProfit: "$600-1200/ha"
    }
  },
  {
    name: "Corn",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "3-4 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 18-46-0 (150 kg/ha), Urea (100 kg/ha)",
      seeds: "15-20 kg/ha",
      irrigation: "6-8 irrigations, 40-50 mm each"
    },
    cropRotation: ["Soybeans", "Wheat", "Cotton", "Sunflowers"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for corn borers and armyworms",
      insurance: "Hail and drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Use cover crops and manure",
      composting: "Corn stalk incorporation",
      irrigation: "Sprinkler irrigation for efficiency"
    },
    profitPrediction: {
      estimatedYield: "6-8 tons/ha",
      inputCost: "$450-650/ha",
      marketValue: "$180-250/ton",
      expectedProfit: "$700-1200/ha"
    }
  },
  {
    name: "Sorghum",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "3-4 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha), Urea (50 kg/ha)",
      seeds: "8-10 kg/ha",
      irrigation: "4-6 irrigations, 30-40 mm each"
    },
    cropRotation: ["Chickpeas", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for shoot fly and stem borer",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Sorghum residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "2-4 tons/ha",
      inputCost: "$200-300/ha",
      marketValue: "$150-200/ton",
      expectedProfit: "$200-600/ha"
    }
  },
  {
    name: "Pearl Millet",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (50 kg/ha), Urea (25 kg/ha)",
      seeds: "3-4 kg/ha",
      irrigation: "3-4 irrigations, 25-30 mm each"
    },
    cropRotation: ["Chickpeas", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for shoot fly and stem borer",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Millet residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "1-2 tons/ha",
      inputCost: "$150-250/ha",
      marketValue: "$120-180/ton",
      expectedProfit: "$100-300/ha"
    }
  },
  {
    name: "Finger Millet",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (50 kg/ha), Urea (25 kg/ha)",
      seeds: "5-7 kg/ha",
      irrigation: "3-4 irrigations, 25-30 mm each"
    },
    cropRotation: ["Chickpeas", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for blast and stem borer",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Millet residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "1.5-2.5 tons/ha",
      inputCost: "$150-250/ha",
      marketValue: "$200-300/ton",
      expectedProfit: "$200-500/ha"
    }
  },
  {
    name: "Maize",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "3-4 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 18-46-0 (150 kg/ha), Urea (100 kg/ha)",
      seeds: "15-20 kg/ha",
      irrigation: "6-8 irrigations, 40-50 mm each"
    },
    cropRotation: ["Soybeans", "Wheat", "Cotton", "Sunflowers"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for corn borers and armyworms",
      insurance: "Hail and drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Use cover crops and manure",
      composting: "Corn stalk incorporation",
      irrigation: "Sprinkler irrigation for efficiency"
    },
    profitPrediction: {
      estimatedYield: "4-6 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$150-220/ton",
      expectedProfit: "$400-800/ha"
    }
  },
  {
    name: "Bajra",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (50 kg/ha), Urea (25 kg/ha)",
      seeds: "3-4 kg/ha",
      irrigation: "3-4 irrigations, 25-30 mm each"
    },
    cropRotation: ["Chickpeas", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for shoot fly and stem borer",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Millet residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "1-2 tons/ha",
      inputCost: "$150-250/ha",
      marketValue: "$120-180/ton",
      expectedProfit: "$100-300/ha"
    }
  },

  // Oilseeds - Andhra Pradesh & Telangana
  {
    name: "Groundnut",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "4-5 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha), Gypsum (200 kg/ha)",
      seeds: "80-100 kg/ha",
      irrigation: "4-6 irrigations, 30-40 mm each"
    },
    cropRotation: ["Sorghum", "Wheat", "Cotton", "Maize"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and leaf miner",
      insurance: "Drought and pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Rhizobium inoculation and compost",
      composting: "Groundnut shell incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "1.5-2.5 tons/ha",
      inputCost: "$300-500/ha",
      marketValue: "$400-600/ton",
      expectedProfit: "$300-800/ha"
    }
  },
  {
    name: "Sunflower",
    icon: FlowerIcon,
    season: "Rabi",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 20-10-10 (100 kg/ha), Urea (50 kg/ha)",
      seeds: "5-7 kg/ha",
      irrigation: "4-5 irrigations, 30-40 mm each"
    },
    cropRotation: ["Wheat", "Chickpeas", "Cotton", "Maize"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and head borer",
      insurance: "Hail insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Sunflower residue incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "1-2 tons/ha",
      inputCost: "$200-300/ha",
      marketValue: "$300-400/ton",
      expectedProfit: "$200-500/ha"
    }
  },
  {
    name: "Sesame",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (50 kg/ha), SSP (100 kg/ha)",
      seeds: "3-5 kg/ha",
      irrigation: "3-4 irrigations, 25-30 mm each"
    },
    cropRotation: ["Chickpeas", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for capsule borer and aphids",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Sesame residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "0.5-1 ton/ha",
      inputCost: "$150-250/ha",
      marketValue: "$500-700/ton",
      expectedProfit: "$200-500/ha"
    }
  },
  {
    name: "Castor",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "4-5 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha), SSP (100 kg/ha)",
      seeds: "8-10 kg/ha",
      irrigation: "4-5 irrigations, 30-40 mm each"
    },
    cropRotation: ["Chickpeas", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for capsule borer and aphids",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Castor residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "1-1.5 tons/ha",
      inputCost: "$200-300/ha",
      marketValue: "$300-400/ton",
      expectedProfit: "$200-400/ha"
    }
  },
  {
    name: "Safflower",
    icon: FlowerIcon,
    season: "Rabi",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "4-5 months",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 20-10-10 (100 kg/ha), SSP (100 kg/ha)",
      seeds: "8-10 kg/ha",
      irrigation: "4-5 irrigations, 30-40 mm each"
    },
    cropRotation: ["Wheat", "Chickpeas", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and wilt",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Safflower residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "0.8-1.2 tons/ha",
      inputCost: "$200-300/ha",
      marketValue: "$400-500/ton",
      expectedProfit: "$200-400/ha"
    }
  },

  // Pulses/Legumes - Andhra Pradesh & Telangana
  {
    name: "Chickpeas",
    icon: Sprout,
    season: "Rabi",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 0-20-20 (50 kg/ha), SSP (100 kg/ha)",
      seeds: "40-50 kg/ha",
      irrigation: "3-4 irrigations, 25-30 mm each"
    },
    cropRotation: ["Sorghum", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for pod borer and aphids",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Rhizobium inoculation and compost",
      composting: "Chickpea residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "1-1.5 tons/ha",
      inputCost: "$200-300/ha",
      marketValue: "$300-400/ton",
      expectedProfit: "$200-400/ha"
    }
  },
  {
    name: "Pigeon Pea",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "5-6 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 0-20-20 (50 kg/ha), SSP (100 kg/ha)",
      seeds: "8-10 kg/ha",
      irrigation: "4-5 irrigations, 30-40 mm each"
    },
    cropRotation: ["Sorghum", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for pod fly and aphids",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Rhizobium inoculation and compost",
      composting: "Pigeon pea residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "1-1.5 tons/ha",
      inputCost: "$150-250/ha",
      marketValue: "$250-350/ton",
      expectedProfit: "$150-350/ha"
    }
  },
  {
    name: "Black Gram",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 0-20-20 (50 kg/ha), SSP (100 kg/ha)",
      seeds: "15-20 kg/ha",
      irrigation: "3-4 irrigations, 25-30 mm each"
    },
    cropRotation: ["Sorghum", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and pod borer",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Rhizobium inoculation and compost",
      composting: "Black gram residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "0.8-1.2 tons/ha",
      inputCost: "$150-250/ha",
      marketValue: "$400-500/ton",
      expectedProfit: "$200-400/ha"
    }
  },
  {
    name: "Green Gram",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 0-20-20 (50 kg/ha), SSP (100 kg/ha)",
      seeds: "15-20 kg/ha",
      irrigation: "3-4 irrigations, 25-30 mm each"
    },
    cropRotation: ["Sorghum", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and pod borer",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Rhizobium inoculation and compost",
      composting: "Green gram residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "0.8-1.2 tons/ha",
      inputCost: "$150-250/ha",
      marketValue: "$350-450/ton",
      expectedProfit: "$200-400/ha"
    }
  },
  {
    name: "Lentils",
    icon: Sprout,
    season: "Rabi",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 0-20-20 (50 kg/ha), SSP (100 kg/ha)",
      seeds: "30-40 kg/ha",
      irrigation: "3-4 irrigations, 25-30 mm each"
    },
    cropRotation: ["Sorghum", "Wheat", "Cotton", "Groundnut"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and rust",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Rhizobium inoculation and compost",
      composting: "Lentil residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "0.8-1.2 tons/ha",
      inputCost: "$200-300/ha",
      marketValue: "$350-450/ton",
      expectedProfit: "$200-400/ha"
    }
  },

  // Fiber Crops - Andhra Pradesh & Telangana
  {
    name: "Cotton",
    icon: FlowerIcon,
    season: "Kharif",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "5-6 months",
    yield: "High",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 20-10-10 (200 kg/ha), Potash (100 kg/ha)",
      seeds: "15-20 kg/ha",
      irrigation: "8-10 irrigations, 50-60 mm each"
    },
    cropRotation: ["Wheat", "Maize", "Soybeans", "Sugarcane"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Low",
      pestControl: "Monitor for bollworms and aphids",
      insurance: "Pest and weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Use organic manures and bio-fertilizers",
      composting: "Cotton stalk incorporation",
      irrigation: "Drip irrigation for water conservation"
    },
    profitPrediction: {
      estimatedYield: "2-3 tons/ha",
      inputCost: "$600-900/ha",
      marketValue: "$800-1200/ton",
      expectedProfit: "$1000-2700/ha"
    }
  },

  // Sugar Crops - Andhra Pradesh & Telangana
  {
    name: "Sugarcane",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "12-18 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (300 kg/ha), Urea (200 kg/ha)",
      seeds: "8000-10000 setts/ha",
      irrigation: "15-20 irrigations, 75-100 mm each"
    },
    cropRotation: ["Rice", "Wheat", "Maize", "Cotton"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Medium",
      pestControl: "Monitor for borers and white grubs",
      insurance: "Fire and weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Press mud and compost application",
      composting: "Trash incorporation",
      irrigation: "Furrow irrigation with mulching"
    },
    profitPrediction: {
      estimatedYield: "80-120 tons/ha",
      inputCost: "$1500-2000/ha",
      marketValue: "$30-50/ton",
      expectedProfit: "$900-4000/ha"
    }
  },

  // Vegetables - Andhra Pradesh & Telangana
  {
    name: "Tomatoes",
    icon: Apple,
    season: "Rabi",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (200 kg/ha), Calcium nitrate (50 kg/ha)",
      seeds: "200-300 g/ha",
      irrigation: "Weekly irrigation, 20-30 mm each"
    },
    cropRotation: ["Corn", "Lettuce", "Carrots", "Peppers"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Low",
      pestControl: "Monitor for aphids, whiteflies, and blight",
      insurance: "Disease and pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and organic mulches",
      composting: "Tomato plant residues",
      irrigation: "Drip irrigation with mulch"
    },
    profitPrediction: {
      estimatedYield: "40-60 tons/ha",
      inputCost: "$800-1200/ha",
      marketValue: "$300-500/ton",
      expectedProfit: "$8000-25000/ha"
    }
  },
  {
    name: "Chillies",
    icon: Apple,
    season: "Kharif",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), Potash (50 kg/ha)",
      seeds: "500-750 g/ha",
      irrigation: "Weekly irrigation, 20-30 mm each"
    },
    cropRotation: ["Cotton", "Groundnut", "Sorghum", "Maize"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and thrips",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and neem cake",
      composting: "Chilli plant residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "8-12 tons/ha",
      inputCost: "$600-900/ha",
      marketValue: "$800-1500/ton",
      expectedProfit: "$5000-15000/ha"
    }
  },
  {
    name: "Onions",
    icon: Apple,
    season: "Rabi",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "3-5 months",
    yield: "Medium",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), Potash (100 kg/ha)",
      seeds: "8-10 kg/ha",
      irrigation: "Weekly irrigation, 20-30 mm each"
    },
    cropRotation: ["Cotton", "Groundnut", "Sorghum", "Maize"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for thrips and onion fly",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Onion residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$200-400/ton",
      expectedProfit: "$2000-8000/ha"
    }
  },
  {
    name: "Potatoes",
    icon: Carrot,
    season: "Rabi",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "2-4 months",
    yield: "High",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (200 kg/ha), Potash (100 kg/ha)",
      seeds: "1500-2000 kg/ha",
      irrigation: "Weekly irrigation, 30-40 mm each"
    },
    cropRotation: ["Cotton", "Groundnut", "Sorghum", "Maize"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and late blight",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Potato residue incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "20-30 tons/ha",
      inputCost: "$800-1200/ha",
      marketValue: "$200-300/ton",
      expectedProfit: "$2000-6000/ha"
    }
  },
  {
    name: "Brinjal",
    icon: Apple,
    season: "Kharif",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), Potash (50 kg/ha)",
      seeds: "200-300 g/ha",
      irrigation: "Weekly irrigation, 20-30 mm each"
    },
    cropRotation: ["Cotton", "Groundnut", "Sorghum", "Maize"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and fruit borer",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and neem cake",
      composting: "Brinjal plant residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "25-35 tons/ha",
      inputCost: "$600-900/ha",
      marketValue: "$300-500/ton",
      expectedProfit: "$5000-14000/ha"
    }
  },
  {
    name: "Okra",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), Potash (50 kg/ha)",
      seeds: "8-10 kg/ha",
      irrigation: "Weekly irrigation, 20-30 mm each"
    },
    cropRotation: ["Cotton", "Groundnut", "Sorghum", "Maize"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and fruit borer",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and neem cake",
      composting: "Okra plant residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "8-12 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$200-300/ton",
      expectedProfit: "$1000-3000/ha"
    }
  },

  // Fruits - Andhra Pradesh & Telangana
  {
    name: "Mango",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "4-5 years",
    yield: "Medium",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (500 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Grafted saplings, 200-250/ha",
      irrigation: "Regular irrigation, 1000-1200 mm/year"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for hoppers and fruit fly",
      insurance: "Hail and disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Use organic fertilizers and compost",
      composting: "Prune waste incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "10-15 tons/ha",
      inputCost: "$2000-3000/ha/year",
      marketValue: "$400-800/ton",
      expectedProfit: "$2000-9000/ha/year"
    }
  },
  {
    name: "Banana",
    icon: Banana,
    season: "Perennial",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "9-12 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 15-5-30 (200 kg/ha), FYM (10 tons/ha)",
      seeds: "Suckers, 1500-2000/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Medium",
      pestControl: "Monitor for nematodes and weevils",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Banana pseudostem compost",
      composting: "Banana waste incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "40-60 tons/ha",
      inputCost: "$1500-2500/ha",
      marketValue: "$200-400/ton",
      expectedProfit: "$5000-15000/ha"
    }
  },
  {
    name: "Papaya",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "8-10 months",
    yield: "High",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (200 kg/ha), FYM (10 tons/ha)",
      seeds: "Seeds or seedlings, 500-600/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and fruit fly",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and organic manures",
      composting: "Papaya plant residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "50-80 tons/ha",
      inputCost: "$1000-1500/ha",
      marketValue: "$200-400/ton",
      expectedProfit: "$8000-25000/ha"
    }
  },
  {
    name: "Guava",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "3-4 years",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (300 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Grafted plants, 200-250/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for fruit fly and wilt",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Guava plant residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha",
      inputCost: "$1500-2000/ha/year",
      marketValue: "$300-500/ton",
      expectedProfit: "$3000-8000/ha/year"
    }
  },
  {
    name: "Sweet Orange",
    icon: Citrus,
    season: "Perennial",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "4-5 years",
    yield: "Medium",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (400 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Budded plants, 200-250/ha",
      irrigation: "Weekly irrigation, 30-40 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and citrus canker",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Organic manures and compost",
      composting: "Orange tree residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "10-15 tons/ha",
      inputCost: "$2000-3000/ha/year",
      marketValue: "$400-600/ton",
      expectedProfit: "$2000-6000/ha/year"
    }
  },
  {
    name: "Pomegranate",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "3-4 years",
    yield: "Medium",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (300 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Cuttings or seedlings, 200-250/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and bacterial blight",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Pomegranate plant residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "8-12 tons/ha",
      inputCost: "$1500-2000/ha/year",
      marketValue: "$500-800/ton",
      expectedProfit: "$2500-7000/ha/year"
    }
  },
  {
    name: "Grapes",
    icon: Grape,
    season: "Perennial",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "3-4 years",
    yield: "High",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (300 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Cuttings, 2000-2500/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for downy mildew and aphids",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Organic manures and compost",
      composting: "Grape vine residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha",
      inputCost: "$2000-3000/ha/year",
      marketValue: "$300-500/ton",
      expectedProfit: "$2500-8000/ha/year"
    }
  },
  {
    name: "Sapota",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "4-5 years",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (300 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Grafted plants, 200-250/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for fruit fly and aphids",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Sapota plant residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "20-30 tons/ha",
      inputCost: "$1500-2000/ha/year",
      marketValue: "$200-400/ton",
      expectedProfit: "$2500-8000/ha/year"
    }
  },
  {
    name: "Custard Apple",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "4-5 years",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (300 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Grafted plants, 200-250/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for fruit borer and aphids",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Organic manures and compost",
      composting: "Custard apple residues",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "10-15 tons/ha",
      inputCost: "$1500-2000/ha/year",
      marketValue: "$300-500/ton",
      expectedProfit: "$1500-5000/ha/year"
    }
  },

  // Additional crops for Clay-Rabi combinations
  {
    name: "Barley",
    icon: Wheat,
    season: "Rabi",
    soilTypes: ["Clay", "Loamy"],
    growthTime: "4-5 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 20-10-10 (150 kg/ha), Urea (75 kg/ha)",
      seeds: "100-125 kg/ha",
      irrigation: "4-5 irrigations, 40-50 mm each"
    },
    cropRotation: ["Maize", "Cotton", "Chickpeas", "Mustard"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and rust",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and green manure",
      composting: "Barley straw incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "3-5 tons/ha",
      inputCost: "$350-500/ha",
      marketValue: "$180-250/ton",
      expectedProfit: "$400-750/ha"
    }
  },
  {
    name: "Mustard",
    icon: FlowerIcon,
    season: "Rabi",
    soilTypes: ["Clay", "Loamy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 20-10-10 (100 kg/ha), Urea (50 kg/ha)",
      seeds: "3-5 kg/ha",
      irrigation: "3-4 irrigations, 30-40 mm each"
    },
    cropRotation: ["Wheat", "Cotton", "Maize", "Sugarcane"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and white rust",
      insurance: "Pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Mustard residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "1-1.5 tons/ha",
      inputCost: "$200-300/ha",
      marketValue: "$400-600/ton",
      expectedProfit: "$300-600/ha"
    }
  },
  {
    name: "Oats",
    icon: Wheat,
    season: "Rabi",
    soilTypes: ["Clay", "Loamy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (100 kg/ha), Urea (50 kg/ha)",
      seeds: "80-100 kg/ha",
      irrigation: "3-4 irrigations, 35-45 mm each"
    },
    cropRotation: ["Maize", "Cotton", "Soybeans", "Groundnut"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for rust and aphids",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Green manure and compost",
      composting: "Oat straw incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "2-3 tons/ha",
      inputCost: "$250-350/ha",
      marketValue: "$200-300/ton",
      expectedProfit: "$250-550/ha"
    }
  },
  {
    name: "Rye",
    icon: Wheat,
    season: "Rabi",
    soilTypes: ["Clay", "Sandy"],
    growthTime: "4-5 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 15-10-10 (120 kg/ha), Urea (60 kg/ha)",
      seeds: "90-110 kg/ha",
      irrigation: "3-4 irrigations, 40-50 mm each"
    },
    cropRotation: ["Corn", "Soybeans", "Cotton", "Potatoes"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for ergot and rust",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Organic matter and compost",
      composting: "Rye straw incorporation",
      irrigation: "Rain-fed with supplemental irrigation"
    },
    profitPrediction: {
      estimatedYield: "2.5-4 tons/ha",
      inputCost: "$300-450/ha",
      marketValue: "$180-250/ton",
      expectedProfit: "$300-650/ha"
    }
  },

  // Clay-Zaid crops
  {
    name: "Fodder Maize",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Clay", "Loamy"],
    growthTime: "2-3 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 18-46-0 (100 kg/ha), Urea (75 kg/ha)",
      seeds: "20-25 kg/ha",
      irrigation: "8-10 irrigations, 50-60 mm each"
    },
    cropRotation: ["Wheat", "Rice", "Cotton", "Sugarcane"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Medium",
      pestControl: "Monitor for stem borer and aphids",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Maize residue incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "40-60 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$50-80/ton",
      expectedProfit: "$1600-4200/ha"
    }
  },
  {
    name: "Summer Rice",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Clay", "Loamy"],
    growthTime: "3-4 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (200 kg/ha), Urea (150 kg/ha)",
      seeds: "25-30 kg/ha",
      irrigation: "Continuous flooding, 1500-1800 mm total"
    },
    cropRotation: ["Wheat", "Mustard", "Chickpeas", "Barley"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for blast and brown plant hopper",
      insurance: "Weather and pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Blue-green algae and azolla",
      composting: "Rice straw incorporation",
      irrigation: "System of rice intensification"
    },
    profitPrediction: {
      estimatedYield: "4-6 tons/ha",
      inputCost: "$600-800/ha",
      marketValue: "$200-300/ton",
      expectedProfit: "$600-1000/ha"
    }
  },
  {
    name: "Summer Sorghum",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Clay", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (75 kg/ha), Urea (40 kg/ha)",
      seeds: "10-12 kg/ha",
      irrigation: "6-8 irrigations, 40-50 mm each"
    },
    cropRotation: ["Wheat", "Chickpeas", "Mustard", "Barley"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for shoot fly and aphids",
      insurance: "Drought insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and green manure",
      composting: "Sorghum residue incorporation",
      irrigation: "Furrow irrigation with mulching"
    },
    profitPrediction: {
      estimatedYield: "2-3 tons/ha",
      inputCost: "$250-350/ha",
      marketValue: "$180-250/ton",
      expectedProfit: "$200-500/ha"
    }
  },
  {
    name: "Summer Moong",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Clay", "Loamy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 0-20-20 (50 kg/ha), SSP (100 kg/ha)",
      seeds: "20-25 kg/ha",
      irrigation: "4-5 irrigations, 30-40 mm each"
    },
    cropRotation: ["Wheat", "Rice", "Mustard", "Barley"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for yellow mosaic virus and aphids",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Rhizobium inoculation and compost",
      composting: "Moong residue incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "0.8-1.2 tons/ha",
      inputCost: "$200-300/ha",
      marketValue: "$400-600/ton",
      expectedProfit: "$200-500/ha"
    }
  },
  {
    name: "Fodder Sorghum",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Clay", "Sandy"],
    growthTime: "2-3 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (75 kg/ha), Urea (50 kg/ha)",
      seeds: "15-20 kg/ha",
      irrigation: "6-8 irrigations, 40-50 mm each"
    },
    cropRotation: ["Wheat", "Chickpeas", "Mustard", "Oats"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for aphids and stem borer",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Sorghum residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "30-50 tons/ha",
      inputCost: "$300-450/ha",
      marketValue: "$40-60/ton",
      expectedProfit: "$900-2550/ha"
    }
  },

  // Clay-Perennial crops
  {
    name: "Coconut",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Clay", "Loamy"],
    growthTime: "5-6 years",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (500 kg/ha/year), FYM (50 kg/palm/year)",
      seeds: "Seedlings, 175-200/ha",
      irrigation: "Regular irrigation, 1200-1500 mm/year"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for rhinoceros beetle and red palm weevil",
      insurance: "Weather and pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Coir pith compost and green manure",
      composting: "Coconut husk and frond incorporation",
      irrigation: "Basin irrigation with mulching"
    },
    profitPrediction: {
      estimatedYield: "8000-12000 nuts/ha/year",
      inputCost: "$800-1200/ha/year",
      marketValue: "$0.15-0.25/nut",
      expectedProfit: "$400-1800/ha/year"
    }
  },
  {
    name: "Jackfruit",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Clay", "Loamy"],
    growthTime: "4-6 years",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (400 kg/ha/year), FYM (20 tons/ha)",
      seeds: "Grafted plants, 100-150/ha",
      irrigation: "Weekly irrigation, 30-40 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for fruit borer and scale insects",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and green manure",
      composting: "Jackfruit waste incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha/year",
      inputCost: "$600-900/ha/year",
      marketValue: "$200-400/ton",
      expectedProfit: "$2400-9100/ha/year"
    }
  },
  {
    name: "Tamarind",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Clay", "Sandy"],
    growthTime: "6-8 years",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (200 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Grafted plants, 100-125/ha",
      irrigation: "Monthly irrigation, 50-75 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for scale insects and pod borer",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Organic manures and compost",
      composting: "Tamarind leaf litter incorporation",
      irrigation: "Rain-fed with supplemental irrigation"
    },
    profitPrediction: {
      estimatedYield: "5-10 tons/ha/year",
      inputCost: "$300-500/ha/year",
      marketValue: "$300-500/ton",
      expectedProfit: "$1200-4500/ha/year"
    }
  },
  {
    name: "Drumstick",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Clay", "Sandy"],
    growthTime: "2-3 years",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (200 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Cuttings or seedlings, 400-500/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for aphids and caterpillars",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and green manure",
      composting: "Drumstick leaf incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "8-15 tons/ha/year",
      inputCost: "$400-600/ha/year",
      marketValue: "$200-400/ton",
      expectedProfit: "$1200-5400/ha/year"
    }
  },

  // Sandy-Zaid crops
  {
    name: "Watermelon",
    icon: Apple,
    season: "Zaid",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "2-3 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), Potash (100 kg/ha)",
      seeds: "2-3 kg/ha",
      irrigation: "Weekly irrigation, 30-40 mm each"
    },
    cropRotation: ["Wheat", "Mustard", "Chickpeas", "Barley"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for fruit fly and aphids",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and organic mulches",
      composting: "Watermelon vine incorporation",
      irrigation: "Drip irrigation with plastic mulch"
    },
    profitPrediction: {
      estimatedYield: "25-40 tons/ha",
      inputCost: "$600-900/ha",
      marketValue: "$100-200/ton",
      expectedProfit: "$1900-7100/ha"
    }
  },
  {
    name: "Muskmelon",
    icon: Apple,
    season: "Zaid",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), Potash (75 kg/ha)",
      seeds: "2-3 kg/ha",
      irrigation: "Weekly irrigation, 25-35 mm each"
    },
    cropRotation: ["Wheat", "Mustard", "Chickpeas", "Barley"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for downy mildew and aphids",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and organic mulches",
      composting: "Melon vine incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha",
      inputCost: "$500-750/ha",
      marketValue: "$150-300/ton",
      expectedProfit: "$1750-6750/ha"
    }
  },
  {
    name: "Cucumber",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "2-3 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), Calcium nitrate (50 kg/ha)",
      seeds: "2-3 kg/ha",
      irrigation: "Every 2-3 days, 20-25 mm each"
    },
    cropRotation: ["Wheat", "Mustard", "Onions", "Potatoes"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Low",
      pestControl: "Monitor for downy mildew and cucumber beetle",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and vermicompost",
      composting: "Cucumber vine incorporation",
      irrigation: "Drip irrigation with mulching"
    },
    profitPrediction: {
      estimatedYield: "20-30 tons/ha",
      inputCost: "$600-900/ha",
      marketValue: "$200-400/ton",
      expectedProfit: "$3100-11100/ha"
    }
  },
  {
    name: "Bottle Gourd",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), Potash (50 kg/ha)",
      seeds: "3-4 kg/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["Wheat", "Mustard", "Chickpeas", "Barley"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for fruit fly and aphids",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and organic manures",
      composting: "Gourd vine incorporation",
      irrigation: "Furrow irrigation with mulching"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$100-200/ton",
      expectedProfit: "$1100-4400/ha"
    }
  },
  {
    name: "Ridge Gourd",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), Potash (50 kg/ha)",
      seeds: "3-4 kg/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["Wheat", "Mustard", "Onions", "Potatoes"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for fruit fly and red pumpkin beetle",
      insurance: "Pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and vermicompost",
      composting: "Gourd vine incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "12-20 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$150-250/ton",
      expectedProfit: "$1400-4400/ha"
    }
  },

  // Sandy-Perennial crops
  {
    name: "Date Palm",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "4-6 years",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (300 kg/ha/year), FYM (25 kg/palm/year)",
      seeds: "Offshoots, 150-200/ha",
      irrigation: "Weekly irrigation, 100-150 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for red palm weevil and scale insects",
      insurance: "Pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Date palm waste compost",
      composting: "Palm frond incorporation",
      irrigation: "Basin irrigation with mulching"
    },
    profitPrediction: {
      estimatedYield: "8-15 tons/ha/year",
      inputCost: "$800-1200/ha/year",
      marketValue: "$800-1500/ton",
      expectedProfit: "$5600-21300/ha/year"
    }
  },
  {
    name: "Cashew",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "3-5 years",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (200 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Grafted plants, 200-250/ha",
      irrigation: "Monthly irrigation, 40-60 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for tea mosquito bug and stem borer",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Cashew apple waste compost",
      composting: "Cashew shell incorporation",
      irrigation: "Rain-fed with supplemental irrigation"
    },
    profitPrediction: {
      estimatedYield: "0.8-1.5 tons/ha/year",
      inputCost: "$400-600/ha/year",
      marketValue: "$2000-3000/ton",
      expectedProfit: "$1200-4100/ha/year"
    }
  },
  {
    name: "Casuarina",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Sandy", "Clay"],
    growthTime: "6-8 years",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha/year), FYM (5 tons/ha)",
      seeds: "Seedlings, 1600-2000/ha",
      irrigation: "Monthly irrigation, 50-75 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for termites and borers",
      insurance: "Fire insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs required",
      composting: "Leaf litter incorporation",
      irrigation: "Rain-fed cultivation"
    },
    profitPrediction: {
      estimatedYield: "150-250 tons/ha (timber)",
      inputCost: "$300-500/ha/year",
      marketValue: "$50-100/ton",
      expectedProfit: "$7200-24500/ha (at harvest)"
    }
  },
  {
    name: "Eucalyptus",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Sandy", "Clay"],
    growthTime: "5-7 years",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha/year), FYM (5 tons/ha)",
      seeds: "Seedlings, 1600-2000/ha",
      irrigation: "Monthly irrigation, 40-60 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Medium",
      pestControl: "Monitor for termites and leaf eating caterpillars",
      insurance: "Fire insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs required",
      composting: "Leaf litter incorporation",
      irrigation: "Rain-fed with supplemental irrigation"
    },
    profitPrediction: {
      estimatedYield: "120-200 tons/ha (timber)",
      inputCost: "$300-500/ha/year",
      marketValue: "$60-120/ton",
      expectedProfit: "$6900-23500/ha (at harvest)"
    }
  },
  {
    name: "Areca Nut",
    icon: Apple,
    season: "Perennial",
    soilTypes: ["Sandy", "Loamy"],
    growthTime: "5-7 years",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (400 kg/ha/year), FYM (20 tons/ha)",
      seeds: "Seedlings, 400-500/ha",
      irrigation: "Weekly irrigation, 50-75 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Medium",
      pestControl: "Monitor for spindle bug and scale insects",
      insurance: "Weather and pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Areca husk compost and green manure",
      composting: "Areca waste incorporation",
      irrigation: "Basin irrigation with mulching"
    },
    profitPrediction: {
      estimatedYield: "1.5-3 tons/ha/year",
      inputCost: "$600-900/ha/year",
      marketValue: "$1500-2500/ton",
      expectedProfit: "$1650-6600/ha/year"
    }
  },

  // Loamy-Zaid crops
  {
    name: "Summer Sesame",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (75 kg/ha), SSP (100 kg/ha)",
      seeds: "4-5 kg/ha",
      irrigation: "4-5 irrigations, 30-40 mm each"
    },
    cropRotation: ["Wheat", "Mustard", "Chickpeas", "Barley"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and capsule borer",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and green manure",
      composting: "Sesame residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "0.6-1 ton/ha",
      inputCost: "$200-300/ha",
      marketValue: "$600-800/ton",
      expectedProfit: "$260-500/ha"
    }
  },
  {
    name: "Summer Groundnut",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (125 kg/ha), Gypsum (250 kg/ha)",
      seeds: "100-120 kg/ha",
      irrigation: "6-8 irrigations, 40-50 mm each"
    },
    cropRotation: ["Wheat", "Mustard", "Chickpeas", "Barley"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for thrips and leaf miner",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Rhizobium inoculation and compost",
      composting: "Groundnut shell incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "1.2-2 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$500-700/ton",
      expectedProfit: "$200-800/ha"
    }
  },
  {
    name: "Green Fodder",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "2-3 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (100 kg/ha), Urea (50 kg/ha)",
      seeds: "25-30 kg/ha",
      irrigation: "Weekly irrigation, 40-50 mm each"
    },
    cropRotation: ["Wheat", "Rice", "Mustard", "Chickpeas"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Medium",
      pestControl: "Monitor for aphids and army worms",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Farmyard manure and compost",
      composting: "Fodder residue incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "40-60 tons/ha",
      inputCost: "$300-450/ha",
      marketValue: "$30-50/ton",
      expectedProfit: "$900-2550/ha"
    }
  },
  {
    name: "Summer Cowpea",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 0-20-20 (50 kg/ha), SSP (100 kg/ha)",
      seeds: "20-25 kg/ha",
      irrigation: "4-5 irrigations, 30-40 mm each"
    },
    cropRotation: ["Wheat", "Mustard", "Chickpeas", "Barley"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and pod borer",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Rhizobium inoculation and compost",
      composting: "Cowpea residue incorporation",
      irrigation: "Furrow irrigation"
    },
    profitPrediction: {
      estimatedYield: "0.8-1.2 tons/ha",
      inputCost: "$200-300/ha",
      marketValue: "$400-600/ton",
      expectedProfit: "$220-520/ha"
    }
  },
  {
    name: "Summer Maize",
    icon: Sprout,
    season: "Zaid",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "3-4 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 18-46-0 (200 kg/ha), Urea (150 kg/ha)",
      seeds: "20-25 kg/ha",
      irrigation: "8-10 irrigations, 50-60 mm each"
    },
    cropRotation: ["Wheat", "Mustard", "Chickpeas", "Barley"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for stem borer and fall armyworm",
      insurance: "Weather and pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and green manure",
      composting: "Maize stalk incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "5-7 tons/ha",
      inputCost: "$500-750/ha",
      marketValue: "$200-300/ton",
      expectedProfit: "$500-1350/ha"
    }
  },

  // Loamy-Perennial crops
  {
    name: "Teak",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "15-20 years",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (50 kg/ha/year), FYM (2 tons/ha)",
      seeds: "Seedlings, 1100-1600/ha",
      irrigation: "Monthly irrigation, 50-75 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Medium",
      pestControl: "Monitor for defoliators and borers",
      insurance: "Fire insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs required",
      composting: "Leaf litter incorporation",
      irrigation: "Rain-fed with supplemental irrigation"
    },
    profitPrediction: {
      estimatedYield: "200-400 tons/ha (timber)",
      inputCost: "$200-400/ha/year",
      marketValue: "$500-1500/ton",
      expectedProfit: "$99800-599600/ha (at harvest)"
    }
  },
  {
    name: "Sandalwood",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Loamy", "Sandy"],
    growthTime: "12-15 years",
    yield: "High",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha/year), FYM (5 tons/ha)",
      seeds: "Seedlings, 400-600/ha",
      irrigation: "Monthly irrigation, 40-60 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for spike disease and borers",
      insurance: "Theft and fire insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Organic manures and compost",
      composting: "Leaf litter incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha (heartwood)",
      inputCost: "$400-600/ha/year",
      marketValue: "$5000-15000/ton",
      expectedProfit: "$69400-369400/ha (at harvest)"
    }
  },
  {
    name: "Bamboo",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "3-4 years",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha/year), FYM (10 tons/ha)",
      seeds: "Rhizomes, 2500-3000/ha",
      irrigation: "Weekly irrigation, 50-75 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "High",
      pestControl: "Monitor for borers and scale insects",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Bamboo leaf compost",
      composting: "Bamboo waste incorporation",
      irrigation: "Rain-fed with supplemental irrigation"
    },
    profitPrediction: {
      estimatedYield: "40-80 tons/ha/year",
      inputCost: "$300-500/ha/year",
      marketValue: "$100-300/ton",
      expectedProfit: "$3700-23500/ha/year"
    }
  },
  {
    name: "Silver Oak",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Loamy", "Clay"],
    growthTime: "8-12 years",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (75 kg/ha/year), FYM (5 tons/ha)",
      seeds: "Seedlings, 1100-1600/ha",
      irrigation: "Monthly irrigation, 50-75 mm each"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Medium",
      pestControl: "Monitor for termites and borers",
      insurance: "Fire insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs required",
      composting: "Leaf litter incorporation",
      irrigation: "Rain-fed cultivation"
    },
    profitPrediction: {
      estimatedYield: "150-300 tons/ha (timber)",
      inputCost: "$250-400/ha/year",
      marketValue: "$200-500/ton",
      expectedProfit: "$27600-149600/ha (at harvest)"
    }
  },

  // Silty soil crops - Kharif season
  {
    name: "Jute",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Silty", "Clay"],
    growthTime: "4-5 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-5-5 (100 kg/ha), Urea (50 kg/ha)",
      seeds: "15-20 kg/ha",
      irrigation: "High moisture requirement, 1000-1200 mm"
    },
    cropRotation: ["Rice", "Wheat", "Mustard", "Lentils"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for stem weevil and semilooper",
      insurance: "Flood insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and green manure",
      composting: "Jute waste incorporation",
      irrigation: "Flood irrigation"
    },
    profitPrediction: {
      estimatedYield: "2-3 tons/ha",
      inputCost: "$300-450/ha",
      marketValue: "$400-600/ton",
      expectedProfit: "$500-1350/ha"
    }
  },
  {
    name: "Water Spinach",
    icon: Leaf,
    season: "Kharif",
    soilTypes: ["Silty", "Clay"],
    growthTime: "1-2 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (100 kg/ha), Urea (50 kg/ha)",
      seeds: "5-8 kg/ha",
      irrigation: "Continuous water logging required"
    },
    cropRotation: ["Rice", "Fish farming", "Duck farming", "Lotus"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for aphids and leaf miners",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Pond silt and compost",
      composting: "Aquatic plant residues",
      irrigation: "Pond/wetland cultivation"
    },
    profitPrediction: {
      estimatedYield: "20-30 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$200-300/ton",
      expectedProfit: "$3600-8400/ha"
    }
  },
  {
    name: "Taro",
    icon: Carrot,
    season: "Kharif",
    soilTypes: ["Silty", "Clay"],
    growthTime: "6-8 months",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), FYM (15 tons/ha)",
      seeds: "Corms, 1000-1500 kg/ha",
      irrigation: "High moisture, waterlogged conditions"
    },
    cropRotation: ["Rice", "Water chestnuts", "Fish farming", "Lotus"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for leaf blight and aphids",
      insurance: "Flood insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Pond silt and organic matter",
      composting: "Taro leaf incorporation",
      irrigation: "Wetland cultivation"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha",
      inputCost: "$600-900/ha",
      marketValue: "$300-500/ton",
      expectedProfit: "$3900-11600/ha"
    }
  },
  {
    name: "Water Chestnut",
    icon: Apple,
    season: "Kharif",
    soilTypes: ["Silty", "Clay"],
    growthTime: "6-7 months",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha), FYM (10 tons/ha)",
      seeds: "Corms, 800-1000 kg/ha",
      irrigation: "Waterlogged conditions required"
    },
    cropRotation: ["Rice", "Fish farming", "Taro", "Lotus"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for stem rot and aphids",
      insurance: "Flood insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Pond silt and compost",
      composting: "Aquatic plant residues",
      irrigation: "Pond cultivation"
    },
    profitPrediction: {
      estimatedYield: "8-12 tons/ha",
      inputCost: "$500-750/ha",
      marketValue: "$400-600/ton",
      expectedProfit: "$2700-6450/ha"
    }
  },
  {
    name: "Lotus Root",
    icon: FlowerIcon,
    season: "Kharif",
    soilTypes: ["Silty", "Clay"],
    growthTime: "5-6 months",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha), FYM (15 tons/ha)",
      seeds: "Rhizomes, 500-800 kg/ha",
      irrigation: "Deep water cultivation, 30-60 cm depth"
    },
    cropRotation: ["Fish farming", "Water chestnuts", "Taro", "Rice"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for leaf spot and aphids",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Pond silt and organic matter",
      composting: "Lotus waste incorporation",
      irrigation: "Pond/lake cultivation"
    },
    profitPrediction: {
      estimatedYield: "10-15 tons/ha",
      inputCost: "$600-900/ha",
      marketValue: "$500-800/ton",
      expectedProfit: "$4100-11100/ha"
    }
  },

  // Silty soil crops - Rabi season
  {
    name: "Boro Rice",
    icon: Sprout,
    season: "Rabi",
    soilTypes: ["Silty", "Clay"],
    growthTime: "4-5 months",
    yield: "High",
    color: "text-harvest",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (200 kg/ha), Urea (150 kg/ha)",
      seeds: "30-35 kg/ha",
      irrigation: "Continuous flooding, 1500-1800 mm"
    },
    cropRotation: ["Jute", "Mustard", "Lentils", "Chickpeas"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for blast and brown plant hopper",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Blue-green algae and azolla",
      composting: "Rice straw incorporation",
      irrigation: "Controlled flooding"
    },
    profitPrediction: {
      estimatedYield: "5-7 tons/ha",
      inputCost: "$600-800/ha",
      marketValue: "$250-350/ton",
      expectedProfit: "$650-1650/ha"
    }
  },
  {
    name: "Mustard Greens",
    icon: Leaf,
    season: "Rabi",
    soilTypes: ["Silty", "Loamy"],
    growthTime: "2-3 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (100 kg/ha), Urea (50 kg/ha)",
      seeds: "3-4 kg/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["Rice", "Jute", "Taro", "Water chestnuts"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Medium",
      pestControl: "Monitor for aphids and flea beetles",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and green manure",
      composting: "Mustard residue incorporation",
      irrigation: "Sprinkler irrigation"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha",
      inputCost: "$300-450/ha",
      marketValue: "$200-300/ton",
      expectedProfit: "$2550-7050/ha"
    }
  },
  {
    name: "Radish",
    icon: Carrot,
    season: "Rabi",
    soilTypes: ["Silty", "Loamy"],
    growthTime: "2-3 months",
    yield: "High",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (150 kg/ha), FYM (15 tons/ha)",
      seeds: "8-10 kg/ha",
      irrigation: "Weekly irrigation, 25-30 mm each"
    },
    cropRotation: ["Rice", "Jute", "Maize", "Cotton"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and flea beetles",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and vermicompost",
      composting: "Radish leaf incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "20-30 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$150-250/ton",
      expectedProfit: "$2600-7100/ha"
    }
  },
  {
    name: "Cabbage",
    icon: Leaf,
    season: "Rabi",
    soilTypes: ["Silty", "Loamy"],
    growthTime: "3-4 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (200 kg/ha), Calcium nitrate (50 kg/ha)",
      seeds: "300-400 g/ha",
      irrigation: "Weekly irrigation, 30-40 mm each"
    },
    cropRotation: ["Rice", "Jute", "Maize", "Tomatoes"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Low",
      pestControl: "Monitor for cabbage worm and aphids",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and organic mulches",
      composting: "Cabbage waste incorporation",
      irrigation: "Drip irrigation with mulching"
    },
    profitPrediction: {
      estimatedYield: "40-60 tons/ha",
      inputCost: "$600-900/ha",
      marketValue: "$150-250/ton",
      expectedProfit: "$5100-14100/ha"
    }
  },
  {
    name: "Cauliflower",
    icon: FlowerIcon,
    season: "Rabi",
    soilTypes: ["Silty", "Loamy"],
    growthTime: "3-4 months",
    yield: "High",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (200 kg/ha), Boron (2 kg/ha)",
      seeds: "300-400 g/ha",
      irrigation: "Weekly irrigation, 30-40 mm each"
    },
    cropRotation: ["Rice", "Jute", "Maize", "Tomatoes"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Low",
      pestControl: "Monitor for diamond back moth and aphids",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and vermicompost",
      composting: "Cauliflower waste incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "25-40 tons/ha",
      inputCost: "$700-1000/ha",
      marketValue: "$200-350/ton",
      expectedProfit: "$4300-13000/ha"
    }
  },

  // Silty soil crops - Zaid and Perennial
  {
    name: "Summer Spinach",
    icon: Leaf,
    season: "Zaid",
    soilTypes: ["Silty", "Loamy"],
    growthTime: "1-2 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (100 kg/ha), Urea (50 kg/ha)",
      seeds: "15-20 kg/ha",
      irrigation: "Every 2-3 days, 20-25 mm each"
    },
    cropRotation: ["Mustard greens", "Radish", "Cabbage", "Cauliflower"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Medium",
      pestControl: "Monitor for leaf miners and aphids",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and vermicompost",
      composting: "Spinach residue incorporation",
      irrigation: "Drip irrigation with shade nets"
    },
    profitPrediction: {
      estimatedYield: "12-18 tons/ha",
      inputCost: "$400-600/ha",
      marketValue: "$300-500/ton",
      expectedProfit: "$3200-8400/ha"
    }
  },
  {
    name: "Summer Lettuce",
    icon: Leaf,
    season: "Zaid",
    soilTypes: ["Silty", "Loamy"],
    growthTime: "2-3 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 15-15-15 (150 kg/ha), Calcium nitrate (50 kg/ha)",
      seeds: "1-2 kg/ha",
      irrigation: "Daily irrigation, 15-20 mm each"
    },
    cropRotation: ["Cabbage", "Cauliflower", "Radish", "Mustard greens"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and downy mildew",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and organic mulches",
      composting: "Lettuce waste incorporation",
      irrigation: "Drip irrigation with cooling systems"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha",
      inputCost: "$600-900/ha",
      marketValue: "$400-600/ton",
      expectedProfit: "$5400-14100/ha"
    }
  },
  {
    name: "Water Hyacinth",
    icon: FlowerIcon,
    season: "Zaid",
    soilTypes: ["Silty", "Clay"],
    growthTime: "2-3 months",
    yield: "High",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "Minimal fertilizer required",
      seeds: "Plant fragments, 100-200 kg/ha",
      irrigation: "Waterlogged conditions required"
    },
    cropRotation: ["Fish farming", "Duck farming", "Lotus", "Water chestnuts"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Natural pest resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Natural pond nutrients",
      composting: "Water hyacinth biomass for compost",
      irrigation: "Pond/wetland cultivation"
    },
    profitPrediction: {
      estimatedYield: "50-100 tons/ha (biomass)",
      inputCost: "$100-200/ha",
      marketValue: "$20-40/ton",
      expectedProfit: "$900-3800/ha"
    }
  },
  {
    name: "Duckweed",
    icon: Leaf,
    season: "Zaid",
    soilTypes: ["Silty", "Clay"],
    growthTime: "1-2 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "Pond nutrients sufficient",
      seeds: "Plant material, 50-100 kg/ha",
      irrigation: "Standing water required"
    },
    cropRotation: ["Fish farming", "Water hyacinth", "Lotus", "Taro"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Natural resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Pond ecosystem nutrients",
      composting: "Duckweed biomass for feed/compost",
      irrigation: "Pond cultivation"
    },
    profitPrediction: {
      estimatedYield: "30-60 tons/ha (fresh weight)",
      inputCost: "$50-150/ha",
      marketValue: "$50-100/ton",
      expectedProfit: "$1450-5850/ha"
    }
  },
  {
    name: "Mint",
    icon: Leaf,
    season: "Zaid",
    soilTypes: ["Silty", "Loamy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha), FYM (10 tons/ha)",
      seeds: "Cuttings, 40,000-50,000/ha",
      irrigation: "Weekly irrigation, 30-40 mm each"
    },
    cropRotation: ["Mustard greens", "Radish", "Spinach", "Lettuce"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Medium",
      pestControl: "Monitor for aphids and mint rust",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and organic mulches",
      composting: "Mint residue incorporation",
      irrigation: "Drip irrigation with shade nets"
    },
    profitPrediction: {
      estimatedYield: "8-15 tons/ha",
      inputCost: "$500-750/ha",
      marketValue: "$800-1200/ton",
      expectedProfit: "$5900-17250/ha"
    }
  },

  // Silty-Perennial crops
  {
    name: "Willow",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Silty", "Clay"],
    growthTime: "3-5 years",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (50 kg/ha/year), FYM (5 tons/ha)",
      seeds: "Cuttings, 10,000-15,000/ha",
      irrigation: "High moisture requirement"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for aphids and scale insects",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs required",
      composting: "Willow leaf incorporation",
      irrigation: "Natural wetland conditions"
    },
    profitPrediction: {
      estimatedYield: "80-150 tons/ha (biomass)",
      inputCost: "$200-400/ha/year",
      marketValue: "$40-80/ton",
      expectedProfit: "$3000-11600/ha (at harvest)"
    }
  },
  {
    name: "Poplar",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Silty", "Loamy"],
    growthTime: "6-8 years",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (75 kg/ha/year), FYM (5 tons/ha)",
      seeds: "Cuttings, 400-600/ha",
      irrigation: "Regular irrigation, high moisture"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for borers and leaf diseases",
      insurance: "Fire and weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs required",
      composting: "Poplar leaf litter incorporation",
      irrigation: "Flood irrigation"
    },
    profitPrediction: {
      estimatedYield: "200-350 tons/ha (timber)",
      inputCost: "$300-500/ha/year",
      marketValue: "$100-200/ton",
      expectedProfit: "$17600-69500/ha (at harvest)"
    }
  },

  // Peaty soil crops - all seasons
  {
    name: "Cranberries",
    icon: Cherry,
    season: "Kharif",
    soilTypes: ["Peaty", "Silty"],
    growthTime: "3-4 years",
    yield: "Medium",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "Acidic fertilizer, NPK 10-10-10 (100 kg/ha/year)",
      seeds: "Cuttings, 20,000-30,000/ha",
      irrigation: "Flood irrigation during harvest"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for cranberry fruitworm",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Peat moss and organic acids",
      composting: "Cranberry waste incorporation",
      irrigation: "Controlled flooding systems"
    },
    profitPrediction: {
      estimatedYield: "15-25 tons/ha",
      inputCost: "$800-1200/ha/year",
      marketValue: "$1000-1500/ton",
      expectedProfit: "$14200-36300/ha/year"
    }
  },
  {
    name: "Blueberries",
    icon: Cherry,
    season: "Perennial",
    soilTypes: ["Peaty", "Sandy"],
    growthTime: "3-5 years",
    yield: "High",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "Acidic fertilizer, NPK 10-10-10 (150 kg/ha/year)",
      seeds: "Plants, 3000-4000/ha",
      irrigation: "Drip irrigation, acidic water"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for mummy berry and aphids",
      insurance: "Weather and pest insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Peat moss and pine needles",
      composting: "Acidic organic matter",
      irrigation: "Drip irrigation with mulching"
    },
    profitPrediction: {
      estimatedYield: "8-15 tons/ha",
      inputCost: "$1000-1500/ha/year",
      marketValue: "$2000-4000/ton",
      expectedProfit: "$15000-58500/ha/year"
    }
  },

  // Chalky soil crops - all seasons
  {
    name: "Lavender",
    icon: FlowerIcon,
    season: "Perennial",
    soilTypes: ["Chalky", "Sandy"],
    growthTime: "2-3 years",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "Low nitrogen fertilizer, NPK 5-10-10 (50 kg/ha/year)",
      seeds: "Plants, 10,000-15,000/ha",
      irrigation: "Minimal irrigation required"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and root rot",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs, lime addition",
      composting: "Lavender pruning incorporation",
      irrigation: "Rain-fed cultivation"
    },
    profitPrediction: {
      estimatedYield: "1-2 tons/ha (dried flowers)",
      inputCost: "$300-500/ha/year",
      marketValue: "$3000-5000/ton",
      expectedProfit: "$2700-9700/ha/year"
    }
  },
  {
    name: "Rosemary",
    icon: Leaf,
    season: "Perennial",
    soilTypes: ["Chalky", "Sandy"],
    growthTime: "2-3 years",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "Low nitrogen fertilizer, NPK 5-10-10 (50 kg/ha/year)",
      seeds: "Cuttings, 8,000-12,000/ha",
      irrigation: "Minimal irrigation required"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Monitor for spider mites and aphids",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs, alkaline soil preferred",
      composting: "Rosemary pruning incorporation",
      irrigation: "Rain-fed cultivation"
    },
    profitPrediction: {
      estimatedYield: "2-4 tons/ha (fresh herbs)",
      inputCost: "$400-600/ha/year",
      marketValue: "$2000-3000/ton",
      expectedProfit: "$3600-11400/ha/year"
    }
  },

  // Additional Silty-Perennial crops
  {
    name: "Alder",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Silty", "Clay"],
    growthTime: "5-8 years",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (50 kg/ha/year), FYM (5 tons/ha)",
      seeds: "Seedlings, 1000-1500/ha",
      irrigation: "High moisture requirement"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for aphids and caterpillars",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Nitrogen fixation capability",
      composting: "Alder leaf incorporation",
      irrigation: "Wetland conditions"
    },
    profitPrediction: {
      estimatedYield: "100-200 tons/ha (timber)",
      inputCost: "$250-400/ha/year",
      marketValue: "$80-150/ton",
      expectedProfit: "$7600-29600/ha (at harvest)"
    }
  },
  {
    name: "Cattail",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Silty", "Clay"],
    growthTime: "2-3 years",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "Minimal fertilizer required",
      seeds: "Rhizomes, 5000-8000/ha",
      irrigation: "Waterlogged conditions required"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Natural pest resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Natural wetland nutrients",
      composting: "Cattail biomass for various uses",
      irrigation: "Natural wetland cultivation"
    },
    profitPrediction: {
      estimatedYield: "20-40 tons/ha (biomass)",
      inputCost: "$100-200/ha/year",
      marketValue: "$100-200/ton",
      expectedProfit: "$1900-7800/ha/year"
    }
  },
  {
    name: "Reed Grass",
    icon: Sprout,
    season: "Perennial",
    soilTypes: ["Silty", "Clay"],
    growthTime: "2-3 years",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "Minimal fertilizer required",
      seeds: "Rhizomes, 3000-5000/ha",
      irrigation: "High moisture requirement"
    },
    cropRotation: ["N/A - Perennial crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Natural resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Natural wetland nutrients",
      composting: "Reed biomass for construction/biofuel",
      irrigation: "Wetland cultivation"
    },
    profitPrediction: {
      estimatedYield: "15-30 tons/ha (biomass)",
      inputCost: "$100-200/ha/year",
      marketValue: "$80-150/ton",
      expectedProfit: "$1100-4300/ha/year"
    }
  },

  // Additional Peaty soil crops
  {
    name: "Sphagnum Moss",
    icon: Leaf,
    season: "Kharif",
    soilTypes: ["Peaty", "Silty"],
    growthTime: "1-2 years",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "No fertilizer required",
      seeds: "Moss fragments, 100-200 kg/ha",
      irrigation: "Constant moisture required"
    },
    cropRotation: ["Cranberries", "Blueberries", "Bog plants"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Natural resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Natural bog conditions",
      composting: "Moss harvesting for horticulture",
      irrigation: "Bog cultivation"
    },
    profitPrediction: {
      estimatedYield: "5-10 tons/ha (dried moss)",
      inputCost: "$200-400/ha",
      marketValue: "$500-1000/ton",
      expectedProfit: "$2300-9600/ha"
    }
  },
  {
    name: "Bog Cotton",
    icon: FlowerIcon,
    season: "Kharif",
    soilTypes: ["Peaty", "Silty"],
    growthTime: "4-6 months",
    yield: "Medium",
    color: "text-accent",
    rawMaterials: {
      fertilizer: "Acidic fertilizer, NPK 5-10-10 (50 kg/ha)",
      seeds: "Seeds, 2-3 kg/ha",
      irrigation: "Bog conditions required"
    },
    cropRotation: ["Cranberries", "Sphagnum moss", "Bog plants"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for bog-specific pests",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Peat and acidic organic matter",
      composting: "Bog cotton waste incorporation",
      irrigation: "Natural bog conditions"
    },
    profitPrediction: {
      estimatedYield: "0.5-1 ton/ha (fiber)",
      inputCost: "$300-500/ha",
      marketValue: "$2000-3000/ton",
      expectedProfit: "$700-2500/ha"
    }
  },
  {
    name: "Peat Sedge",
    icon: Sprout,
    season: "Kharif",
    soilTypes: ["Peaty", "Silty"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "Minimal fertilizer required",
      seeds: "Seeds, 5-8 kg/ha",
      irrigation: "Bog/wetland conditions"
    },
    cropRotation: ["Sphagnum moss", "Bog cotton", "Cranberries"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Natural resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Natural bog nutrients",
      composting: "Sedge biomass for various uses",
      irrigation: "Natural bog cultivation"
    },
    profitPrediction: {
      estimatedYield: "8-15 tons/ha (biomass)",
      inputCost: "$200-350/ha",
      marketValue: "$100-200/ton",
      expectedProfit: "$600-2650/ha"
    }
  },
  {
    name: "Bog Blueberry",
    icon: Cherry,
    season: "Kharif",
    soilTypes: ["Peaty", "Silty"],
    growthTime: "2-3 years",
    yield: "Medium",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "Acidic fertilizer, NPK 10-10-10 (100 kg/ha/year)",
      seeds: "Plants, 2000-3000/ha",
      irrigation: "Bog conditions with controlled water"
    },
    cropRotation: ["N/A - Perennial bog crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Monitor for bog-specific pests",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Peat moss and acidic organic matter",
      composting: "Bog plant residues",
      irrigation: "Natural bog water management"
    },
    profitPrediction: {
      estimatedYield: "5-10 tons/ha",
      inputCost: "$800-1200/ha/year",
      marketValue: "$1500-2500/ton",
      expectedProfit: "$6700-23800/ha/year"
    }
  },
  {
    name: "Cloudberry",
    icon: Cherry,
    season: "Kharif",
    soilTypes: ["Peaty", "Silty"],
    growthTime: "2-3 years",
    yield: "Low",
    color: "text-destructive",
    rawMaterials: {
      fertilizer: "Acidic fertilizer, NPK 5-10-10 (50 kg/ha/year)",
      seeds: "Plants, 5000-8000/ha",
      irrigation: "Bog conditions required"
    },
    cropRotation: ["N/A - Perennial bog crop"],
    riskManagement: {
      droughtResistance: "Low",
      floodResistance: "High",
      pestControl: "Natural bog resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Natural bog conditions",
      composting: "Minimal intervention required",
      irrigation: "Natural bog cultivation"
    },
    profitPrediction: {
      estimatedYield: "1-3 tons/ha",
      inputCost: "$600-900/ha/year",
      marketValue: "$3000-5000/ton",
      expectedProfit: "$2400-14100/ha/year"
    }
  },

  // Additional Chalky soil crops
  {
    name: "Thyme",
    icon: Leaf,
    season: "Kharif",
    soilTypes: ["Chalky", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "Low nitrogen fertilizer, NPK 5-10-10 (50 kg/ha)",
      seeds: "Seeds, 1-2 kg/ha",
      irrigation: "Minimal irrigation required"
    },
    cropRotation: ["Lavender", "Rosemary", "Mediterranean herbs"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Natural pest resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs, lime addition",
      composting: "Thyme pruning incorporation",
      irrigation: "Rain-fed cultivation"
    },
    profitPrediction: {
      estimatedYield: "1-2 tons/ha (dried herbs)",
      inputCost: "$200-400/ha",
      marketValue: "$2500-4000/ton",
      expectedProfit: "$2300-7600/ha"
    }
  },
  {
    name: "Oregano",
    icon: Leaf,
    season: "Kharif",
    soilTypes: ["Chalky", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "Low nitrogen fertilizer, NPK 5-10-10 (50 kg/ha)",
      seeds: "Seeds, 1-2 kg/ha",
      irrigation: "Minimal irrigation required"
    },
    cropRotation: ["Thyme", "Lavender", "Rosemary"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Natural pest resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs, alkaline soil preferred",
      composting: "Oregano pruning incorporation",
      irrigation: "Rain-fed cultivation"
    },
    profitPrediction: {
      estimatedYield: "1.5-2.5 tons/ha (dried herbs)",
      inputCost: "$250-450/ha",
      marketValue: "$2000-3500/ton",
      expectedProfit: "$2550-8325/ha"
    }
  },
  {
    name: "Sage",
    icon: Leaf,
    season: "Kharif",
    soilTypes: ["Chalky", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "Low nitrogen fertilizer, NPK 5-10-10 (50 kg/ha)",
      seeds: "Seeds, 2-3 kg/ha",
      irrigation: "Minimal irrigation required"
    },
    cropRotation: ["Thyme", "Oregano", "Lavender"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Natural pest resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs, lime addition beneficial",
      composting: "Sage pruning incorporation",
      irrigation: "Rain-fed cultivation"
    },
    profitPrediction: {
      estimatedYield: "1-2 tons/ha (dried herbs)",
      inputCost: "$200-400/ha",
      marketValue: "$3000-4500/ton",
      expectedProfit: "$2800-8600/ha"
    }
  },
  {
    name: "Marjoram",
    icon: Leaf,
    season: "Kharif",
    soilTypes: ["Chalky", "Sandy"],
    growthTime: "3-4 months",
    yield: "Medium",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "Low nitrogen fertilizer, NPK 5-10-10 (50 kg/ha)",
      seeds: "Seeds, 1-2 kg/ha",
      irrigation: "Minimal irrigation required"
    },
    cropRotation: ["Sage", "Thyme", "Oregano"],
    riskManagement: {
      droughtResistance: "High",
      floodResistance: "Low",
      pestControl: "Natural pest resistance",
      insurance: "Weather insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Minimal inputs, alkaline conditions preferred",
      composting: "Marjoram pruning incorporation",
      irrigation: "Rain-fed cultivation"
    },
    profitPrediction: {
      estimatedYield: "1-1.5 tons/ha (dried herbs)",
      inputCost: "$200-350/ha",
      marketValue: "$2500-4000/ton",
      expectedProfit: "$2300-5650/ha"
    }
  },
  {
    name: "Basil",
    icon: Leaf,
    season: "Kharif",
    soilTypes: ["Chalky", "Loamy"],
    growthTime: "3-4 months",
    yield: "High",
    color: "text-leaf",
    rawMaterials: {
      fertilizer: "NPK 10-10-10 (100 kg/ha), Calcium (50 kg/ha)",
      seeds: "Seeds, 2-3 kg/ha",
      irrigation: "Regular irrigation, 25-30 mm weekly"
    },
    cropRotation: ["Tomatoes", "Peppers", "Mediterranean herbs"],
    riskManagement: {
      droughtResistance: "Medium",
      floodResistance: "Low",
      pestControl: "Monitor for aphids and fungal diseases",
      insurance: "Disease insurance recommended"
    },
    sustainablePractices: {
      organicInputs: "Compost and organic mulches",
      composting: "Basil residue incorporation",
      irrigation: "Drip irrigation"
    },
    profitPrediction: {
      estimatedYield: "3-5 tons/ha (fresh herbs)",
      inputCost: "$400-600/ha",
      marketValue: "$1500-2500/ton",
      expectedProfit: "$4100-12100/ha"
    }
  }
];

interface CropRecommendationsProps {
  soilType?: string;
  location?: string;
  season?: string;
  onCropSelect?: (cropData: unknown) => void;
}

export const CropRecommendations = ({ soilType, location, season, onCropSelect }: CropRecommendationsProps) => {
  const navigate = useNavigate();
  const filteredCrops = crops.filter((cropItem) => {
    const soilMatch = !soilType || cropItem.soilTypes.some((soil) =>
      soil.toLowerCase().includes(soilType.toLowerCase())
    );
    const seasonMatch = !season || cropItem.season.toLowerCase() === season.toLowerCase();
    return soilMatch && seasonMatch;
  });

  // Only show recommendations if both soilType and season are selected
  if (!soilType || !season) {
    return (
      <section id="recommendations" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Crop Recommendations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your soil type and season above to get personalized crop recommendations.
            </p>
          </div>
        </div>
      </section>
    );
  }



  return (
    <section id="recommendations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Recommended Crops
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Based on your {soilType} soil and {season} season{location ? ` in ${location}` : ''}, these crops will thrive in your fields
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Showing {filteredCrops.length} crop{filteredCrops.length !== 1 ? 's' : ''} for {soilType} soil in {season}{location ? ` (${location})` : ''}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Click on any crop below to see detailed information including raw materials, crop rotation, risk management, sustainable practices, and profit predictions.
          </p>
        </div>

        {filteredCrops.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-grow">
            {filteredCrops.map((crop, index) => {
              const Icon = crop.icon;
              return (
                <Card
                  key={crop.name}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => {
                    const { icon, ...cropDataWithoutIcon } = crop;
                    navigate(`/crop/${encodeURIComponent(crop.name)}`, {
                      state: {
                        cropData: cropDataWithoutIcon,
                        soilType,
                        location,
                        season
                      }
                    });
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-12 h-12 ${crop.color} group-hover:animate-float`} />
                      <Badge variant={crop.yield === "High" ? "default" : "secondary"}>
                        {crop.yield} Yield
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{crop.name}</CardTitle>
                    <CardDescription>Best in {crop.season}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Suitable Soil Types:
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {crop.soilTypes.map((soil) => (
                            <Badge key={soil} variant="outline">
                              {soil}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Growth Time:
                        </p>
                        <p className="text-sm">{crop.growthTime}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          const { icon, ...cropDataWithoutIcon } = crop;
                          navigate(`/crop/${encodeURIComponent(crop.name)}`, {
                            state: {
                              cropData: cropDataWithoutIcon,
                              soilType,
                              location,
                              season
                            }
                          });
                        }}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No crops found for the selected soil type and season combination.
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Try selecting different options or contact our experts for advice.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
