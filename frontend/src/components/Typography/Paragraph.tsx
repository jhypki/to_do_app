import React from "react";

type Props = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
};

const Paragraph = ({ children, styles }: Props) => {
  return (
    <p
      style={styles}
      className="text-lg text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlueHover"
    >
      {children}
    </p>
  );
};

export default Paragraph;
