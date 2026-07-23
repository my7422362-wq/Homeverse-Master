# Routing rollback TODO

- [x] Replace `src/App.tsx` with best-effort rollback removing React Router routes.
- [x] Replace `src/main.tsx` to remove `BrowserRouter` and react-router-dom imports.
- [ ] Delete routing refactor files/folders: `src/routes/*` and `src/layouts/*`.
- [ ] Delete pages introduced/required by routing refactor: About, Contact, Properties, PropertyDetails, NotFound (only if they were routing-only; otherwise keep but remove router usage).
- [ ] Remove remaining `react-router-dom` imports/usages in the codebase.
- [ ] Run `npm test` / `npm run build` / `npm run typecheck` (whichever exists) to confirm no TS/build errors.


