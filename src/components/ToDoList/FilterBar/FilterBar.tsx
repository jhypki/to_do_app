import React from "react";
import Paragraph from "../../Typography/Paragraph";
import Filters from "./Filters";

type Props = {
  onTaskAdded: () => void;
};

const FilterBar = (props: Props) => {
  const handleClear = async () => {
    try {
      const res = await fetch("/api/task", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to clear completed tasks");
      }

      // Handle successful deletion
      console.log("Successfully cleared completed tasks");
    } catch (error) {
      console.error("Error clearing tasks:", error);
      alert("Error clearing tasks. Please try again.");
    } finally {
      props.onTaskAdded();
    }
  };

  return (
    <div className="flex justify-between p-4 flex-row w-full">
      <p className="text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue">
        5 items left
      </p>
      <div className="flex gap-2 flex-wrap">
        <Filters />
      </div>
      <p
        onClick={handleClear}
        className="text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue hover:text-light-veryDarkGrayishBlue dark:hover:text-dark-veryDarkGrayishBlue transition-all cursor-pointer"
      >
        Clear Completed
      </p>
    </div>
  );
};

export default FilterBar;
