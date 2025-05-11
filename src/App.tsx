//import React from 'react';
import ChatInterface from './components/ChatInterface';
import { Bot } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Bot size={24} className="mr-2" />
          <h1 className="text-xl font-bold">RAG-Based-NLP-Tutor</h1>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 h-[80vh] flex flex-col">
          <ChatInterface />
        </div>
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>RAG Chatbot Interface &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;