"use client";
import { createContext, useContext, useState } from "react";

interface AuthContextTypes {
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<number | null>(null);
  const isAccessToken = sessionStorage.getItem("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(isAccessToken ? true : false);

  return (
    <AuthContext.Provider
      value={{ userId, setUserId, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within AuthWrapper");

  return context;
}
