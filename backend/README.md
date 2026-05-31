# Cresensia Julius Portfolio - Backend API

## Overview
This is the *backend API* for the Cresensia Julius Portfolio project.  
It provides endpoints for:
- *Contact Form* → `/api/contact`
- *Status Check* → `/api/status`

The backend is built with *Node.js + Express.js* and deployed on *Render*.

## Tech Stack
- *Runtime:* Node.js (v18+ recommended)
- *Framework:* Express.js
- *Dependencies:*  
  - express  
  - cors  

## Setup
1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Start locally:
   ```bash
   npm start
   ```
3. Verify locally:
   ```bash
   curl http://localhost:5000/api/status
   ```

## Render Deployment
1. Push the repository to GitHub.
2. Create a new Render Web Service.
3. Set the Root Directory to `backend`.
4. Set the Start Command to:
   ```bash
   npm start
   ```
5. Deploy.

## Notes
- CORS is enabled so the frontend can call the API from Vercel.
- If your Render URL is different, update `frontend/main.js` with the deployed backend URL.
