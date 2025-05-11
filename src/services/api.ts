import { ApiResponse } from '../types';

const API_URL = 'http://127.0.0.1:5000/ask';

export const askQuestion = async (question: string): Promise<ApiResponse> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 300000); // 5 minute timeout

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ question }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorMessage = `Server error: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Unable to connect to the API server. Please ensure the server is running at http://127.0.0.1:5000');
    }
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Request timed out after 5 minutes. The server is taking too long to respond.');
    }
    throw error;
  }
};