# Cresensia Julius Portfolio

## Overview
This project is a **personal portfolio website** built for Cloud Computing coursework.  
It demonstrates **frontend deployment on Vercel** and **backend API deployment on Render**.

## Features
- Personal Profile
- Skills
- Qualifications
- Projects
- Contact Form (connected to backend API)

## Tech Stack
- Frontend: HTML, CSS, JavaScript (Vercel)
- Backend: Node.js, Express.js (Render)
- Optional: Python (Flask) for Data Science demos

## Deployment
1. **Frontend (Vercel)**
   - Push `frontend/` to GitHub
   - Connect repo to Vercel → Deploy

2. **Backend (Render)**
   - Push `backend/` to GitHub
   - Create new Render Web Service → Deploy

3. **Connect Frontend & Backend**
   - Update `contact.html` fetch URL with your Render backend link
   
## structure
portfolio-website/
│
├── frontend/
│   ├── index.html        # Home page
│   ├── about.html        # Core Competencies page
│   ├── css/
│   │   └── style.css     # Global styles
│   ├── assets/
│   │   └── images      # Portfolio images/icons
│   └── js/
│       └── main.js       # Contact form logic
│
├── backend/
│   ├── server.js         # Express backend
│   ├── routes/
│   │   ├── contact.js    # Contact form API
│   │   └── status.js     # API status endpoint
│   ├── package.json      # Dependencies
│   └── README.md         # Backend documentation
│
└── MAINREADME.md             # Overall project documentation



## Author
Cresensia Julius
