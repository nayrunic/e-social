import {create} from 'zustand';
import { type User } from '@/types/users';

export const useUserStore = create((set) =>({
    user: null,
}));