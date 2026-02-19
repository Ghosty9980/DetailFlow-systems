---
description: How to host the website on Vercel
---

Hosting your Vite-based website on Vercel is straightforward and free.

### Method 1: GitHub (Recommended)
This is the best way to keep your site updated automatically every time you make a change.

1. **Push to GitHub**:
   - Create a repository on [GitHub](https://github.com/new).
   - Initialize git in your project folder:
     ```bash
     git init
     git add .
     git commit -m "initial commit"
     git branch -M main
     git remote add origin YOUR_GITHUB_REPO_URL
     git push -u origin main
     ```

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com/) and sign up/log in with GitHub.
   - Click **"Add New"** > **"Project"**.
   - Import your repository.
   - Vercel will automatically detect **Vite**.
   - Click **Deploy**.

3. **Enjoy your site**:
   - Vercel will give you a free `your-project-name.vercel.app` domain.

---

### Method 2: Vercel CLI (Quickest)
Use this if you don't want to use GitHub yet.

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   - Run the following command in your project directory:
     ```bash
     vercel
     ```
   - Follow the prompts (log in, link project).
   - Once linked, run `vercel --prod` for a live production link.

### Vercel Settings (If asked)
Vercel should auto-detect these, but just in case:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
