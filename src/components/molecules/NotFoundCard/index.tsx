import { FC } from "react";

import notFound from "@assets/images/not-found.png";

import "./style.css";

interface NotFoundCardProps {
  message?: string;
}

const NotFoundCard: FC<NotFoundCardProps> = ({ message }) => {
  return (
    <article className="not-found">
      <h3 className="not-found__title">Search Results</h3>
      <p className="not-found__parargaph">
        {message || "No results found.Please adjust your filters or keyword"}
      </p>
      <figure>
        <img className="not-found__img" src={notFound} alt="not found - image" />
      </figure>
    </article>
  );
};

export default NotFoundCard;
