import { createContext, useReducer, FC, ReactNode } from "react";
import authReducer, { AuthState, initialAuthState } from "@root/store/auth/authReducer";
import { loginAction, logoutAction } from "@root/store/auth/AuthActions";

interface AuthContextType {
  state: AuthState;
  login: (token: string, firstName: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  state: initialAuthState,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const login = (token: string, firstName: string) => {
    dispatch(loginAction(token, firstName));
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>;
};
