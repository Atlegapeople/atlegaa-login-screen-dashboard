export interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
  }
  
  export interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
  }
  
  export interface RegisterFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  }
  
  export interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (data: LoginFormData) => Promise<void>;
    register: (data: RegisterFormData) => Promise<void>;
    logout: () => void;
  }