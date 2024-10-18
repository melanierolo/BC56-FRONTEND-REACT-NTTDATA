import { FC } from "react";
import { NavLink } from "react-router-dom";
import Logo from "@components/atoms/Logo";
import CartWidget from "@root/components/molecules/CartWidget";
import "./style.css";
import Container from "../Container";

const Header: FC = () => {
  return (
    <header>
      <Container>
        <div className="header__content">
          <div className="logo-markethub">
            <NavLink className="nav__link" to="/">
              <Logo></Logo>
            </NavLink>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link" to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <CartWidget />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
