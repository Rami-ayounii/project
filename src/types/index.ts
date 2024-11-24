export type UserRole = 'advisor' | 'mentee';

export type Topic = 'social' | 'emotional' | 'academic' | 'lifestyle' | 'biological';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  topics?: Topic[];
  rating?: number;
  language: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  setLanguage: (lang: string) => void;
}