#!/bin/bash
# Quick deployment script for Open Commerce Initiative to GitHub

set -e

GITHUB_USER="dcplatforms"
REPO_NAME="Open-Commerce-Protocol"

echo "Deploying Open Commerce Initiative to GitHub..."
echo ""

# Check if gh CLI is available
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI not found. Please create repository manually at:"
    echo "   https://github.com/new"
    echo ""
    MANUAL=true
else
    echo "GitHub CLI detected"
    MANUAL=false
fi

# Create repository
if [ "$MANUAL" = false ]; then
    echo "Creating GitHub repository..."
    gh repo create $GITHUB_USER/$REPO_NAME --public \
        --description "The standard for Agentic Commerce. Powered by the Open Commerce Protocol (OCP) SDK." \
        || echo "Repository may already exist, continuing..."
fi

# Add remote
echo "Configuring remote..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

# Create release tag
echo "Creating release tag..."
git tag -a v1.0.0 -m "Initial release of Open Commerce Initiative v1.0.0" 2>/dev/null || echo "Tag already exists"
git push origin v1.0.0 2>/dev/null || echo "Tag already pushed"

# Create GitHub release
if [ "$MANUAL" = false ]; then
    echo "Creating GitHub release..."
    gh release create v1.0.0 \
        --title "Open Commerce Initiative v1.0.0" \
        --notes "Initial release with complete Open Commerce Protocol (OCP) infrastructure

Features:
- Core wallet management system powered by OCP
- Tokenized payment processing with Basis Theory
- Apple Pay and Google Pay integration
- MongoDB and PostgreSQL support
- Admin dashboard and refund management
- Comprehensive documentation
- MIT License

See README.md for complete documentation." \
        --latest 2>/dev/null || echo "Release may already exist"
fi

echo ""
echo "Deployment complete!"
echo ""
echo "Repository: https://github.com/$GITHUB_USER/$REPO_NAME"
echo "Documentation: https://github.com/$GITHUB_USER/$REPO_NAME#readme"
echo ""
echo "Next steps:"
echo "1. Visit your repository and verify everything looks good"
echo "2. Add repository topics: wallet, payment, tokenization, etc."
echo "3. Enable GitHub Discussions (optional)"
echo "4. Configure branch protection rules"
echo "5. Share your project!"
