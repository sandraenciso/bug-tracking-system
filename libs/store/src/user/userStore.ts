'use client';

import {create} from 'zustand';
import type { Store, User } from './userTypes';

export const useUserStore = create<Store>((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user: User) =>
        set({
            user,
            isAuthenticated: true
        }),
    clearUser: () =>
        set({
            user: null,
            isAuthenticated: false
        })
}))