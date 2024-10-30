import { createContext } from "react";
import { AuthState, initialAuthState } from "@root/store/auth/authReducer";

export interface AuthContextType {
  authState: AuthState;
  login: (token: string, firstName: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  authState: initialAuthState,
  login: () => {},
  logout: () => {},
});
