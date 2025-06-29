import { useState, useEffect } from 'react'
import './App.css'
import geminiService from './services/geminiService'

function App() {
  const [currentIdea, setCurrentIdea] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const [isApiConfigured, setIsApiConfigured] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    // Check if API is configured on component mount
    setIsApiConfigured(geminiService.isConfigured())
  }, [])

  const copyToClipboard = async () => {
    if (!currentIdea) return

    try {
      await navigator.clipboard.writeText(currentIdea)
      setIsCopied(true)
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea')
        textArea.value = currentIdea
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr)
      }
    }
  }

  const generateIdea = async () => {
    setIsGenerating(true)
    setError('')
    setIsCopied(false) // Reset copy state when generating new idea
    
    try {
      if (!isApiConfigured) {
        // Use fallback if API not configured
        console.log('📝 Using fallback idea (API not configured)')
        const idea = geminiService.getFallbackIdea()
        setCurrentIdea(idea)
        setError('Using demo mode. Configure Gemini API for AI-powered ideas!')
      } else {
        // Try to use AI
        console.log('🤖 Attempting AI generation...')
        const idea = await geminiService.generateTerribleStartupIdea()
        setCurrentIdea(idea)
      }
    } catch (err) {
      console.error('❌ Error generating idea:', err)
      console.log('📝 Falling back to demo idea')
      
      // Fallback to demo idea if AI fails
      const idea = geminiService.getFallbackIdea()
      setCurrentIdea(idea)
      setError(`AI generation failed: ${err.message}. Using demo mode.`)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="App">
      <header className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Terrible Startup Ideas
            <span className="subtitle">as a Service</span>
          </h1>
          <p className="hero-description">
            Disrupting the ideation space with cutting-edge synergy generation technology.
            Powered by Google's Gemini AI for maximum startup absurdity.
          </p>
          {!isApiConfigured && (
            <div className="api-warning">
              ⚠️ Gemini AI not configured. Add your API key to use AI-powered generation!
            </div>
          )}
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="generator-section">
            <div className="idea-display">
              {error ? (
                <div className="error-card">
                  <h2 className="error-text">🚨 {error}</h2>
                  {!isApiConfigured && (
                    <div className="setup-instructions">
                      <h3>Setup Instructions:</h3>
                      <ol>
                        <li>Get your Gemini API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a></li>
                        <li>Create a <code>.env</code> file in your project root</li>
                        <li>Add: <code>VITE_GEMINI_API_KEY=your_actual_api_key_here</code></li>
                        <li>Restart the development server</li>
                      </ol>
                    </div>
                  )}
                </div>
              ) : currentIdea ? (
                                  <div className="idea-card">
                    <h2 className="idea-text">{currentIdea}</h2>
                    <div className="idea-footer">
                      <div className="idea-footer-content">
                        <span className={`pitch-label ${isApiConfigured ? 'ai-mode' : 'demo-mode'}`}>
                          {isApiConfigured ? '🤖 AI-Generated Unicorn' : '📝 Demo Mode Unicorn'}
                        </span>
                        <button 
                          className={`copy-btn ${isCopied ? 'copied' : ''}`}
                          onClick={copyToClipboard}
                          title="Copy to clipboard"
                        >
                          {isCopied ? (
                            <>
                              <span className="copy-icon">✓</span>
                              Copied!
                            </>
                          ) : (
                            <>
                              <span className="copy-icon">📋</span>
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
              ) : (
                <div className="placeholder-card">
                  <h2 className="placeholder-text">
                    Ready to disrupt the market with AI-powered innovation?
                  </h2>
                  <p className="placeholder-subtext">
                    Click below to generate your AI-crafted terrible startup idea
                  </p>
                </div>
              )}
            </div>

            <button 
              className={`generate-btn ${isGenerating ? 'generating' : ''}`}
              onClick={generateIdea}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <span>
                  <span className="spinner"></span>
                  AI Thinking...
                </span>
              ) : (
                'Generate AI Synergy'
              )}
            </button>

            {currentIdea && (
              <button 
                className="secondary-btn"
                onClick={generateIdea}
                disabled={isGenerating}
              >
                Generate Another AI Disruption
              </button>
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2024 Terrible Ideas Inc. | Disrupting disruption since yesterday.</p>
          <p className="disclaimer">
            *Results not guaranteed. Side effects may include uncontrollable laughter, 
            existential dread about the tech industry, and sudden urges to pivot your career.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App 