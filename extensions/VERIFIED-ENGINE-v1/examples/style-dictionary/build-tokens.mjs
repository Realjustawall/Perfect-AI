import StyleDictionary from 'style-dictionary';
const sd = new StyleDictionary({
  source:['tokens/**/*.json'],
  platforms: {css: {transformGroup:'css',buildPath:'build/',files:[{destination:'tokens.css',format:'css/variables',options:{outputReferences:true}}]}}
});
await sd.buildAllPlatforms();
console.log('Generated build/tokens.css — inspect CSS custom properties and contrast before shipping');
