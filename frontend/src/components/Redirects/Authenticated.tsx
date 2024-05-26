import React from "react";
import Link from "next/link";
type Props = {};

const Authenticated = (props: Props) => {
  return (
    <div>
      <h1>You are already logged in</h1>
      <Link href="/">
        <p>Go back home</p>
      </Link>
    </div>
  );
};

export default Authenticated;
