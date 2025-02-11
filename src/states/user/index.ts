import { IRFUser } from '@/types/user';
import { create } from 'zustand';

interface IUserZState {
  user: IRFUser | null;
  updateUser: (user: IRFUser) => void;
}

export const useUserZState = create<IUserZState>(() => {
  return {
    user: null,
    updateUser: (user: IRFUser) => {
      return { user };
    },
  };
});
