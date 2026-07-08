Just having some fun + playing around! 

## Setup

### Frontend (Vite + React)
```bash
npm install
npm run dev
```
Runs on http://localhost:5173

### Backend (Express)
```bash
cd server
npm install
node index.js
```
Runs on http://localhost:3001

Both need to be running simultaneously (two terminal tabs) for the app to work end to end.

### Database (Supabase)
- Hosted Postgres, free tier — not local
- Env vars live in `server/.env` 
- Frontend has its own `.env` with the **publishable** key (safe client-side)
- New tables: Supabase dashboard → SQL Editor
- New tables need explicit grants + RLS policies or you'll hit permission errors (see lessons below)

## Weekly tabs
- Week 1: Basic react app setup with vite server
- Week 2: Snake
- Week 3: Path/walk mapper (Leaflet + OSM)
- Week 4: Backend setup (Express + Supabase) + Guesses calibration 
- Week 5 (planned): Rebuild guesses API in FastAPI, compare vs. Express

## Lessons learned
- Supabase tables need explicit grants (`GRANT SELECT, INSERT ON table TO service_role`) even when using the secret key — table-level grants and RLS policies are separate mechanisms and both can block you independently
- Vite requires `VITE_` prefix on env vars; CRA requires `REACT_APP_` — mismatched prefixes silently return `undefined`
- `"type": "module"` vs `"type": "commonjs"` in package.json must match your import/export syntax, mixing them throws immediately
