import Link from "next/link";
import React from "react";
import styles from "../../styles/Countries.module.css";
const index = ({ countries }) => {
  return (
    <div>
      <h1>Countries</h1>
      {countries.map((country, id) => (
        <Link href={`/countries/${country.name.common}`} key={id}>
          <a className={styles.single}>
            <h3>{country.name.common}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  const finalData = data.slice(0,10)

  return {
    props: { countries: finalData },
  };
};
