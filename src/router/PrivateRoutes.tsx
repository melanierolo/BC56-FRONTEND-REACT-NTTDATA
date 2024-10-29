import { useContext, FC, ReactNode } from "react";
import { Navigate } from "react-router";

import { AuthContext } from "@root/contexts/AuthContext";

interface PrivateRoutesProps {
  children: ReactNode;
}

export const PrivateRoutes: FC<PrivateRoutesProps> = ({ children }) => {
  const { authState } = useContext(AuthContext);

  if (authState.isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};
