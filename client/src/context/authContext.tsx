import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface User {
  [key: string]: any;
}

interface AuthContextValue {
  currentUser: User | null;
  login: (inputs: { [key: string]: any }) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({
  currentUser: null,
  login: async () => {},
  logout: async () => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const login = async (inputs: { [key: string]: any }) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, { withCredentials: true })
        setCurrentUser(res.data)
        console.log(res)
  };

  const logout = async () => {
    await axios.post("http://localhost:8800/api/auth/logout")
    setCurrentUser(null)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser || {}));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};