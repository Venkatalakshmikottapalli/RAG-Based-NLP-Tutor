import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your question here..."
        disabled={isLoading}
        className="flex-grow bg-white border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <button
        type="submit"
        disabled={isLoading || !message.trim()}
        className={`bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2 transition-colors ${
          isLoading || !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default MessageInput;