import { useState } from "react";
import { FarmInput, OptimizationStrategy, StrategyComparison, CropSuitability } from "@/types/agriculture";
import { cropsData } from "@/data/crops";
import { evaluateAllCrops } from "@/services/suitabilityService";
import { generateStrategyComparison } from "@/services/strategyService";
import { FarmInputForm } from "@/components/optimization/FarmInputForm";
import { OptimizationDashboard } from "@/components/optimization/OptimizationDashboard";
import { Navbar } from "@/components/optimization/Navbar";

const DEMO_INPUT: FarmInput = {
  land: 10,
  budget: 200000,
  water: 50000,
  fertilizer: 500,
  soilType: "Loamy",
  season: "Kharif",
  region: "Telangana",
  temperature: 28,
  rainfall: 800,
  soilPH: 6.5
};

export default function Optimization() {
  const [farmInput, setFarmInput] = useState<FarmInput | null>(null);
  const [scoredCrops, setScoredCrops] = useState<CropSuitability[]>([]);
  const [comparisons, setComparisons] = useState<StrategyComparison[]>([]);
  const [activeStrategy, setActiveStrategy] = useState<OptimizationStrategy>("MAX_PROFIT");

  const handleOptimize = (input: FarmInput) => {
    setFarmInput(input);
    const evaluated = evaluateAllCrops(cropsData, input);
    setScoredCrops(evaluated);
    const strategyResults = generateStrategyComparison(evaluated, input);
    setComparisons(strategyResults);
  };

  const loadDemo = () => {
    handleOptimize(DEMO_INPUT);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-harvest mb-2">AI Farm Optimization</h1>
          <p className="text-muted-foreground text-lg">
            Mathematical resource allocation and crop suitability prediction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <FarmInputForm onOptimize={handleOptimize} onDemo={loadDemo} initialValues={farmInput} />
          </div>
          
          <div className="lg:col-span-2">
            {farmInput && comparisons.length > 0 ? (
              <OptimizationDashboard 
                farmInput={farmInput}
                scoredCrops={scoredCrops}
                comparisons={comparisons}
                activeStrategy={activeStrategy}
                onStrategyChange={setActiveStrategy}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] bg-muted/30 rounded-xl border border-dashed border-muted-foreground/30 p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">No Optimization Run</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Enter your farm details on the left or load the demo scenario to generate an AI-powered crop allocation plan.
                </p>
                <button 
                  onClick={loadDemo}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Load Demo Farm
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
