import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:8081/check-auth", {
          withCredentials: true,
        });
        if (response.data.Status === "Success") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking auth", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await axios.get("http://localhost:8081/logout", {
        withCredentials: true,
      });
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
