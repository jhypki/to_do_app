import React from "react";
import { FaCheckCircle } from "react-icons/fa";
type Props = {
  id: string;
  onTaskAdded: () => void;
  completed: boolean;
};

const CompletedBtn = ({ id, onTaskAdded, completed }: Props) => {
  const handleComplete = async () => {
    try {
      const res = await fetch(`api/task/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          completed: true,
        }),
      });
    } catch (error) {
      console.error("Error completing task:", error);
      alert("Error completing task. Please try again.");
    } finally {
      onTaskAdded();
    }
  };
  return (
    <div
      onClick={handleComplete}
      className={`rounded-full w-5 h-5 border border-light-veryDarkGrayishBlue
     hover:border-light-veryDarkGrayishBlue
      hover:bg-light-veryDarkGrayishBlue
     transition-all cursor-pointer
     ${completed && "bg-light-veryDarkGrayishBlue "}
    `}
    ></div>
  );
};

export default CompletedBtn;
