import { FC } from "react";
import Container from "@root/components/organisms/Container";
import Button from "@root/components/atoms/Button";
import { Link } from "react-router-dom";
import "./style.css";

interface HeroBannerProps {
  mainTitle: string;
  highlightedTitle: string;
  paragraphText: string;
  buttonText: string;
  buttonLink: string;
}

const HeroBanner: FC<HeroBannerProps> = ({
  mainTitle,
  highlightedTitle,
  paragraphText,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="hero">
      <Container>
        <article className="hero-content">
          <h2 className="hero-content__title">
            {mainTitle + " "}
            <span className="hero-content__title--highlight">
              {highlightedTitle}
            </span>
          </h2>
          <p className="hero-content__paragraph">{paragraphText}</p>
          <Link to={buttonLink}>
            <Button size="large" color="primary">
              {buttonText}
            </Button>
          </Link>
        </article>
      </Container>
    </section>
  );
};

export default HeroBanner;
