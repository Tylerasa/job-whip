import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const value = useSelector((state) => state.floater.value);

  return (
    <nav>
      <div className="logo">{/* <h1>Explorer</h1> */}</div>
      <Link href="/">
        <a
          style={{
            color: value ? "white" : "black",
          }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          style={{
            color: value ? "white" : "black",
          }}
        >
          About
        </a>
      </Link>
      <Link href="/countries">
        <a
          style={{
            color: value ? "white" : "black",
          }}
        >
          Countries
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
