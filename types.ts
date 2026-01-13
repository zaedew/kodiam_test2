
export interface BibleVerse {
  reference: string;
  text: string;
}

export interface ReadingGuide {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  content?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
