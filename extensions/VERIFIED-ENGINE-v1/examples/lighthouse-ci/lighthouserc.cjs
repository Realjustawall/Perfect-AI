// Copy into your project's root after reviewing start command and URL.
module.exports = {
 ci: {
   collect: {
     url: ['http://127.0.0.1:4173/'],
     startServerCommand: 'npm run preview -- --host 127.0.0.1 --port 4173',
     startServerReadyPattern: 'Local:',
     numberOfRuns: 3,
   },
   assert: {
     assertions: {
       'categories:performance': ['warn', { minScore: 0.85 }],
       'categories:accessibility': ['warn', { minScore: 0.9 }],
       'categories:best-practices': ['warn', { minScore: 0.9 }],
       'categories:seo': ['warn', { minScore: 0.85 }],
       'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
       'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
     },
   },
   upload: { target:'filesystem', outputDir:'./.lighthouseci/reports' },
 }
};
