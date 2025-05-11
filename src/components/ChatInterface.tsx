import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Message, ApiResponse } from '../types';
import { askQuestion } from '../services/api';
import { v4 as uuidv4 } from 'uuid';
import { AlertCircle } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Call API
      const response: ApiResponse = await askQuestion(content);

      // Add bot message with response
      const botMessage: Message = {
        id: uuidv4(),
        content: response.answer,
        isUser: false,
        sources: response.sources,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      console.error('Error getting response:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-gray-200 py-3 px-4 bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">AskJurafsky</h1>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mx-4 mt-4 rounded-md">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <MessageList messages={messages} isLoading={isLoading} />
        <div className="p-4 border-t border-gray-200">
          <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;