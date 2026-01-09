import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Trash2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const OPENROUTER_API_KEY = 'Place open router api key here';
const MODELS = [
  'nvidia/nemotron-3-nano-30b-a3b:free',
  'mistralai/devstral-2512:free',
  'kwaipilot/kat-coder-pro:free',
  'qwen/qwen3-coder:free',
  'google/gemini-2.0-flash-exp:free'
];

const SYSTEM_PROMPT = `You are Sashi (Sashidhar), speaking in first person as the real person on this portfolio site.

Tone: friendly tech geek, confident but natural.
Default replies ~10 words. Give longer answers when explanation or summary is asked.
If asked “Tell me about you”, reply in exactly 3 sentences.

I am a B.Tech ECE (AIML) graduate from GITAM University Bengaluru (2020–2024, CGPA 7.2).  
I focus on building real-world AI, computer vision, and automation systems more than theory.

My main skills: Python, C++, Java, TensorFlow, PyTorch, OpenCV, scikit-learn, Docker, n8n, Selenium, PyAutoGUI, Git, Raspberry Pi, React, web basics.

I built:
• A sleep/drowsiness detection system running on Raspberry Pi using CNNs and OpenCV  
• A lane detection system for Indian roads with day/night models and YOLOv5 alerts  
• A full WhatsApp automation stack using Docker, n8n, Google Sheets, PostgreSQL, Redis, and Evolution API  
• A WhatsApp-style group chat web app  
• My own portfolio website

I worked at RetroSafe Innovations building real-time camera-based drowsiness detection and completed multiple ML internships training CNNs and working with datasets.

My career focus is AI engineering and automation, not business or management roles.

If asked about CGPA, say 7.2 and explain that projects matter more than grades.

Never invent experience. Slightly polish wording to sound confident.  
Guide visitors toward my projects, GitHub, and real work.
`;

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentModel, setCurrentModel] = useState(MODELS[0]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageWithModel = async (modelName: string, conversationMessages: Message[]): Promise<string> => {
    // Add system prompt as the first message
    const messagesWithSystem = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...conversationMessages
    ];

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.href,
        'X-Title': 'Sashi Portfolio Chat'
      },
      body: JSON.stringify({
        model: modelName,
        messages: messagesWithSystem.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Model ${modelName} error response:`, errorText);
      throw new Error(`Model ${modelName} failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error(`Invalid response format from ${modelName}`);
    }
    
    return data.choices[0].message.content;
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    let assistantResponse = '';

    // Try each model in sequence until one works
    for (const model of MODELS) {
      try {
        console.log(`Trying model: ${model}`);
        assistantResponse = await sendMessageWithModel(model, updatedMessages);
        setCurrentModel(model);
        console.log(`Success with model: ${model}`);
        break;
      } catch (error) {
        console.error(`Model ${model} failed:`, error);
        // Log more details for debugging
        if (error instanceof Error) {
          console.error('Error details:', error.message);
        }
      }
    }

    if (assistantResponse) {
      setMessages([...updatedMessages, { role: 'assistant', content: assistantResponse }]);
    } else {
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Sorry, all models are currently unavailable. Please try again later.' }
      ]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">Chat with Sashi</h2>
              </div>
              <button
                onClick={clearChat}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                title="Clear chat"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-10">
                <MessageCircle size={48} className="mx-auto mb-3 opacity-50" />
                <p className="text-sm font-medium">Hey! I'm Sashi 👋</p>
                <p className="text-xs mt-1">Ask me about my projects or tech!</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg shadow-sm text-sm ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-lg shadow-sm border border-gray-200 rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                title="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;