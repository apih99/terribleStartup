import { GoogleGenerativeAI } from '@google/generative-ai';

class GeminiService {
  constructor() {
    this.apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    this.genAI = null;
    this.model = null;
    
    if (this.isConfigured()) {
      try {
        this.genAI = new GoogleGenerativeAI(this.apiKey);
        this.model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite-preview-06-17" });
      } catch (error) {
        console.error('Error initializing Gemini AI:', error);
      }
    }
  }

  async generateTerribleStartupIdea() {
    // Check if API is configured
    if (!this.isConfigured()) {
      throw new Error('Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env file.');
    }

    // Check if model is initialized
    if (!this.model) {
      throw new Error('Gemini AI model failed to initialize. Please check your API key.');
    }

    try {
      console.log('🤖 Calling Gemini AI API...');
      
      const prompt = `Generate a short, punchy terrible tech startup name/title that satirizes modern tech culture. Keep it between 30-90 words maximum.

FORMAT: Create just the startup NAME/TITLE - no long descriptions or explanations.

VARIETY REQUIREMENTS:
- Avoid overusing "AI", "blockchain", "cloud-native" 
- Create contradictory or impossible scenarios
- Combine unexpected elements for maximum absurdity
- Use different naming patterns each time

TECH BUZZWORDS (use sparingly, mix and match):
• Quantum, Neural, Digital Twin, Extended Reality, Synthetic Biology, MLOps
• Serverless, Microservices, GraphQL, JAMstack, Headless, Event-Driven
• Data Mesh, Edge Analytics, Federated Learning, Omnichannel, Hyperconnected
• Ultra-scalable, Enterprise-grade, Military-grade, Consumer-grade
• Prefixes: Hyper-, Ultra-, Neo-, Meta-, Crypto-, Nano-, Micro-, Cross-

ABSURD PRODUCTS/CONCEPTS:
• Lint rollers, ceiling fans, dust bunnies, coffee rings, shadow puppets
• Belly button lint, toenail clippings, sock drawer organization, pet rocks
• Invisible clothing, dream catchers, air guitars, fortune cookies
• Whiteboard erasers, paper clips, doorknobs, ice cube trays

CONTRADICTORY AUDIENCES:
• Unemployed CEOs, Tone-deaf Music Critics, Aquaphobic Lifeguards
• Sedentary Marathon Runners, Technophobic Programmers, Germaphobic Gardeners
• Professional Queue Standers, Umbrella Sommeliers, Lint Connoisseurs
• Stone-age Futurists, Introverted Sales Managers, Colorblind Artists

NAMING PATTERNS (vary these):
1. "[Tech]Sync" or "[Product]Flow" or "[Audience]Hub"
2. "[Product] + [Tech suffix]" (e.g., LintIQ, DustCorp, SockLabs)
3. "[Weird combo] + [Business suffix]" (QuantumLint, MetaDust, CryptoSocks)
4. "[Audience] + [Product] + [Tech]" combinations
5. Completely made-up portmanteau words

EXAMPLES (keep this style and length):
• "QuantumLint: Neural Dust Bunny Optimization for Unemployed CEOs"
• "SockSync: Military-Grade Drawer Analytics for Tone-Deaf Musicians" 
• "MetaPet: Blockchain Pet Rock Intelligence for Aquaphobic Lifeguards"
• "HyperDream: Enterprise Catcher Management for Sedentary Runners"

Generate ONE short, memorable, absurd startup name now (30-90 words max):`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text().trim();
      
      console.log('✅ AI Response received:', text);
      
      // Clean up the response (remove quotes, extra punctuation, etc.)
      const cleanedText = text.replace(/^["']|["']$/g, '').replace(/\.$/, '');
      
      return cleanedText;
    } catch (error) {
      console.error('❌ Error generating startup idea:', error);
      
      // Re-throw the error so the UI can handle it properly
      throw new Error(`Failed to generate AI idea: ${error.message}`);
    }
  }

  // Method to check if API key is configured
  isConfigured() {
    return this.apiKey && 
           this.apiKey.trim() !== '' && 
           this.apiKey !== 'your_gemini_api_key_here' &&
           this.apiKey !== 'your_actual_api_key_here';
  }

  // Get fallback ideas if needed
  getFallbackIdea() {
    const fallbackIdeas = [
      "LintSync: Neural Belly Button Analytics for Unemployed CEOs",
      "ShadowFlow: Quantum Puppet Orchestration for Tone-deaf Critics",
      "DustLabs: Enterprise Bunny Management for Sedentary Runners",
      "InvisibleIQ: Event-Driven Clothing Syndication for Aquaphobic Lifeguards",
      "DreamSync: MLOps Sock Puppet Optimization for Stone-age Futurists",
      "QueueCorp: Synthetic Biology for Professional Line Standers",
      "EarwaxFlow: Federated Learning Insights for Claustrophobic Explorers",
      "IceCubeLabs: Digital Twin Tray Orchestration for Germaphobic Gardeners",
      "CoffeeRingIQ: Extended Reality Syndication for Scissor Testers",
      "RockSync: Omnichannel Pet Intelligence for Introverted Managers",
      "CeilingFanFlow: Hyperconnected Analytics for Umbrella Sommeliers",
      "SockDrawerSync: Military-Grade Organization for Colorblind Artists",
      "DoorknobLabs: Cross-Platform Intelligence for Professional Waiters",
      "WhiteboardIQ: Enterprise Eraser Management for Technophobic Coders",
      "FortuneCookieFlow: Data Mesh Insights for Aquaphobic Swimmers"
    ];
    return fallbackIdeas[Math.floor(Math.random() * fallbackIdeas.length)];
  }
}

export default new GeminiService(); 