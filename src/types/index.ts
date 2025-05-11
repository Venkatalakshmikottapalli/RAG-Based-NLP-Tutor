export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  sources?: Source[];
  timestamp: Date;
}

export interface Source {
  chapter?: string;
  page?: string;
}

export interface ApiResponse {
  answer: string;
  sources: Source[];
}