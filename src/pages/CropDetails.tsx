import { useParams, useLocation } from "react-router-dom";
import { RawMaterialsQuantities } from "@/components/RawMaterialsQuantities";
import { CropRotationPlan } from "@/components/CropRotationPlan";
import { RiskManagementAdvice } from "@/components/RiskManagementAdvice";
import { SustainablePractices } from "@/components/SustainablePractices";
import { ProfitYieldPrediction } from "@/components/ProfitYieldPrediction";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Wheat, Apple, Carrot, Leaf, Sprout, FlowerIcon, Cherry, Citrus, Grape, Banana } from "lucide-react";
import { useNavigate } from "react-router-dom";

const getIconForCrop = (cropName: string) => {
  const iconMap: Record<string, React.ElementType> = {
    'Wheat': Wheat, 'Tomatoes': Apple, 'Chillies': Apple, 'Onions': Apple, 'Potatoes': Carrot,
    'Brinjal': Apple, 'Mango': Apple, 'Banana': Banana, 'Papaya': Apple, 'Guava': Apple,
    'Sweet Orange': Citrus, 'Pomegranate': Apple, 'Grapes': Grape, 'Sapota': Apple,
    'Custard Apple': Apple, 'Sunflower': FlowerIcon, 'Safflower': FlowerIcon, 'Cotton': FlowerIcon,
    'Mustard': FlowerIcon, 'Lotus Root': FlowerIcon, 'Water Hyacinth': FlowerIcon,
    'Bog Cotton': FlowerIcon, 'Cauliflower': FlowerIcon, 'Lavender': FlowerIcon,
    'Cranberries': Cherry, 'Blueberries': Cherry, 'Bog Blueberry': Cherry, 'Cloudberry': Cherry,
    'Water Spinach': Leaf, 'Mustard Greens': Leaf, 'Cabbage': Leaf, 'Summer Spinach': Leaf,
    'Summer Lettuce': Leaf, 'Duckweed': Leaf, 'Mint': Leaf, 'Sphagnum Moss': Leaf,
    'Thyme': Leaf, 'Oregano': Leaf, 'Sage': Leaf, 'Marjoram': Leaf, 'Basil': Leaf, 'Rosemary': Leaf
  };
  return iconMap[cropName] || Sprout;
};

const CropDetails = () => {
  const { cropName } = useParams<{ cropName: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Get crop data from navigation state
  const cropData = location.state?.cropData;
  const soilType = location.state?.soilType;
  const locationName = location.state?.location;
  const season = location.state?.season;

  if (!cropData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Crop Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested crop details are not available.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = getIconForCrop(cropData?.name || cropName || '');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Recommendations
          </button>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Icon className={`w-16 h-16 ${cropData.color}`} />
              <div>
                <h1 className="text-5xl font-bold text-foreground">{cropData.name}</h1>
                <Badge variant={cropData.yield === "High" ? "default" : "secondary"} className="mt-2">
                  {cropData.yield} Yield
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Detailed information for {cropData.name} cultivation
            </p>
            {(soilType || locationName || season) && (
              <p className="text-lg text-muted-foreground mt-2">
                Context: {soilType && `${soilType} soil`}{locationName && ` in ${locationName}`}{season && ` during ${season}`}
              </p>
            )}
          </div>

          {/* Suitable Crops Section */}
          <div className="mb-8">
            <Card className="p-6 bg-gradient-to-r from-leaf/5 to-harvest/5 border-leaf/20">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Crop Suitability Analysis</CardTitle>
                <CardDescription className="text-base">
                  Based on soil nutrients, regional weather, and moisture content requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-leaf">Soil Requirements</h4>
                    <div className="space-y-2">
                      <div className="flex gap-2 flex-wrap">
                        {cropData.soilTypes.map((soil: string) => (
                          <Badge key={soil} variant={soil.toLowerCase() === soilType?.toLowerCase() ? "default" : "outline"}>
                            {soil}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {cropData.soilTypes.includes(soilType || '') 
                          ? `✅ Your ${soilType} soil is suitable for this crop`
                          : `⚠️ Consider soil amendments for optimal growth`
                        }
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Regional Weather</h4>
                    <div className="space-y-2">
                      <Badge variant={cropData.season.toLowerCase() === season?.toLowerCase() ? "default" : "outline"}>
                        {cropData.season} Season
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        {cropData.season.toLowerCase() === season?.toLowerCase()
                          ? `✅ Perfect timing for ${season} season`
                          : `ℹ️ Best grown during ${cropData.season} season`
                        }
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-sky-600">Moisture Content</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">{cropData.yield} Water Needs</Badge>
                      <p className="text-sm text-muted-foreground">
                        {cropData.riskManagement?.droughtResistance === 'High' 
                          ? '💧 Low water requirements - drought tolerant'
                          : cropData.riskManagement?.droughtResistance === 'Medium'
                          ? '💧 Moderate water requirements'
                          : '💧 High water requirements - ensure adequate irrigation'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Basic Crop Info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Season</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{cropData.season}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Growth Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{cropData.growthTime}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Yield Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant={cropData.yield === "High" ? "default" : "secondary"} className="text-lg px-3 py-1">
                  {cropData.yield} Yield
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <RawMaterialsQuantities cropData={cropData} />
      <CropRotationPlan cropData={cropData} />
      <RiskManagementAdvice cropData={cropData} />
      <SustainablePractices cropData={cropData} />
      <ProfitYieldPrediction cropData={cropData} />
    </div>
  );
};

export default CropDetails;
