import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();
//   const [cnt, setCnt] = useState(3);
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    // setInterval(() => {
    //   setCnt(cnt - 1);
    //   console.log("ss")
    // }, 1000);
  }, []);
  return (
    <div className="not-found">
      <h1>Opps....</h1>
      <h2>This page not found</h2>
      {/* <p>Redirect in {cnt}</p> */}
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
