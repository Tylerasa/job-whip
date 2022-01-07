import Link from "next/link";
import React from "react";
import styles from "../../styles/Countries.module.css";
import { useSelector } from "react-redux";

const CountryIndex = ({ countries }) => {
  const value = useSelector((state) => state.floater.value);

  return (
    <div>
      <h1
        style={{
          color: value ? "white" : "black",
        }}
      >
        Countries
      </h1>
      {countries.map((country, id) => (
        <Link href={`/countries/${country.name.common}`} key={id}>
          <a
            style={{
              backgroundColor: value ? "#444" : "white",
              color: value ? "white" : "black",
              borderLeft: value ? "#444" : "white",
            }}
            className={styles.single}
          >
            <h3>{country.name.common}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CountryIndex;

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  const finalData = data.slice(0, 10);

  return {
    props: { countries: finalData },
  };
};
