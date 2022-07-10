import create from 'zustand';

type State = {
  emulators: string[];
  setEmulators: (emulators: string[]) => void;
};

export const useEmulators = create<State>(set => ({
  emulators: [],
  setEmulators: emulators => set({emulators}),
}));
