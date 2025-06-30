# 🤖 AI-Powered Terrible Startup Ideas as a Service

[![Deploy to GitHub Pages](https://github.com/apih99/terribleStartup/actions/workflows/deploy.yml/badge.svg)](https://github.com/apih99/terribleStartup/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://apih99.github.io/terribleStartup/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/apih99/terribleStartup?style=social)](https://github.com/apih99/terribleStartup/stargazers)

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF.svg)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-Powered-orange.svg)](https://ai.google.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A satirical web application that uses Google's Gemini AI to generate hilariously bad tech startup ideas that satirize modern tech culture.

> **Badge Status**: ![Build](https://img.shields.io/badge/Build-Passing-brightgreen) ![Deployment](https://img.shields.io/badge/Deployment-Live-brightgreen) ![Demo](https://img.shields.io/badge/Demo-Available-blue)

## 🚀 Features

- **AI-Powered Generation**: Uses Google's Gemini AI for creative, contextually hilarious startup ideas
- **Short & Punchy Format**: Generates concise startup names (30-90 words) perfect for social sharing
- **Advanced Variety System**: Sophisticated prompting prevents repetition with 50+ buzzwords, formats, and audience types
- **Clean Corporate Design**: Professional-looking landing page that parodies tech startup aesthetics
- **One-Click Generation**: Single "Generate AI Synergy" button for instant terrible ideas
- **Smart Prompting**: AI trained to combine diverse tech buzzwords with absurd products and contradictory audiences
- **Fallback System**: Graceful degradation with pre-made terrible ideas if API fails
- **Error Handling**: Clear setup instructions when API key is not configured
- **Smooth Animations**: Loading states and hover effects
- **Fully Responsive**: Works on all device sizes
- **TikTok-Ready**: Perfect for rapid-fire AI-generated content

## 🎯 Example AI-Generated Ideas

The AI creates short, punchy startup names (30-90 words) that are perfect for sharing:
- "LintSync: Neural Belly Button Analytics for Unemployed CEOs"
- "ShadowFlow: Quantum Puppet Orchestration for Tone-deaf Critics"
- "QueueCorp: Synthetic Biology for Professional Line Standers"
- "CeilingFanFlow: Hyperconnected Analytics for Umbrella Sommeliers"
- "WhiteboardIQ: Enterprise Eraser Management for Technophobic Coders"

## 🛠 Tech Stack

- **React** - Modern JavaScript framework
- **Vite** - Fast build tool and dev server
- **Google Gemini AI** - AI-powered idea generation
- **CSS3** - Modern styling with gradients and animations
- **JavaScript** - Async API handling and error management

## 🏃‍♂️  Getting Started

### Prerequisites
- Node.js (16+ recommended)
- A Google Gemini API key

### Setup Instructions

1. **Get Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create or sign in to your Google account
   - Generate a new API key

2. **Configure Environment**
   ```bash
   # Create .env file in project root
   echo "VITE_GEMINI_API_KEY=your_actual_api_key_here" > .env
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

6. **Preview Production Build Locally**
   ```bash
   npm run preview
   ```

### Important Notes
- The app will show setup instructions if the API key is not configured
- There's a fallback system with pre-made terrible ideas if the API fails
- API calls are rate-limited by Google - be mindful of usage

## 🚀 Deployment

### GitHub Pages (Automatic)
This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**🌐 Live Demo**: [https://apih99.github.io/terribleStartup/](https://apih99.github.io/terribleStartup/)

[![Deployment Status](https://img.shields.io/github/deployments/apih99/terribleStartup/github-pages?label=Deployment&logo=github)](https://github.com/apih99/terribleStartup/deployments)
[![Last Commit](https://img.shields.io/github/last-commit/apih99/terribleStartup)](https://github.com/apih99/terribleStartup/commits/main)

### Setup GitHub Pages Deployment:

1. **Push to GitHub** (if you haven't already):
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository: `https://github.com/apih99/terribleStartup`
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Automatic Deployment**:
   - Every push to the `main` branch will automatically trigger deployment
   - The GitHub Action will build and deploy your app
   - Check the **Actions** tab to monitor deployment progress

4. **Access Your Live App**:
   - Once deployed, your app will be available at:
   - `https://apih99.github.io/terribleStartup/`

### 🔐 Adding Your AI Key Securely

To enable AI-powered generation in production, you need to add your Gemini API key using **GitHub Secrets** (the secure way):

#### **Step 1: Get Your Gemini API Key**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated key

#### **Step 2: Add API Key to GitHub Secrets**
1. Go to your repository: `https://github.com/apih99/terribleStartup`
2. Click **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **"New repository secret"**
5. Set **Name**: `VITE_GEMINI_API_KEY`
6. Set **Value**: `your_actual_api_key_here`
7. Click **"Add secret"**

#### **Step 3: Redeploy**
1. Make any small change to trigger a new deployment, or
2. Go to **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

#### **🔒 Security Benefits:**
- ✅ **Encrypted Storage**: API key is encrypted and never visible in your code
- ✅ **Build-Time Only**: Only GitHub Actions can access the secret during builds
- ✅ **Public Repository Safe**: Secure to use in public repositories
- ✅ **No Client Exposure**: API key is compiled into the build, not exposed to browsers
- ✅ **No Network Leaks**: API calls happen from user's browser to Google directly

#### **⚠️ Important Security Note:**
Once deployed with an API key, the Vite build process includes the key in the compiled JavaScript bundle. This means:
- The key becomes part of the static files served to users
- Advanced users could potentially extract it from browser dev tools
- **Recommendation**: Use API key restrictions in Google Cloud Console to limit usage to your domain

#### **Alternative Options:**

**Option A: Public Demo (Current)**
- Repository works without API key
- Uses clever fallback ideas (still hilarious!)
- Perfect for showcasing your project

**Option B: Private Fork**
- Fork this repo privately
- Add API key to your private `.env` file  
- Deploy privately with full AI features

## 🎭 Why This Exists

This is a sharp satire of tech culture and the startup ecosystem. The short, memorable format makes ideas instantly shareable and perfect for:
- **Viral Social Media Content**: TikTok, Twitter, Instagram - all platforms love short, punchy content
- **Satirical Commentary**: Quick, digestible takes on tech industry absurdity
- **Ice Breakers**: Memorable names that spark conversations
- **Content Creation**: Build entire videos around multiple quick-fire terrible ideas

## 📱 Social Media Ready

The short, punchy format (30-90 words) is PERFECT for:
- **TikTok Videos**: Rapid-fire generate multiple startup names in seconds
- **Twitter/X Posts**: Ideas fit perfectly in tweets with room for commentary
- **Instagram Stories**: Short enough to display clearly on mobile
- **Slack/Discord**: Quick share without overwhelming chat channels

## 🎨 Design Philosophy

The clean, corporate aesthetic intentionally mirrors legitimate tech company landing pages, making the satirical contrast even more effective. The professional appearance combined with absurd content creates the perfect comedic tension.

---

*© 2024 Terrible Ideas Inc. | Disrupting disruption since yesterday.*

*Side effects may include uncontrollable laughter, existential dread about the tech industry, and sudden urges to pivot your career.* 