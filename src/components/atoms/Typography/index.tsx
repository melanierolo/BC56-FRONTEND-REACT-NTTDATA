import { ReactNode, FC } from "react";
import "./style.css";

type TagElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps {
  tag?: TagElement;
  children: ReactNode;
}

const Typography: FC<TypographyProps> = ({ tag: Tag = "p", children }) => {
  return <Tag>{children}</Tag>;
};

export default Typography;
