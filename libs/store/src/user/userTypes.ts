export type User = {
    id: string;
    email?: string;
    name?: string;
    role?: 'admin' | 'developer' | 'tester'
};

type UserState = {
    user: User | null;
    isAuthenticated: boolean
}

type UserActions = {
    setUser: (user: User) => void;
    clearUser: () => void;
}

export type Store = UserState & UserActions;