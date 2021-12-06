import React from "react";
import useFetch from "../../hooks/useFetch";

const FrasesBreacking = ({ counter }) => {
  console.log("Soy frase");

  const { data } = useFetch(`quotes/${counter}`);
  const { author, quote, series } = !!data && data[0];
  console.log(data);

  return (
    <div className="bg-dark">
      <h2>Frase</h2>
      <p>
        <strong>Autor: </strong>
        {author}
      </p>
      <p>
        <strong>Frase: </strong>
        {quote}
      </p>
      <p>
        <strong>Serie: </strong>
        {series}
      </p>{" "}
    </div>
  );
};

export default FrasesBreacking;
