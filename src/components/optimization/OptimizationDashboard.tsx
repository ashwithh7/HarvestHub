import { FarmInput, OptimizationStrategy, StrategyComparison, CropSuitability } from "@/types/agriculture";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Leaf, Droplets, Target, IndianRupee, TrendingUp, AlertTriangle, ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface OptimizationDashboardProps {
  farmInput: FarmInput;
  scoredCrops: CropSuitability[];
  comparisons: StrategyComparison[];
  activeStrategy: OptimizationStrategy;
  onStrategyChange: (strategy: OptimizationStrategy) => void;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export const OptimizationDashboard = ({ farmInput, scoredCrops, comparisons, activeStrategy, onStrategyChange }: OptimizationDashboardProps) => {
  const navigate = useNavigate();
  const activeComparison = comparisons.find(c => 
    (activeStrategy === "MAX_PROFIT" && c.strategyName === "Maximum Profit") ||
    (activeStrategy === "MAX_YIELD" && c.strategyName === "Maximum Yield") ||
    (activeStrategy === "RESOURCE_EFFICIENT" && c.strategyName === "Resource Efficient")
  ) || comparisons[0];

  const pieData = activeComparison.results.map(r => ({
    name: r.cropName,
    value: r.allocatedLand
  }));

  const formatCurrency = (val: number) => `₹${val.toLocaleString('en-IN')}`;
  
  return (
    <div className="space-y-6">
      {/* Strategy Selector */}
      <div className="bg-card text-card-foreground shadow-sm border rounded-xl p-2 flex space-x-2">
        <button 
          onClick={() => onStrategyChange("MAX_PROFIT")}
          className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-colors ${activeStrategy === "MAX_PROFIT" ? 'bg-primary text-primary-foreground shadow' : 'hover:bg-muted'}`}
        >
          Maximum Profit
        </button>
        <button 
          onClick={() => onStrategyChange("MAX_YIELD")}
          className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-colors ${activeStrategy === "MAX_YIELD" ? 'bg-primary text-primary-foreground shadow' : 'hover:bg-muted'}`}
        >
          Maximum Yield
        </button>
        <button 
          onClick={() => onStrategyChange("RESOURCE_EFFICIENT")}
          className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-colors ${activeStrategy === "RESOURCE_EFFICIENT" ? 'bg-primary text-primary-foreground shadow' : 'hover:bg-muted'}`}
        >
          Resource Efficient
        </button>
      </div>

      {activeComparison.results.length === 0 ? (
        <div className="bg-destructive/10 text-destructive p-6 rounded-xl border border-destructive/20 flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">No feasible allocation found</h3>
            <p>The optimization engine could not find any suitable crops that fit within your budget and resource constraints. Try increasing your available water, fertilizer, or budget, or select a different season/soil type.</p>
          </div>
        </div>
      ) : (
        <>
          {/* Top Level KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card shadow-sm border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Target className="h-4 w-4" />
                <span className="text-sm font-medium">Expected Profit</span>
              </div>
              <div className="text-2xl font-bold text-primary">{formatCurrency(activeComparison.totalProfit)}</div>
            </div>
            <div className="bg-card shadow-sm border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Expected Yield</span>
              </div>
              <div className="text-2xl font-bold">{activeComparison.totalYield.toLocaleString()} tonnes</div>
            </div>
            <div className="bg-card shadow-sm border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Droplets className="h-4 w-4" />
                <span className="text-sm font-medium">Water Saved</span>
              </div>
              <div className="text-2xl font-bold text-blue-500">{activeComparison.waterSaved?.toLocaleString()} L</div>
            </div>
            <div className="bg-card shadow-sm border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-medium">Fertilizer Saved</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{activeComparison.fertilizerSaved?.toLocaleString()} kg</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Charts */}
            <div className="bg-card shadow-sm border rounded-xl p-6">
              <h3 className="font-semibold mb-6">Land Allocation</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value" label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip formatter={(value: number) => [`${value} Hectares`, 'Land']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-card shadow-sm border rounded-xl p-6">
              <h3 className="font-semibold mb-6">Resource Utilization</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Land</span>
                    <span className="font-medium">{activeComparison.totalLandUsed} / {farmInput.land} ha</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{width: `${Math.min(100, (activeComparison.totalLandUsed / farmInput.land) * 100)}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Water</span>
                    <span className="font-medium">{activeComparison.totalWaterUsed.toLocaleString()} / {farmInput.water.toLocaleString()} L</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{width: `${Math.min(100, (activeComparison.totalWaterUsed / farmInput.water) * 100)}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Fertilizer</span>
                    <span className="font-medium">{activeComparison.totalFertilizerUsed.toLocaleString()} / {farmInput.fertilizer.toLocaleString()} kg</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{width: `${Math.min(100, (activeComparison.totalFertilizerUsed / farmInput.fertilizer) * 100)}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Budget</span>
                    <span className="font-medium">{formatCurrency(activeComparison.totalCost)} / {formatCurrency(farmInput.budget)}</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500" style={{width: `${Math.min(100, (activeComparison.totalCost / farmInput.budget) * 100)}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Table */}
          <div className="bg-card shadow-sm border rounded-xl overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="font-semibold text-lg">Crop Allocation Plan</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Crop</th>
                    <th className="px-6 py-3">Land (ha)</th>
                    <th className="px-6 py-3">Water (L)</th>
                    <th className="px-6 py-3">Fert. (kg)</th>
                    <th className="px-6 py-3">Cost</th>
                    <th className="px-6 py-3">Yield</th>
                    <th className="px-6 py-3">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  {activeComparison.results.map((r, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-muted/30">
                      <td className="px-6 py-4 font-medium">
                        <button 
                          onClick={() => {
                            const crop = scoredCrops.find(sc => sc.crop.id === r.cropId)?.crop;
                            navigate(`/crop/${encodeURIComponent(r.cropName)}`, {
                              state: { 
                                cropData: {
                                  name: r.cropName,
                                  season: crop?.season || "Unknown",
                                  soilTypes: crop?.suitableSoils || [],
                                  growthTime: crop?.growthDuration || "3-4 months",
                                  yield: "High",
                                  rawMaterials: {
                                    fertilizer: `${r.fertilizerUsed} kg/ha`,
                                    seeds: "20 kg/ha",
                                    irrigation: `${r.waterUsed} L/ha`
                                  },
                                  cropRotation: ["Wheat", "Soybean", "Legumes"],
                                  riskManagement: {
                                    droughtResistance: crop?.droughtTolerance || "Medium",
                                    floodResistance: "Medium",
                                    pestControl: "Standard pest control",
                                    insurance: "Recommended"
                                  },
                                  sustainablePractices: {
                                    organicInputs: "Use compost",
                                    composting: "Incorporate residue",
                                    irrigation: "Drip or efficient irrigation"
                                  },
                                  profitPrediction: {
                                    estimatedYield: `${r.expectedYield} tonnes`,
                                    inputCost: `₹${r.cost.toLocaleString()}`,
                                    marketValue: `₹${crop?.marketPrice || 0}/tonne`,
                                    expectedProfit: `₹${r.expectedProfit.toLocaleString()}`
                                  }
                                } 
                              }
                            });
                          }}
                          className="text-primary hover:underline text-left"
                        >
                          {r.cropName}
                        </button>
                      </td>
                      <td className="px-6 py-4">{r.allocatedLand}</td>
                      <td className="px-6 py-4">{r.waterUsed.toLocaleString()}</td>
                      <td className="px-6 py-4">{r.fertilizerUsed.toLocaleString()}</td>
                      <td className="px-6 py-4">{formatCurrency(r.cost)}</td>
                      <td className="px-6 py-4">{r.expectedYield} t</td>
                      <td className="px-6 py-4 text-primary font-medium">{formatCurrency(r.expectedProfit)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Explainability Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Why these crops?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeComparison.results.map((r, i) => {
                const suitability = scoredCrops.find(sc => sc.crop.id === r.cropId);
                if (!suitability) return null;
                return (
                  <div key={`exp-${i}`} className="bg-card shadow-sm border rounded-xl p-5">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-lg">{r.cropName}</h4>
                      <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded font-bold">{suitability.score}/100 Score</div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-green-600 flex items-center gap-1 font-medium"><ShieldCheck className="w-4 h-4" /> Reasons to grow</span>
                        <ul className="mt-1 text-muted-foreground list-disc pl-5">
                          {suitability.reasons.slice(0, 3).map((reason, idx) => <li key={idx}>{reason.replace('✓ ', '')}</li>)}
                        </ul>
                      </div>
                      {suitability.warnings.length > 0 && (
                        <div>
                          <span className="text-amber-600 flex items-center gap-1 font-medium"><AlertTriangle className="w-4 h-4" /> Considerations</span>
                          <ul className="mt-1 text-muted-foreground list-disc pl-5">
                            {suitability.warnings.slice(0, 2).map((warning, idx) => <li key={idx}>{warning.replace('⚠ ', '')}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
