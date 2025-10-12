import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './ChatWindow';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-12 left-4 md:bottom-16 md:left-8 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground shadow-glow hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="پشتیبانی آنلاین"
      >
        {isOpen ? <X className="w-5 h-5 md:w-7 md:h-7" /> : <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />}
      </button>

      {/* Chat Window */}
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default FloatingChatButton;