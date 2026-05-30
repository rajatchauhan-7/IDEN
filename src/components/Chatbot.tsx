import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm your IDEN assistant. How can I help you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), text, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response based on keywords or exact match
    setTimeout(() => {
      let botResponse = "Thanks for reaching out! One of our team members will get back to you shortly. Feel free to ask another question.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("free trial") || lowerText.includes("10 generations")) {
        botResponse = "Yes! You get 10 free generations when you sign up. No credit card is required to start testing the tool.";
      } else if (lowerText.includes("upgrade later") || lowerText.includes("upgrade")) {
        botResponse = "Yes, you can update it any time. You will be given 10 generations. After that, you can upgrade it to the professional version or to the agency version.";
      } else if (lowerText.includes("how long does it take") || lowerText.includes("learn my voice")) {
        botResponse = "It takes just a few minutes. You just have to input some posts and your headlines into IDEN, and then it will extract your voice and you are good to go.";
      } else if (lowerText.includes("team") || lowerText.includes("agency")) {
        botResponse = "Right now, we offer individual plans and agency plans. Team and Agency plans are similar only. The Team individual plan is for $49, and the Agency plan is for $149 each for lifetime.";
      } else if (lowerText.includes("cancel") || lowerText.includes("refund")) {
        botResponse = "You can't cancel your plan. You can ask for a refund if you don't like the output that you are getting. You can ask for a refund within seven days of buying.";
      } else if (lowerText.includes("different from") || lowerText.includes("standard ai")) {
        botResponse = "Other AI tools just provide you a basic AI output, since AI is trained for multiple persons, but IDEN is trained for a particular brand voice. It will write according to you, what you stand for, what kind of content you post across LinkedIn. It will understand you and it will write exactly like you. You don't have to juggle between multiple AI tools to find your voice. IDEN will provide you your voice, and then you can lock it to keep it forever.";
      } else if (lowerText.includes("what is iden") || lowerText.includes("how it works")) {
        botResponse = "IDEN extracts your exact writing voice by analyzing your top LinkedIn posts. It builds a brand strategy and generates authentic content that sounds just like you.";
      } else if (lowerText.includes("pricing") || lowerText.includes("cost")) {
        botResponse = "Our pricing starts at a base tier. We also have a Pro mode and an Agency mode for bulk creation. For specific pricing details, please check out the 'Pricing' section above!";
      }

      setMessages(prev => [
        ...prev,
        { 
          id: Date.now() + 1, 
          text: botResponse, 
          sender: "bot" 
        }
      ]);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(inputValue);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "32px",
          left: "32px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "var(--lime)",
          color: "var(--bg)",
          border: "none",
          boxShadow: "0 8px 24px rgba(200, 255, 0, 0.3)",
          display: isOpen ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
        aria-label="Open chat"
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <MessageSquare size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              bottom: "32px",
              left: "32px",
              width: "350px",
              height: "500px",
              maxHeight: "85vh",
              maxWidth: "calc(100vw - 32px)",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              boxShadow: "0 12px 48px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 10000,
            }}
          >
            {/* Header */}
            <div style={{
              padding: "16px 20px",
              background: "var(--card-bg)",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--lime)",
                  boxShadow: "0 0 8px var(--lime)"
                }} />
                <span style={{ fontWeight: 600, color: "var(--headline)" }}>IDEN Support</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--muted)",
                  cursor: "pointer",
                  display: "flex",
                  padding: "4px"
                }}
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              padding: "20px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: "flex",
                    justifyContent: msg.sender === "user" ? "flex-end" : "flex-start"
                  }}
                >
                  <div style={{
                    maxWidth: "80%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    background: msg.sender === "user" ? "var(--lime)" : "var(--card-bg)",
                    color: msg.sender === "user" ? "var(--bg)" : "var(--body)",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    borderBottomRightRadius: msg.sender === "user" ? "2px" : "12px",
                    borderBottomLeftRadius: msg.sender === "bot" ? "2px" : "12px",
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div style={{ padding: "0 20px 16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <button
                  type="button"
                  onClick={() => handleSend("Can I upgrade later if I start with a free trial?")}
                  style={{ background: "transparent", border: "1px solid var(--border)", borderRadius: "12px", padding: "6px 12px", fontSize: "12px", color: "var(--muted)", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--lime)"; e.currentTarget.style.color = "var(--body)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)" }}
                >
                  Can I upgrade later?
                </button>
                <button
                  type="button"
                  onClick={() => handleSend("How long does it take IDEN to learn my voice?")}
                  style={{ background: "transparent", border: "1px solid var(--border)", borderRadius: "12px", padding: "6px 12px", fontSize: "12px", color: "var(--muted)", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--lime)"; e.currentTarget.style.color = "var(--body)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)" }}
                >
                  Learning my voice
                </button>
                <button
                  type="button"
                  onClick={() => handleSend("Do you offer team/agency plans?")}
                  style={{ background: "transparent", border: "1px solid var(--border)", borderRadius: "12px", padding: "6px 12px", fontSize: "12px", color: "var(--muted)", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--lime)"; e.currentTarget.style.color = "var(--body)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)" }}
                >
                  Team/Agency plans
                </button>
                 <button
                  type="button"
                  onClick={() => handleSend("How do I cancel my plan?")}
                  style={{ background: "transparent", border: "1px solid var(--border)", borderRadius: "12px", padding: "6px 12px", fontSize: "12px", color: "var(--muted)", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--lime)"; e.currentTarget.style.color = "var(--body)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)" }}
                >
                  Cancel / Refund
                </button>
                <button
                  type="button"
                  onClick={() => handleSend("What makes IDEN different from standard AI writing tools?")}
                  style={{ background: "transparent", border: "1px solid var(--border)", borderRadius: "12px", padding: "6px 12px", fontSize: "12px", color: "var(--muted)", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--lime)"; e.currentTarget.style.color = "var(--body)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)" }}
                >
                  Why choose IDEN?
                </button>
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleFormSubmit} style={{
              padding: "16px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              gap: "8px",
              background: "var(--card-bg)"
            }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "10px 16px",
                  color: "var(--body)",
                  fontSize: "14px",
                  outline: "none"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--lime)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: inputValue.trim() ? "var(--lime)" : "var(--border)",
                  color: inputValue.trim() ? "var(--bg)" : "var(--muted)",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: inputValue.trim() ? "pointer" : "default",
                  transition: "background 0.2s"
                }}
              >
                <Send size={18} style={{ marginLeft: "2px" }} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
