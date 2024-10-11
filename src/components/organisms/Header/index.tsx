import { NavLink } from "react-router-dom";
import Logo from "@components/atoms/Logo";
import CartWidget from "@root/components/molecules/CartWidget";
import "./style.css";
import Container from "../Container";

const Header = () => {
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
                <CartWidget />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
/*
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="products" element={<DashboardMessages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
*/
