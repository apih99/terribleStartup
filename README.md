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

## 🏃‍♂️ Getting Started

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

### Environment Variables for Production
For the AI features to work in production, you'll need to set up environment variables:

**Option 1: Fork and Deploy Privately**
- Fork this repo to keep your API key private
- Add your `VITE_GEMINI_API_KEY` to your local `.env` file
- The public demo will run in fallback mode (which is still hilarious!)

**Option 2: Use GitHub Secrets (Advanced)**
- Go to **Settings** → **Secrets and variables** → **Actions**
- Add `VITE_GEMINI_API_KEY` as a repository secret
- Modify the workflow to use the secret during build

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