import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  name: string;
  walletAddress: string;
  balance: number;
  miningActive: boolean;
  hashrate: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateBalance: (newBalance: number) => void;
  updateMiningStatus: (active: boolean, hashrate?: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('purplecloud_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate login with demo data
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      walletAddress: '0x742d35Cc7465F30C6FfD2c65B6Db44c81fB5A2B3',
      balance: 12.4567,
      miningActive: false,
      hashrate: 0,
    };

    setUser(mockUser);
    localStorage.setItem('purplecloud_user', JSON.stringify(mockUser));
    toast.success('Login realizado com sucesso!');
  };

  const register = async (email: string, password: string, name: string) => {
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      email,
      name,
      walletAddress: '0x' + Math.random().toString(16).substr(2, 40),
      balance: 0,
      miningActive: false,
      hashrate: 0,
    };

    setUser(mockUser);
    localStorage.setItem('purplecloud_user', JSON.stringify(mockUser));
    toast.success('Conta criada com sucesso!');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('purplecloud_user');
    toast.success('Logout realizado com sucesso!');
  };

  const updateBalance = (newBalance: number) => {
    if (user) {
      const updatedUser = { ...user, balance: newBalance };
      setUser(updatedUser);
      localStorage.setItem('purplecloud_user', JSON.stringify(updatedUser));
    }
  };

  const updateMiningStatus = (active: boolean, hashrate: number = 0) => {
    if (user) {
      const updatedUser = { ...user, miningActive: active, hashrate };
      setUser(updatedUser);
      localStorage.setItem('purplecloud_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateBalance,
      updateMiningStatus,
    }}>
      {children}
    </AuthContext.Provider>
  );
};