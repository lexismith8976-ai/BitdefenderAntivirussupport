import React, { createContext, useState, useContext, useEffect } from 'react';
import { AuthContextType, User, LoginFormData, SignupFormData } from '../types/auth';
import toast from 'react-hot-toast';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('bitdefender_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock login - In real app, this would be an API call
      if (email === 'demo@bitdefender.com' && password === 'password123') {
        const userData: User = {
          id: '1',
          name: 'Demo User',
          email: email,
          plan: 'Premium'
        };
        setUser(userData);
        localStorage.setItem('bitdefender_user', JSON.stringify(userData));
        toast.success('Successfully logged in!');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      toast.error(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock signup - In real app, this would be an API call
      const userData: User = {
        id: Date.now().toString(),
        name: name,
        email: email,
        plan: 'Basic'
      };
      setUser(userData);
      localStorage.setItem('bitdefender_user', JSON.stringify(userData));
      toast.success('Account created successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
      toast.error(err instanceof Error ? err.message : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bitdefender_user');
    toast.success('Logged out successfully');
  };

  const forgotPassword = async (email: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock password reset
      toast.success('Password reset link sent to your email!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send reset link');
      toast.error(err instanceof Error ? err.message : 'Failed to send reset link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, signup, logout, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};