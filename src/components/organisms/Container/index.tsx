import { FC, ReactNode } from "react";
import "./style.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;