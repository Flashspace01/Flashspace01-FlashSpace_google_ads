# 🎨 Frontend Deployment on Vercel

## Before Deployment:

**IMPORTANT**: Update backend URL in `assets/js/script.js`:

```javascript
const BACKEND_API = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000'
    : 'https://your-actual-backend-url.onrender.com';  // ⚠️ CHANGE THIS!
```

## Quick Deploy Steps:

### Option 1: Vercel CLI
```bash
npm install -g vercel
cd frontend
vercel --prod
```

### Option 2: Vercel Dashboard
1. **Go to**: https://vercel.com
2. **Sign Up/Login**
3. **Click**: "Add New" → "Project"
4. **Import**: Your GitHub repository
5. **Configure**:
   - Root Directory: `frontend`
   - Framework: Other
   - Build Command: (leave empty)
6. **Deploy**: Click "Deploy"

## Your Frontend URL:
`https://flashspace-landing.vercel.app`

## Test:
1. Open your Vercel URL
2. Fill the contact form
3. Submit
4. Check email at sales@flashspace.co

---

See full documentation: [DEPLOYMENT.md](../DEPLOYMENT.md)
