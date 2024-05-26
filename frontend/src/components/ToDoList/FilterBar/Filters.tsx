import React from "react";

type Props = {};

const Filters = (props: Props) => {
  const filters = ["All", "Active", "Completed"];
  return (
    <>
      {filters.map((filter) => (
        <button
          className="text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue hover:text-light-veryDarkGrayishBlue dark:hover:text-dark-veryDarkGrayishBlue transition-all cursor-pointer"
          key={filter}
        >
          {filter}
        </button>
      ))}
    </>
  );
};

export default Filters;
