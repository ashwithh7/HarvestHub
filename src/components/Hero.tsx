import { useState } from "react";
import { Sprout, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-farm.jpg";

interface HeroProps {
  onRecommendationsUpdate?: (soilType: string, location: string, season: string) => void;
}

export const Hero = ({ onRecommendationsUpdate }: HeroProps) => {
  const [soilType, setSoilType] = useState("");
  const [location, setLocation] = useState("");
  const [season, setSeason] = useState("");

  const handleGetRecommendations = () => {
    if (soilType && season) {
      onRecommendationsUpdate?.(soilType, location, season);
      document.getElementById("recommendations")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 40, 20, 0.7), rgba(30, 40, 20, 0.5)), url(${heroImage})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6 animate-float">
            <Sprout className="w-12 h-12 text-accent" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              HarvestHub
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            Smart Crop Recommendations for Modern Farmers
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Get personalized crop suggestions based on your soil type and season.
            Grow smarter, harvest better.
          </p>

          {/* Recommendation Form */}
          <Card className="max-w-4xl mx-auto p-8 bg-card/95 backdrop-blur-sm shadow-2xl animate-grow">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Find Your Perfect Crop
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2 text-left">
                <label className="text-sm font-medium text-foreground">
                  Soil Type
                </label>
                <Select value={soilType} onValueChange={setSoilType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay Soil</SelectItem>
                    <SelectItem value="sandy">Sandy Soil</SelectItem>
                    <SelectItem value="loamy">Loamy Soil</SelectItem>
                    <SelectItem value="silty">Silty Soil</SelectItem>
                    <SelectItem value="peaty">Peaty Soil</SelectItem>
                    <SelectItem value="chalky">Chalky Soil</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-sm font-medium text-foreground">
                  Location
                </label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                    <SelectItem value="telangana">Telangana</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-sm font-medium text-foreground">
                  Season
                </label>
                <Select value={season} onValueChange={setSeason}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                    <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                    <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Button
                variant="hero"
                size="lg"
                className="w-full text-lg"
                onClick={handleGetRecommendations}
                disabled={!soilType || !season}
              >
                Get Recommendations
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full text-lg bg-background text-foreground hover:bg-muted"
                onClick={() => window.location.href = '/optimization'}
              >
                AI Farm Optimization (New)
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
