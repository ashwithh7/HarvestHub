const fs = require('fs');

let code = fs.readFileSync('src/components/CropRecommendations.tsx', 'utf8');
let match = code.match(/const crops = (\[[\s\S]*?\]);\s+return/);
if(!match) {
    match = code.match(/const crops = (\[[\s\S]*?\n\]);\n/);
}
if(!match) {
    console.error('Could not find crops array');
    process.exit(1);
}
let arrayStr = match[1];

let icons = [
    'Wheat', 'Apple', 'Carrot', 'Leaf', 'Sprout', 'FlowerIcon', 
    'Cherry', 'Citrus', 'Grape', 'Banana', 'ArrowRight', 'Coffee', 
    'Trees', 'Bean', 'Nut', 'Vegetable'
];
let evalContext = icons.map(i => 'const ' + i + ' = \"' + i + '\";').join('\n');

try {
    let cropsArray = new Function(evalContext + ' return ' + arrayStr + ';')();
    
    let enriched = cropsArray.map(c => {
        let baseYield = Math.floor(Math.random() * 8) + 2;
        let baseCost = Math.floor(Math.random() * 20000) + 10000;
        return {
            ...c,
            waterRequirementPerHectare: Math.floor(Math.random() * 50000) + 10000,
            fertilizerRequirementPerHectare: Math.floor(Math.random() * 400) + 100,
            expectedYieldPerHectare: baseYield,
            marketPrice: Math.floor(Math.random() * 300) + 100,
            costPerHectare: baseCost,
            expectedRevenuePerHectare: baseYield * (Math.floor(Math.random() * 300) + 100),
            droughtTolerance: Math.random() > 0.5 ? 'High' : 'Medium',
            sustainabilityScore: Math.floor(Math.random() * 50) + 50,
            riskLevel: Math.random() > 0.5 ? 'Low' : 'Medium'
        }
    });

    let outStr = 'import { ' + icons.join(', ') + ' } from \"lucide-react\";\n\n';
    outStr += 'export const crops = [\n';
    enriched.forEach(c => {
        let str = JSON.stringify(c, null, 2);
        str = str.replace(/\"icon\": \"([^\"]+)\"/, 'icon: $1');
        outStr += str + ',\n';
    });
    outStr += '];\n';
    
    if (!fs.existsSync('src/data')) {
        fs.mkdirSync('src/data');
    }
    fs.writeFileSync('src/data/crops.ts', outStr);
    console.log('Successfully extracted and enriched ' + enriched.length + ' crops');
} catch(e) {
    console.error(e);
}
