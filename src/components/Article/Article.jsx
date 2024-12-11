import React from "react";
import "./styles.css";

export function Article({title, provider, description, imageNoticia}) {
  return (
    <article id="article">
      <img src={imageNoticia} alt={title} />
      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
