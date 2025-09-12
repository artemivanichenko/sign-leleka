// import { User } from "@/types/auth";
// import { create } from "zustand";

// interface AuthStore {
// 	user: null | User;
// 	isAuthenticated: boolean;
// 	setUser: (user: User) => void;
// 	clearisAuthenticated: () => void;
// }

// export const useAuthStore = create<AuthStore>()((set) => ({
// 	isAuthenticated: false,
// 	user: null,
// 	setUser: (user: User) =>
// 		set(() => ({
// 			user,
// 			isAuthenticated: true,
// 		})),
// 	clearisAuthenticated: () =>
// 		set(() => ({ user: null, isAuthenticated: false })),
// }));

import { User } from "@/types/auth";
import { create } from "zustand";

interface AuthStore {
	user: null | User;
	isAuthenticated: boolean;
	isAuthLoading: boolean;
	setUser: (user: User) => void;
	clearisAuthenticated: () => void;
	setAuthLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
	isAuthenticated: false,
	user: null,
	isAuthLoading: true,
	setUser: (user: User) =>
		set(() => ({
			user,
			isAuthenticated: true,
			isAuthLoading: false,
		})),
	clearisAuthenticated: () =>
		set(() => ({
			user: null,
			isAuthenticated: false,
			isAuthLoading: false,
		})),
	setAuthLoading: (loading: boolean) =>
		set(() => ({ isAuthLoading: loading })),
}));
