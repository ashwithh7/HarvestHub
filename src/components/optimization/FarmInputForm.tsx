import { useState, useEffect } from "react";
import { FarmInput } from "@/types/agriculture";

interface FarmInputFormProps {
  onOptimize: (input: FarmInput) => void;
  onDemo: () => void;
  initialValues: FarmInput | null;
}

export const FarmInputForm = ({ onOptimize, onDemo, initialValues }: FarmInputFormProps) => {
  const [formData, setFormData] = useState<FarmInput>({
    land: 0,
    budget: 0,
    water: 0,
    fertilizer: 0,
    soilType: "Loamy",
    season: "Kharif",
    region: "Telangana",
    temperature: 25,
    rainfall: 500,
    soilPH: 6.5
  });

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "number" ? (parseFloat(value) || 0) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOptimize(formData);
  };

  return (
    <div className="bg-card text-card-foreground shadow-sm border rounded-xl overflow-hidden">
      <div className="p-6 border-b bg-muted/20">
        <h2 className="text-xl font-semibold">Farm Constraints & Parameters</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Enter your resources and conditions to generate an optimal plan.
        </p>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-primary uppercase tracking-wider">Resources</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Land (Hectares)</label>
                <input required type="number" min="0" step="0.1" name="land" value={formData.land || ""} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Budget (₹)</label>
                <input required type="number" min="0" name="budget" value={formData.budget || ""} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Water (Litres)</label>
                <input required type="number" min="0" name="water" value={formData.water || ""} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Fertilizer (kg)</label>
                <input required type="number" min="0" name="fertilizer" value={formData.fertilizer || ""} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="font-medium text-sm text-primary uppercase tracking-wider">Environment</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Soil Type</label>
                <select required name="soilType" value={formData.soilType} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="Clay">Clay</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Sandy Loam">Sandy Loam</option>
                  <option value="Black">Black</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Season</label>
                <select required name="season" value={formData.season} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="Kharif">Kharif (Monsoon)</option>
                  <option value="Rabi">Rabi (Winter)</option>
                  <option value="Zaid">Zaid (Summer)</option>
                  <option value="Annual">Annual</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Temperature (°C)</label>
                <input type="number" name="temperature" value={formData.temperature || ""} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Rainfall (mm)</label>
                <input type="number" name="rainfall" value={formData.rainfall || ""} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
              </div>
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button type="submit" className="flex-1 bg-primary text-primary-foreground h-10 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Optimize My Farm
            </button>
            <button type="button" onClick={onDemo} className="flex-1 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Load Demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
