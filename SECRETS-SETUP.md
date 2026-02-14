# GitHub Secrets Setup

## ⚠️ IMPORTANT: Add Secrets Before CI/CD Will Work

The GitHub Actions workflow needs these secrets to deploy to your EC2.

---

## Steps to Add Secrets

1. Go to: https://github.com/XxFall3NxX/mara-command-center/settings/secrets/actions

2. Click **"New repository secret"** for each:

### Required Secrets

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `EC2_HOST` | `54.236.121.63` | Your EC2 IP address |
| `EC2_USER` | `ubuntu` | SSH username |
| `EC2_SSH_KEY` | *(your private key)* | SSH private key for EC2 |
| `AWS_ACCESS_KEY_ID` | *(from TOOLS.md)* | AWS credentials |
| `AWS_SECRET_ACCESS_KEY` | *(from TOOLS.md)* | AWS secret |

---

## How to Get EC2 SSH Key

### If you have the `.pem` file:
```bash
cat ~/path/to/your-key.pem
```
Copy the entire output (including `-----BEGIN` and `-----END` lines)

### If you need to create a new key:
```bash
# On EC2
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_deploy
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/github_deploy  # Copy this to GitHub Secret
```

---

## After Adding Secrets

### Option 1: Trigger Manual Deploy
1. Go to: https://github.com/XxFall3NxX/mara-command-center/actions
2. Click "Deploy to EC2" workflow
3. Click "Run workflow" → "Run workflow"
4. Watch it deploy!

### Option 2: Push to Trigger Auto-Deploy
```bash
# Any push to main will auto-deploy
git commit --allow-empty -m "Trigger deployment"
git push
```

---

## What the Workflow Does

1. ✅ Checks out code from GitHub
2. 📦 Copies files to EC2 via SSH
3. 🐳 Builds Docker image on EC2
4. 🚀 Runs container on port 3001
5. ✅ Verifies deployment

**Result:** https://mara.trendlydigital.com works!

---

## Troubleshooting

### Workflow fails with "Permission denied"
- Check EC2_SSH_KEY is correct
- Verify key has proper line breaks (not all on one line)

### Workflow fails with "Connection refused"
- Check EC2_HOST is correct IP
- Verify security group allows SSH from GitHub Actions IPs

### Container fails to start
- SSH into EC2 and check: `docker logs mara-command`
- Verify AWS credentials in secrets

---

## Security Notes

✅ **Good:**
- Credentials stored as GitHub Secrets (encrypted)
- Not exposed in code
- Only accessible to workflows

❌ **Never:**
- Commit credentials to git
- Share secrets publicly
- Use personal credentials (use IAM roles in production)

---

## Next: Add the Secrets Now!

1. Open: https://github.com/XxFall3NxX/mara-command-center/settings/secrets/actions
2. Add all 5 secrets above
3. Go to Actions tab
4. Run the workflow
5. Watch https://mara.trendlydigital.com come alive! 🎉
