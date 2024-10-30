import { FC, ReactNode, useReducer, useEffect } from "react";
import { AuthContext } from "@root/contexts/AuthContext";
import { initialAuthState, authReducer } from "@root/store/auth/authReducer";
import { loginAction, logoutAction } from "@root/store/auth/authActions";

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const login = (token: string, firstName: string) => {
    dispatch(loginAction(token, firstName));
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  useEffect(() => {
    if (authState.isAuthenticated) {
      sessionStorage.setItem("authToken", authState.token || "");
      sessionStorage.setItem("firstName", authState.firstName || "");
    } else {
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("firstName");
    }
  }, [authState.isAuthenticated]);

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
