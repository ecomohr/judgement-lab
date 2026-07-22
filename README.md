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
- Week 5: Rebuild guesses API in FastAPI, compare vs. Express

## Backend (FastAPI — Week 5 rebuild)
```
cd web
python3 -m venv venv
source venv/bin/activate
pip install fastapi "uvicorn[standard]" supabase python-dotenv
uvicorn app.main:app --reload
```
- Runs on http://localhost:8000
- Interactive docs at http://localhost:8000/docs
- Mirrors the Express folder structure loosely (routers/, models/, services/) so ported routes map 1:1 rather than requiring a redesign
- Coexists with the Express backend for now (not a replacement yet, just a parallel comparison)

## Lessons learned
- Supabase tables need explicit grants (`GRANT SELECT, INSERT ON table TO service_role`) even when using the secret key — table-level grants and RLS policies are separate mechanisms and both can block you independently
- Vite requires `VITE_` prefix on env vars; CRA requires `REACT_APP_` — mismatched prefixes silently return `undefined`
- `"type": "module"` vs `"type": "commonjs"` in package.json must match your import/export syntax, mixing them throws immediately
- venv folders must be gitignored and excluded from Jekyll builds (`exclude: [web/venv]` in `_config.yml`) — venv symlinks point to machine-specific Python paths and break GitHub Pages builds with a cryptic `rb_check_realpath_internal` error
