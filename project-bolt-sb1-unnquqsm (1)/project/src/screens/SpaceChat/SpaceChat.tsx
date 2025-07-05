import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const SpaceChat = (): JSX.Element => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI space assistant. Ask me anything about space, astronomy, planets, stars, galaxies, or any cosmic phenomena you're curious about! 🚀✨",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const spaceResponses: { [key: string]: string[] } = {
    // Solar System
    'sun': [
      "The Sun is a G-type main-sequence star that contains 99.86% of the Solar System's mass! It's about 4.6 billion years old and will continue burning for another 5 billion years.",
      "Did you know the Sun's core temperature reaches 15 million degrees Celsius? It converts 600 million tons of hydrogen into helium every second through nuclear fusion!"
    ],
    'moon': [
      "The Moon is gradually moving away from Earth at about 3.8 cm per year! It was formed about 4.5 billion years ago, likely from debris after a Mars-sized object collided with Earth.",
      "The Moon's gravity is what causes our ocean tides. Without the Moon, Earth's days would only be about 6-8 hours long!"
    ],
    'mars': [
      "Mars has the largest volcano in the solar system - Olympus Mons, which is about 21 km high! That's nearly three times the height of Mount Everest.",
      "A day on Mars is very similar to Earth - about 24 hours and 37 minutes. However, a year on Mars is almost twice as long as Earth's!"
    ],
    'jupiter': [
      "Jupiter is so massive that it could fit all the other planets inside it! It acts like a cosmic vacuum cleaner, protecting inner planets from asteroids and comets.",
      "Jupiter has at least 95 known moons! The four largest - Io, Europa, Ganymede, and Callisto - were discovered by Galileo in 1610."
    ],
    'saturn': [
      "Saturn's rings are made mostly of ice particles and rocky debris. They're incredibly thin - only about 10 meters thick in some places!",
      "Saturn is less dense than water - it would actually float if you could find an ocean big enough!"
    ],
    
    // Deep Space
    'black hole': [
      "Black holes are regions where gravity is so strong that nothing, not even light, can escape! The event horizon is the point of no return.",
      "Supermassive black holes can contain millions or billions of times the mass of our Sun. Most galaxies, including the Milky Way, have one at their center."
    ],
    'galaxy': [
      "Our Milky Way galaxy contains over 100 billion stars! It's about 100,000 light-years across and we're located about 26,000 light-years from the center.",
      "The nearest major galaxy to us is Andromeda, about 2.5 million light-years away. It's actually approaching us and will collide with the Milky Way in about 4.5 billion years!"
    ],
    'star': [
      "Stars are born in nebulae - giant clouds of gas and dust. When enough material clumps together, nuclear fusion begins and a star is born!",
      "The most massive stars burn brightest but live shortest lives - sometimes only a few million years before exploding as supernovas."
    ],
    'nebula': [
      "Nebulae are stellar nurseries where new stars are born! The Eagle Nebula's 'Pillars of Creation' is one of the most famous star-forming regions.",
      "Some nebulae are the remains of dead stars - planetary nebulae form when dying stars shed their outer layers, creating beautiful cosmic clouds."
    ],
    
    // Space Exploration
    'astronaut': [
      "Astronauts experience about 16 sunrises and sunsets every day while orbiting Earth on the International Space Station!",
      "The longest single spaceflight was by Valeri Polyakov, who spent 437 days aboard the Mir space station. That's over 14 months in space!"
    ],
    'rocket': [
      "To escape Earth's gravity, rockets need to reach a speed of about 11.2 km/s (25,000 mph) - that's called escape velocity!",
      "The Saturn V rocket that took astronauts to the Moon was 111 meters tall and weighed 2.97 million kg when fully fueled!"
    ],
    'space station': [
      "The International Space Station orbits Earth at an altitude of about 408 km and travels at 27,600 km/h - that's fast enough to go around Earth in just 90 minutes!",
      "The ISS is the size of a football field and has been continuously occupied since November 2000. It's humanity's permanent foothold in space!"
    ],
    
    // Physics and Phenomena
    'light year': [
      "A light-year is the distance light travels in one year - about 9.46 trillion kilometers! It's a unit of distance, not time.",
      "The nearest star to our Sun, Proxima Centauri, is about 4.24 light-years away. That means the light we see from it left the star over 4 years ago!"
    ],
    'gravity': [
      "Gravity isn't actually a force - according to Einstein's theory of relativity, it's the curvature of spacetime caused by mass and energy!",
      "In space, astronauts aren't weightless because there's no gravity - they're in constant free fall around Earth, which creates the sensation of weightlessness."
    ],
    'universe': [
      "The observable universe is about 93 billion light-years in diameter, but the entire universe might be infinite!",
      "The universe is about 13.8 billion years old and is still expanding. In fact, the expansion is accelerating due to mysterious dark energy!"
    ],
    
    // Fun Facts
    'alien': [
      "While we haven't found definitive proof of alien life yet, scientists estimate there could be billions of potentially habitable planets in our galaxy alone!",
      "The search for extraterrestrial intelligence (SETI) uses radio telescopes to listen for signals from other civilizations. We're also looking for biosignatures in exoplanet atmospheres."
    ],
    'meteor': [
      "Most meteors are tiny - about the size of a grain of sand! They create those beautiful 'shooting stars' when they burn up in our atmosphere.",
      "The best meteor showers happen when Earth passes through the debris trail of a comet. The Perseids in August can produce up to 60 meteors per hour!"
    ]
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for keywords in the message
    for (const [keyword, responses] of Object.entries(spaceResponses)) {
      if (lowerMessage.includes(keyword)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    // General space-related responses
    const generalResponses = [
      "That's a fascinating question about space! While I don't have specific information about that topic, I'd recommend checking NASA's website or recent astronomical research for the most up-to-date information.",
      "Space is full of incredible mysteries! Your question touches on an area that scientists are actively researching. What specific aspect interests you most?",
      "The cosmos is vast and full of wonders! Could you tell me more about what you'd like to know? I'm here to help with any space-related questions.",
      "That's an intriguing space topic! While I might not have all the details, I can share that space exploration and astronomy are constantly revealing new discoveries.",
      "Great question! Space science is always evolving. Is there a particular aspect of astronomy or space exploration you'd like to explore further?"
    ];
    
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const quickQuestions = [
    "How big is the universe?",
    "What are black holes?",
    "How do stars form?",
    "Is there life on Mars?",
    "What causes meteor showers?",
    "How fast does light travel?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-30"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Space AI Assistant</h1>
          <p className="text-white/70 text-lg">Ask me anything about the cosmos! 🚀</p>
        </div>
        <Button
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
        >
          Home
        </Button>
      </div>

      {/* Chat Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 pb-8">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Messages Area */}
          <div className="h-[600px] overflow-y-auto p-8 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-6 ${
                    message.isUser
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                      : 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
                  }`}
                >
                  <p className="text-lg leading-relaxed">{message.text}</p>
                  <p className={`text-sm mt-3 ${message.isUser ? 'text-white/80' : 'text-white/60'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/20 text-white backdrop-blur-sm border border-white/30 rounded-2xl p-6">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-8 pb-4">
              <p className="text-white/80 text-sm mb-4">Quick questions to get started:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(question)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/90 text-sm rounded-full border border-white/30 hover:border-white/50 transition-all duration-300"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-8 border-t border-white/20">
            <div className="flex space-x-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about space, planets, stars, galaxies, or anything cosmic..."
                className="flex-1 p-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                rows={3}
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed self-end"
              >
                Send 🚀
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};