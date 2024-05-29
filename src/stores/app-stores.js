import { create } from 'zustand';

export const useAppStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({
    count: state.count + 1,
  })),
  decrement: () => set((state) => ({
    count: state.count - 1,
  })),
  username: 'zalfarmdhn',
  updateUsername: (username) => set({ username }),
  githubUser: {},
  getGithubUser: async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();

    set({ githubUser: user });
  },
  logoutUser: () => set({ githubUser: {} }),
}));