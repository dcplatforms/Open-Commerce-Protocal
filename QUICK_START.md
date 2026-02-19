# Quick Start Guide

## Deploy to GitHub (Fastest Method)

```bash
cd ~/Desktop/open-wallet
./DEPLOY.sh
```

This script will:
1. Create the GitHub repository (if needed)
2. Configure git remote
3. Push all code to GitHub
4. Create v1.0.0 release tag
5. Generate GitHub release

## Manual Deployment

If you prefer manual control:

```bash
cd ~/Desktop/open-wallet

# 1. Create GitHub repository
gh repo create dcplatforms/Open-Commerce-Protocol --public \
  --description "The standard for Agentic Commerce. Powered by the Open Commerce Protocol (OCP) SDK."

# 2. Add remote
git remote add origin https://github.com/dcplatforms/Open-Commerce-Protocol.git

# 3. Push code
git push -u origin main

# 4. Create release
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0

# 5. Create GitHub release
gh release create v1.0.0 \
  --title "Open Commerce Initiative v1.0.0" \
  --notes "Initial release with complete Open Commerce Protocol (OCP) infrastructure"
```

## After Deployment

1. Visit: https://github.com/dcplatforms/Open-Commerce-Protocol
2. Add topics: wallet, payment, tokenization, apple-pay, google-pay, etc.
3. Enable Discussions (Settings > Features)
4. Configure branch protection (Settings > Branches)

## Documentation

- **README.md** - Main project documentation
- **DEPLOYMENT.md** - Complete deployment guide
- **ARCHITECTURE.md** - Technical architecture
- **CONTRIBUTING.md** - Contribution guidelines
- **GITHUB_DEPLOYMENT_INSTRUCTIONS.md** - Detailed GitHub setup

## Test Locally

```bash
cd ~/Desktop/open-wallet

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Start development server
npm run dev
```

## Need Help?

See PROJECT_COMPLETE.md for complete project overview.

---

Open Commerce Protocol (OCP) is the underlying SDK of Open Commerce Initiative (OCI). OCP is authored by [Tom Callahan](https://www.linkedin.com/in/tom-cndc/). Join the [OCI community here on Linkedin](https://www.linkedin.com/company/open-commerce-solutions)
