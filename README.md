## 🛠 Tech Stack

| Tool         | Purpose                            

| *HTML/CSS* | Static frontend website             
| *GitHub*   | Version control & Actions workflow  
| *Docker*   | Containerization (for assignment)   
| *AWS S3*   | Static site hosting                 
| *GitHub Actions* | CI/CD automation             

---

## 📦 Features

- CI/CD pipeline with GitHub Actions
- Dockerized frontend setup
- Push-to-deploy mechanism to AWS S3
- Manual + automated S3 deployment support
- Clean project structure with .github/workflows
- Optional backend (for DevOps simulation only)

---

## 🔄 CI/CD Workflow (GitHub Actions)

The workflow triggers:
- *on every push to main branch*
- Builds the static frontend
- Syncs files to your S3 bucket automatically

```yaml
name: Deploy Static Website to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1

      - name: Deploy to S3
        run: aws s3 sync ./frontend s3://your-bucket-name --exclude ".git/" --exclude ".github/" --delete