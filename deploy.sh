#!/bin/bash

# Firebase Deployment Script
# This script automates the build and deployment process

set -e

echo "🚀 Starting Firebase deployment process..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null
then
    echo -e "${RED}✗ Firebase CLI is not installed${NC}"
    echo "Install it with: npm install -g firebase-tools"
    exit 1
fi

echo -e "${GREEN}✓ Firebase CLI found${NC}"

# Check if .firebaserc exists
if [ ! -f .firebaserc ]
then
    echo -e "${RED}✗ .firebaserc file not found${NC}"
    echo "Run 'firebase init' first"
    exit 1
fi

echo -e "${GREEN}✓ Firebase config found${NC}"

# Install dependencies
echo ""
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"

# Run linter
echo ""
echo -e "${YELLOW}🔍 Linting code...${NC}"
npm run lint
echo -e "${GREEN}✓ Linting passed${NC}"

# Type checking
echo ""
echo -e "${YELLOW}📝 Type checking...${NC}"
npm run type-check
echo -e "${GREEN}✓ Type check passed${NC}"

# Run tests
echo ""
echo -e "${YELLOW}🧪 Running tests...${NC}"
npm run test
echo -e "${GREEN}✓ Tests passed${NC}"

# Build
echo ""
echo -e "${YELLOW}🏗️  Building for production...${NC}"
npm run build
echo -e "${GREEN}✓ Build complete${NC}"

# Deploy
echo ""
echo -e "${YELLOW}🌐 Deploying to Firebase Hosting...${NC}"
if [ -z "$1" ]
then
    firebase deploy --only hosting
else
    firebase deploy --only hosting --message "$1"
fi

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}Your app is live! 🎉${NC}"
echo ""
echo "View your site:"
firebase hosting:sites
