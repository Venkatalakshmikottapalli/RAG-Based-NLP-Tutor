import React, { useRef, useEffect } from 'react';
import { Message as MessageType } from '../types';
import Message from './Message';
import LoadingIndicator from './LoadingIndicator';

interface MessageListProps {
  messages: MessageType[];
  isLoading: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-center">
            Hey there! I've read the Jurafsky NLP textbook so you don’t have to. Ask me anything about NLP!
          </p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          {isLoading && <LoadingIndicator />}
        </>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;