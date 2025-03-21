import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { logoutUser, getUserDetail } from '../service/apiService';

// Define the user state type
interface User {
  id: string | null;
  role: string | null;
  username: string | null;
}

// Define the authentication context type
interface AuthContextType {
  isLoggedIn: boolean;
  userProp: User;
  loading: boolean;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
  getUser: () => Promise<void>;
}

// Create the AuthContext with an initial undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define props for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProp, setUserProp] = useState<User>({ id: null, role: null, username: null });
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    getUser();
  }, []); // Runs once when the component mounts

  const getUser = async () => {
    try {
      const res = await getUserDetail();
      const { id, role, username } = res;

      // Update state
      setIsLoggedIn(true);
      setUserProp({ id, role, username });
    } catch (err) {
      console.error('Error fetching user details:', err);
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    await getUser();
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      alert(res.data.message);
      setIsLoggedIn(false);
      setUserProp({ id: null, role: null, username: null });
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userProp, loading, handleLogin, handleLogout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
