# Building and Deploying a Personal Portfolio Website Using Cloud Platforms

## Assignment Overview
This repository contains a personal portfolio website built for the Cloud Computing assignment. It showcases:
- Personal profile
- Skills
- Qualifications
- Projects
- Contact information

The project includes:
- Frontend hosted on Vercel
- Backend API hosted on Render

## What is included
- `frontend/` — static site with HTML, CSS, and JavaScript
- `frontend/vercel.json` — Vercel configuration for static hosting and SPA routing
- `backend/` — Express API with contact and status endpoints
- `backend/package.json` — backend dependencies and start script
- `backend/routes/` — simple modular API route handlers

## Features
- Responsive homepage and about page
- Personal profile and skills section
- Project highlights section
- Contact form connected to backend API
- API health status check

## Deployment
1. **Frontend (Vercel)**
   - Push the repo to GitHub
   - In Vercel, set the project root to `frontend`
   - Deploy the static frontend

2. **Backend (Render)**
   - Create a new Render Web Service
   - Set the root directory to `backend`
   - Start command: `npm start`
   - Render will deploy the Express API

3. **Connect the backend**
   - In `frontend/main.js`, replace `https://crexjulie-portifolio.onrender.com` with your actual Render backend URL if needed

## Notes
- CORS is enabled on the backend so the frontend can request the API from Vercel.
- The contact form uses the backend endpoint at `/api/contact`.
- The status widget checks `/api/status`.
- Contact messages are saved on the backend, not sent to email automatically.
- Your git commit message can be any clear text, such as `Update portfolio` or `Fix contact form`.

## Author
Cresensia Julius
