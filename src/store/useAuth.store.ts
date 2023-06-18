import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import confetti from "canvas-confetti";

import { UserStoreState } from "@/models";
import { verifyLogin } from "@/utils";

export const useAuthStore = create<UserStoreState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        username: "",
        login: (username, password) => {
          const isCorrect = verifyLogin(username, password);
          if (isCorrect) {
            confetti();
            set({ isLoggedIn: true });
            set({ username });
          }
        },
        logout: () => {
          set({ isLoggedIn: false });
          set({ username: "" });
        },
      }),
      {
        name: "users",
      }
    )
  )
);
