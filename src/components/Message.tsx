import React from 'react';
import { Message as MessageType } from '../types';
import SourceReferences from './SourceReferences';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { content, isUser, sources } = message;

  return (
    <div
      className={`flex ${
        isUser ? 'justify-end' : 'justify-start'
      } mb-4 animate-fade-in`}
    >
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser
            ? 'bg-blue-600 text-white rounded-tr-none'
            : 'bg-gray-100 text-gray-800 rounded-tl-none'
        }`}
      >
        <p className="text-sm md:text-base">{content}</p>
        {!isUser && sources && sources.length > 0 && (
          <SourceReferences sources={sources} />
        )}
      </div>
    </div>
  );
};

export default Message;