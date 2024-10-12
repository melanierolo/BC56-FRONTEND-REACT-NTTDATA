import { FC, ReactNode } from "react";

import { Link } from "react-router-dom";

import facebookIcon from "@assets/icons/facebook-icon.svg";
import instagramIcon from "@assets/icons/instagram-icon.svg";
import tiktokIcon from "@assets/icons/tiktok-icon.svg";
import whatsappIcon from "@assets/icons/whatsapp-icon.svg";

import Logo from "@root/components/atoms/Logo";
import Container from "@components/organisms/Container";

import "./style.css";

interface navItem {
  name: string;
  path: string;
}

interface SocialMediaLinks {
  name: string;
  url: string;
  icon: ReactNode;
}

const Footer: FC = () => {
  const navItems: navItem[] = [
    { name: "Products", path: "/products" },
    { name: "Terms of Use", path: "/" },
    { name: "Privacy", path: "/" },
    { name: "Contact", path: "/" },
  ];
  const SocialMediaLinks: SocialMediaLinks[] = [
    {
      name: "Facebook",
      url: "https://en-gb.facebook.com/",
      icon: <img className="footer__icon" src={facebookIcon} alt="Facebook icon"></img>,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: <img className="footer__icon" src={instagramIcon} alt="Instagram icon"></img>,
    },
    {
      name: "WhatsApp",
      url: "https://web.whatsapp.com",
      icon: <img className="footer__icon" src={whatsappIcon} alt="whatsapp icon"></img>,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com",
      icon: <img className="footer__icon" src={tiktokIcon} alt="tiktok icon"></img>,
    },
  ];
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="footer__all-elements">
            <div className="footer__content">
              <div className="footer__logo">
                <Logo></Logo>
              </div>
              <div className="footer__nav">
                <nav className="nav">
                  <ul className="nav__list">
                    {navItems.map((item) => (
                      <li className="nav__item" key={item.name.toLowerCase()}>
                        <Link to={item.path} className="nav__link">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="footer__social-link">
                <ul className="footer__list">
                  {SocialMediaLinks.map((link) => (
                    <li key={link.name.toLowerCase()}>
                      <Link to={link.url} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr className="footer__hr"></hr>
            <div className="footer__copyright">
              <p>&copy; 2024 MarketHub. All right reserved.</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
