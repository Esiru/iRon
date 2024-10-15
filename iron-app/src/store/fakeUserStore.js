import { create } from "zustand"

 
export const useUserStore = create((set) => ({
    user: null,
    userLogin: () => set((state) => ({ user: { ...state.user, loggedIn: true } })),
    userLogout: () => set((state) => ({ user: { ...state.user, loggedIn: false } })),
})
    
)