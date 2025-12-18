# � FlashSpace Virtual Office Landing Page

Welcome to the FlashSpace Virtual Office project! This repository contains the landing page for FlashSpace's virtual office services.

---

## 📖 Table of Contents

- [What is a Virtual Office?](#what-is-a-virtual-office)
- [About This Project](#about-this-project)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contact](#contact)

---

## 🏢 What is a Virtual Office?

A **Virtual Office** provides businesses with a professional business address and mail handling services without the need for physical office space. It's perfect for:

- 🚀 **Startups** looking to save on rent costs
- 🌍 **Remote Companies** needing a professional business address
- 📄 **Business Registration** (GST/MCA compliance)
- 📬 **Mail Handling** without a physical office

**FlashSpace** offers virtual office solutions starting at just ₹699/month across 20+ Indian states with full GST/MCA documentation support.

---

## 📋 About This Project

This is the landing page for FlashSpace's virtual office service. The page includes:

- **Hero Section**: Main value proposition and CTA
- **Problem Statement**: Why businesses need virtual offices
- **Solution**: How FlashSpace solves the problem
- **Features**: Key benefits of FlashSpace virtual offices
- **Testimonials**: Customer reviews and social proof
- **Lead Capture Form**: Collects visitor information and integrates with backend API

**Tech Stack:**
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Backend: Node.js + Express (separate server folder)
- Deployment: Vercel (Frontend), Render (Backend)
- Email Service: Resend API
- Data Storage: Google Sheets API

---

## 📁 Project Structure

```
flashspace-landing/
├── client/                  # Frontend (this folder)
│   ├── index.html          # Main landing page
│   ├── thankyou.html       # Thank you page after form submission
│   ├── vercel.json         # Vercel deployment config
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css   # All styles
│   │   ├── js/
│   │   │   └── script.js   # Form handling & API calls
│   │   └── images/         # Image assets
│   └── README.md           # This file
│
└── server/                  # Backend API
    ├── server.js           # Express server
    ├── package.json        # Backend dependencies
    └── .env                # Environment variables (DO NOT COMMIT)
```

---

## 🚀 Getting Started

### Prerequisites

Before you start, make sure you have:

- **Git** installed ([Download here](https://git-scm.com/downloads))
- **Node.js v18+** installed ([Download here](https://nodejs.org/))
- **VS Code** or any code editor
- Basic knowledge of HTML, CSS, JavaScript

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/flashspace-landing.git
   cd flashspace-landing
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the `server` folder
   - Ask your team lead for the environment variables
   - **NEVER commit the `.env` file to GitHub**

4. **Start the Backend Server**
   ```bash
   npm start
   # Server runs on http://localhost:5000
   ```

5. **Open Frontend**
   - Open `client/index.html` in your browser
   - Or use Live Server extension in VS Code

---

## 🔄 Development Workflow

### ⚠️ IMPORTANT: Branch Management

**NEVER commit directly to `main` or `master` branch!**

Always follow this workflow:

### 1. Create a New Branch

Before starting any work, create a new branch:

```bash
# Make sure you're on main branch
git checkout main

# Pull latest changes
git pull origin main

# Create and switch to new branch
git checkout -b feature/your-feature-name
```

**Branch Naming Convention:**
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `update/what-you-update` - Updates to existing features
- `docs/documentation-update` - Documentation changes

**Examples:**
```bash
git checkout -b feature/add-pricing-section
git checkout -b fix/form-validation-error
git checkout -b update/hero-section-text
git checkout -b docs/update-readme
```

### 2. Make Your Changes

- Write clean, readable code
- Test your changes thoroughly
- Follow existing code style

### 3. Commit Your Changes

```bash
# Check what files you changed
git status

# Add files to staging
git add .

# Commit with a clear message
git commit -m "Add new pricing section"
```

**Good Commit Messages:**
- ✅ "Fix form validation on email field"
- ✅ "Add Google Sheets integration"
- ✅ "Update hero section CTA text"
- ❌ "changes"
- ❌ "update"

### 4. Push Your Branch

```bash
# Push your branch to GitHub
git push origin feature/your-feature-name
```

### 5. Create a Pull Request (PR)

1. Go to GitHub repository
2. Click "Compare & pull request"
3. Write a clear description of your changes
4. Request review from team lead
5. Wait for approval before merging

### 6. After PR is Merged

```bash
# Switch back to main
git checkout main

# Pull latest changes
git pull origin main

# Delete your local branch (optional)
git branch -d feature/your-feature-name
```

---

## 🔧 Environment Variables

The backend requires these environment variables in `server/.env`:

```env
GOOGLE_SERVICE_ACCOUNT_KEY_BASE64=<base64-encoded-credentials>
GOOGLE_SHEET_NAME=Sheet1!A:P
GOOGLE_SHEETS_ID=your-spreadsheet-id
NODE_ENV=development
PORT=5000
RESEND_API_KEY=your-resend-api-key
```

**Ask your team lead for these values.**

---

## 🌐 Deployment

### Frontend (Vercel)

**Live URL:** https://vo.flashspace.co

**Deploy via GitHub:**
1. Push your changes to `main` branch (after PR approval)
2. Vercel automatically deploys

**Manual Deploy:**
```bash
npm install -g vercel
cd client
vercel --prod
```

### Backend (Render)

**Live URL:** https://flashspace-landing-server.onrender.com

Backend deploys automatically when changes are pushed to `main` branch.

---

## 🐛 Troubleshooting

### Form Submission Not Working

- Check if backend server is running on port 5000
- Verify `BACKEND_API` URL in `assets/js/script.js`
- Check browser console for errors

### Backend Not Starting

```bash
# Check if port 5000 is in use
netstat -ano | findstr :5000

# Kill the process if needed
taskkill /PID <process-id> /F

# Restart server
npm start
```

### Git Issues

```bash
# Discard all local changes
git reset --hard

# Pull latest from main
git pull origin main

# Create fresh branch
git checkout -b feature/new-feature
```

---

## 📞 Contact

- **Project Lead:** [Your Team Lead Name]
- **Email:** sales@flashspace.co
- **Documentation:** Check the `server/README.md` for backend docs

---

## ✅ Quick Checklist for New Joiners

- [ ] Git installed and configured
- [ ] Node.js v18+ installed
- [ ] Repository cloned
- [ ] Backend dependencies installed (`npm install`)
- [ ] `.env` file created with correct values
- [ ] Backend server starts successfully
- [ ] Frontend opens in browser
- [ ] Created a test branch (not working on main)
- [ ] Submitted a test PR

**Welcome to the FlashSpace team! 🚀**
