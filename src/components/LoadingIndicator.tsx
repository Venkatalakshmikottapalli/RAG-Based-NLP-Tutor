import React from 'react';
import { Clock } from 'lucide-react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="bg-blue-50 rounded-lg rounded-tl-none px-4 py-3 max-w-[80%]">
        <div className="flex items-center space-x-2">
          <Clock size={16} className="text-blue-500 animate-pulse" />
          <span className="text-sm text-blue-700">Processing your request...</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        <p className="text-xs text-blue-600 mt-2">This may take a few minutes. Please wait...</p>
      </div>
    </div>
  );
};

export default LoadingIndicator;