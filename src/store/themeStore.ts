import { create } from 'zustand';

interface themeStoreProps {
  theme: 'dark' | 'light';
  changeTheme: () => void;
}

export const useThemeStore = create<themeStoreProps>((set) => ({
  theme: 'light',
  changeTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      document.body.className = newTheme;
      return { theme: newTheme };
    }),
}));
