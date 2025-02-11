import { create, StateCreator } from 'zustand';

export const createZStore = <T extends Record<string, any>>(
  stateCreator: StateCreator<T>
) => {
  return create(stateCreator);
};
