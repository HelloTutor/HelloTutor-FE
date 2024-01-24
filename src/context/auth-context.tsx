"use client";
import { createContext, useContext, useState } from "react";

interface AuthContextTypes {
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
}
const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<number | null>(null);
  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
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
