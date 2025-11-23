import { create } from 'zustand';

type User = {
  username?: string;
  firstName?: string;
  lastName?: string;
};

type UserStore = {
  user: User;
  setUser: (data: Partial<User>) => void;
};

export const useUserStore = create<UserStore>()(set => ({
  user: {},
  setUser: data => set(state => ({ user: { ...state.user, ...data } })),
}));
