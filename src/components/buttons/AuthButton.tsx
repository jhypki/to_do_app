import React from "react";
import Link from "next/link";
type Props = {
  children: React.ReactNode;
  href: string;
};

function AuthButton(props: Props) {
  return (
    <Link href={props.href ? props.href : "/"}>
      <button
        className="dark:bg-dark-veryDarkDesaturatedBlue dark:text-light-veryLightGrayishBlue
      bg-light-veryLightGray text-light-veryDarkGrayishBlue
      py-2 px-4 rounded-md"
      >
        {props.children}
      </button>
    </Link>
  );
}

export default AuthButton;
