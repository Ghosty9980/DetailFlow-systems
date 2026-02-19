---
description: How to push your local code to GitHub
---

Follow these steps to upload your current website code to your newly created GitHub repository.

### Prerequisites
- You must have [Git installed](https://git-scm.com/downloads) on your computer.
- You should have an empty repository created on GitHub.

### Step-by-Step Instructions

1. **Open your terminal** in the project directory: `C:\Users\Baibhab\.gemini\antigravity\scratch\detailflow-systems`

2. **Initialize Git**:
   ```bash
   git init
   ```

3. **Stage your files**:
   This prepares all your project files (HTML, CSS, JS) for the first save.
   ```bash
   git add .
   ```

4. **Create your first commit**:
   This saves the current state of your code locally.
   ```bash
   git commit -m "Initial commit: DetailFlow Systems Website"
   ```

5. **Set the main branch**:
   ```bash
   git branch -M main
   ```

6. **Link your GitHub repository**:
   *Replace `YOUR_REPO_URL` with the URL of the repository you created (e.g., https://github.com/your-username/repo-name.git)*
   ```bash
   git remote add origin YOUR_REPO_URL
   ```

7. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

### Troubleshooting
- **Permission Denied**: Ensure you are logged into your GitHub account in your terminal (using `gh auth login` or a Personal Access Token).
- **Existing Files**: If you created the repo with a README or License, use `git pull origin main --rebase` before pushing.
