import { useContext, FC, ReactNode } from "react";
import { Navigate } from "react-router-dom"; // Ensure this is react-router-dom

import { AuthContext } from "@root/contexts/AuthContext";

interface PublicRoutesProps {
  children: ReactNode;
}

const PublicRoutes: FC<PublicRoutesProps> = ({ children }) => {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
};

export { PublicRoutes };
