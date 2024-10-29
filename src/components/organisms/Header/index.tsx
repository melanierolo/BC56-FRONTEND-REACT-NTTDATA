import { FC, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "@components/atoms/Logo";
import CartWidget from "@components/molecules/CartWidget";
import Button from "@components/atoms/Button";

import "./style.css";
import Container from "../Container";
import { AuthContext } from "@root/contexts/AuthContext";

const Header: FC = () => {
  const { state, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/");
  };

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
              {state.isAuthenticated ? (
                <li className="nav__item">
                  <span className="nav__item--span">Welcome {state.firstName ?? "User"}</span>
                  <Button size="small" children="Logout" onClick={onLogout} />
                </li>
              ) : (
                <li className="nav__item">
                  <li className="nav__item">
                    <NavLink className="nav__link" to="/login">
                      Sign in
                    </NavLink>
                  </li>
                </li>
              )}
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
