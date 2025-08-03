# 🌍 Encore Website Directory

This is the public-facing site for users to explore and view tools. Built using React and hosted on Hostinger with Git-based deployment.

## 🧱 Tech Stack
- React.js
- React Router DOM
- React.lazy
- ScrollToTop utility
- CSS Modules

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js v18+
- NPM or Yarn

### Installation
```bash
git clone https://github.com/your-org/public-site.git
cd public-site
cp .env.example .env
npm install
npm run dev
```
Access the app at:  
`http://localhost:5173`

## 🌐 Routes Overview
- `/` – Landing page  
- `/explore` – Discover tools  
- `/view/tool/:id` – View individual tool  

## 🔐 Environment Variables (`.env.example`)
```env
VITE_BASE_URL=
VITE_BASE_URL_PROD=
```

## 📦 Deployment on Hostinger (via Git)
1. Go to Hostinger > Git  
2. Add your GitHub repo and select the branch  
3. Choose a directory like `/public_html` or `/public_html/site`  
4. Enable auto-deploy  
5. Add build script:
   ```
   npm install
   npm run build
   ```

## 🔄 Updating Production
Push to the main branch:
```bash
git push origin main
```

## 📜 Changelog
**v1.0.0 – August 2025**  
- Explore and view tools  
- Lazy loaded pages  
- Fully responsive layout  

## 🛠️ Maintenance Notes
- Keep track of external APIs  
- Update dependencies regularly  
- Confirm .env file is correct before building
