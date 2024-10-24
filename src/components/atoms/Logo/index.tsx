import { FC } from "react";
import marketHubLogo from "@assets/vectors/logo-markethub.svg";
import "./style.css";

const Logo: FC = () => {
  return (
    <div className="logo-markethub">
      <img className="logo-markethub__img" src={marketHubLogo} alt="MarketHub - logotype" />
    </div>
  );
};
export default Logo;
