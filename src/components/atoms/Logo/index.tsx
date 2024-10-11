import marketHubLogo from "../../../assets/vectors/logo-markethub.svg";
import "style.css";

const Logo = () => {
  return (
    <div className="logo-markethub">
      <img
        className="logo-markethub__img"
        src={marketHubLogo}
        alt="MarketHub - logotype"
      ></img>
    </div>
  );
};
export default Logo;
