import { FC } from "react";
import HeroBanner from "@root/components/molecules/HeroBanner";

const Home: FC = () => {
  const heroBannerData = {
    mainTitle: "All Your Favorite Brands in",
    highlightedTitle: "MarketHub",
    paragraphText:
      "At MarketHub, we bring together the best products and your favorite brands, making shopping easier than ever. From fashion to tech, find everything you need in one place.",
    buttonText: "Discover More",
    buttonLink: "/products",
  };
  return (
    <main>
      <HeroBanner
        mainTitle={heroBannerData.mainTitle}
        highlightedTitle={heroBannerData.highlightedTitle}
        paragraphText={heroBannerData.paragraphText}
        buttonText={heroBannerData.buttonText}
        buttonLink={heroBannerData.buttonLink}
      />
    </main>
  );
};

export default Home;
