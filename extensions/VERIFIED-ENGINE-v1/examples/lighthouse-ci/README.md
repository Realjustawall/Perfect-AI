# Lighthouse CI — evidence-first local gate
1. Copy the lighthouserc.cjs into the Vite project's root or use `--config`.
2. `npm install --save-dev @lhci/cli`. Validate `npm run build` and `npm run preview -- --host 127.0.0.1 --port 4173` for local config.
3. `npx lhci autorun --config=./lighthouserc.cjs`.
4. Artifacts saved only locally to `.lighthouseci/reports`. Never upload private test report to `temporary-public-storage` without explicit user request.
5. Interpret scores as lab measurements. Field INP requires actual RUM data; Lighthouse TBT is not a true real-user INP measurement. Adjust thresholds after collecting target device baseline, not to hide regressions.
