import React, { useEffect } from "react";
import Meta from "../../components/Meta";
const Details = ({ country }) => {
  console.log(country);
  return (
    <>
      <Meta title={`Country | ${country[0].name.common}`} />
      <div>
        <div>
          <h1 style={{ display: "inline-block", marginRight: "5px" }}>
            {country[0].name.official}
          </h1>
          <img
            src={country[0].flags.png}
            width="20px"
            alt={country[0].name.common}
          />
        </div>
        <p>Common Name: {country[0].name.common}</p>
        <p>Capital: {country[0].capital ? country[0].capital[0] : "N/A"}</p>
        <p>
          Population:{" "}
          {country[0].population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
    </>
  );
};

export default Details;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${context.params.country}`
  );
  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};
