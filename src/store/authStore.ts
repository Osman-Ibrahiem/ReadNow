import { create } from 'zustand';

export interface AuthUser {
    id: string;
    email: string;
    name?: string;
}

interface AuthState {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (user: AuthUser) => void;
    logout: () => void;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    login: (user) => {
        console.log('login called with:', user);
        set({ user, isAuthenticated: true });
    },
    logout: () => set({ user: null, isAuthenticated: false }),
    setLoading: (isLoading) => set({ isLoading }),
}));