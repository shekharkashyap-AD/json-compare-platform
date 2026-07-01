# 🔥 Firebase Hosting Configuration

## Quick Setup (3 Steps)

### Step 1️⃣: Install Firebase CLI

```bash
npm install -g firebase-tools
firebase --version  # Verify installation
```

### Step 2️⃣: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a new project"**
3. Enter name: `json-compare-platform`
4. Accept terms → Create project
5. Copy your **Project ID**

### Step 3️⃣: Login & Initialize

```bash
# Login to Firebase
firebase login

# Initialize in your project folder
firebase init hosting

# Select your project
# Public dir: dist ✓ (already configured)
# SPA rewrite: Yes ✓
# Overwrite: No
```

---

## 🚀 Deploy Your App

```bash
# Step 1: Build
npm run build

# Step 2: Deploy
firebase deploy --only hosting

# Your app is now LIVE! 🎉
```

### Your Site URLs:
- **Main**: `https://your-project-id.web.app`
- **Backup**: `https://your-project-id.firebaseapp.com`

---

## 📝 Configure Project ID

Edit `.firebaserc` and replace `your-project-id` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "json-compare-platform-abc123"
  }
}
```

Or use CLI:

```bash
firebase use json-compare-platform-abc123
```

---

## 🔄 Auto-Deploy with GitHub Actions

### Step 1: Generate Firebase Token

```bash
firebase login:ci
```

**Copy the token** (keep it secret!)

### Step 2: Add to GitHub Secrets

1. Go to your GitHub repo
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. **Name**: `FIREBASE_TOKEN`
5. **Value**: Paste your token

### Step 3: GitHub Actions Ready

The workflow (`.github/workflows/firebase-deploy.yml`) will:
- ✅ Trigger on push to `main` or `develop`
- ✅ Run tests
- ✅ Build the app
- ✅ Deploy to Firebase
- ✅ All automatic! 🤖

---

## 📊 Useful Commands

```bash
# Deploy only hosting
firebase deploy --only hosting

# Deploy with custom message
firebase deploy --message "Release v1.0.0"

# View deployment history
firebase hosting:versions:list

# Rollback to previous version
firebase hosting:versions:promote VERSION_ID

# View live site
firebase hosting:sites

# Logout
firebase logout
```

---

## 🐛 Troubleshooting

### "Project ID not set"
```bash
firebase use YOUR-PROJECT-ID
```

### "dist folder not found"
```bash
npm run build
```

### "Permission denied"
```bash
firebase logout
firebase login
```

### "Changes not showing"
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Wait 30 seconds for CDN
- Check browser cache

---

## 🎯 Deployment Checklist

- ✅ Firebase CLI installed
- ✅ Firebase project created
- ✅ `.firebaserc` updated with Project ID
- ✅ `npm install` completed
- ✅ `npm run build` successful  
- ✅ `firebase deploy` executed
- ✅ Site is live! 🚀

---

## 📈 Monitor Your App

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Hosting**
4. View:
   - Real-time users
   - Bandwidth usage
   - Build history
   - Performance metrics
   - Error logs

---

## 💰 Cost

**Free Tier Includes:**
- 1 GB storage
- 10 GB/month transfer
- Custom domains
- Automatic SSL
- Global CDN

**Upgrade when needed** (Blaze Plan: Pay as you go)

---

## 🎬 Automated Deployment Script

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh

# Deploy with message
./deploy.sh "Release v1.0.0"
```

---

## ✨ Production Best Practices

1. **Cache Strategy** (already configured):
   - Static files: 1 year cache
   - HTML: No cache (always fresh)

2. **SPA Support** (already configured):
   - All routes redirect to `index.html`

3. **Security**:
   - HTTPS: Automatic ✓
   - SSL: Automatic ✓
   - DDoS protection: Automatic ✓

4. **Performance**:
   - Global CDN: Automatic ✓
   - Compression: Automatic ✓
   - Minification: Built into Vite ✓

---

**Your app is ready to host! Deploy now with one command! 🚀**
