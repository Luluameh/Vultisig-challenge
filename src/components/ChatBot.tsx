import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot,  X } from "lucide-react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm Vulti, your AI assistant. How can I help you with Vultisig today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchGptResponse = async (userMessage: string): Promise<string> => {
    setIsTyping(true);
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are Vulti, an assistant for Vultisig, a digital signature platform. Keep responses brief and helpful.",
              },
              ...messages.map((msg) => ({
                role: msg.sender === "user" ? "user" : "assistant",
                content: msg.text,
              })),
              { role: "user", content: userMessage },
            ],
            max_tokens: 150,
          }),
        }
      );

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching from GPT:", error);
      return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages([...messages, { text: inputValue, sender: "user" }]);
    const userMessage = inputValue;
    setInputValue("");

    // Show typing indicator
    setIsTyping(true);

    // Get GPT response
    const gptResponse = await fetchGptResponse(userMessage);

    // Add bot response
    setMessages((prev) => [...prev, { text: gptResponse, sender: "bot" }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Chat Trigger Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#33E6BF] to-[#0439C7] rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
            <Bot className="text-white" size={24} />
        )}
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-8 w-80 md:w-96 bg-[#11284A] rounded-xl shadow-2xl border border-[#33E6BF]/30 overflow-hidden z-50"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#33E6BF] to-[#0439C7] p-4 text-white flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="text-[#0439C7] font-bold text-sm">V</div>
              </div>
              <div>
                <h3 className="font-bold">Vulti Assistant</h3>
                <p className="text-xs opacity-80">AI-powered support</p>
              </div>
            </div>

            {/* Messages Container */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-[#33E6BF] text-white"
                        : "bg-[#061B3A] text-gray-300"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#061B3A] text-gray-300 rounded-lg p-3 flex items-center space-x-1">
                    <div
                      className="w-2 h-2 bg-[#33E6BF] rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-[#33E6BF] rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-[#33E6BF] rounded-full animate-bounce"
                      style={{ animationDelay: "600ms" }}
                    ></div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-[#11284A]"
            >
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about Vultisig..."
                  className="flex-1 bg-[#061B3A] text-white border border-[#11284A] rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#33E6BF]"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  className={`bg-[#33E6BF] text-[#02122B] px-4 py-2 rounded-r-lg font-medium transition ${
                    isTyping
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#33E6BF]/90"
                  }`}
                  disabled={isTyping}
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
