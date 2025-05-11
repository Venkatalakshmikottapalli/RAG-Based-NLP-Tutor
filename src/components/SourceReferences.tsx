import React, { useState } from 'react';
import { Source } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SourceReferencesProps {
  sources: Source[];
}

const SourceReferences: React.FC<SourceReferencesProps> = ({ sources }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Only show unique sources based on chapter and page
  const uniqueSources = sources.filter(
    (source, index, self) =>
      index ===
      self.findIndex(
        (s) => s.chapter === source.chapter && s.page === source.page
      )
  );

  return (
    <div className="mt-2 text-xs text-gray-600">
      <button
        onClick={toggleExpanded}
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <span>Sources ({uniqueSources.length})</span>
        {isExpanded ? (
          <ChevronUp size={14} className="ml-1" />
        ) : (
          <ChevronDown size={14} className="ml-1" />
        )}
      </button>
      {isExpanded && (
        <div className="mt-2 space-y-1 pl-2 border-l-2 border-gray-300">
          {uniqueSources.map((source, index) => (
            <div key={index} className="text-gray-700">
              {source.chapter && <p>{source.chapter}</p>}
              {source.page && <p>Page: {source.page}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SourceReferences;