// components/Task.tsx
import React from "react";
import CompletedBtn from "./CompletedBtn";
import Paragraph from "@/components/Typography/Paragraph";

type Props = {
  id: string;
  task: string;
  completed: boolean;
  onTaskAdded: () => void;
};

const Task = ({ id, task, completed, onTaskAdded }: Props) => {
  return (
    <div
      className={`flex h-20 items-center gap-4 px-4 border-b transition-all border-y-light-veryLightGrayishBlue dark:border-y-dark-veryDarkGrayishBlue2
      ${completed && ""}
    `}
    >
      <CompletedBtn completed={completed} onTaskAdded={onTaskAdded} id={id} />
      <p
        className={`text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlue text-xl transition-all
        ${
          completed &&
          "text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue line-through"
        }
        `}
      >
        {task}
      </p>
    </div>
  );
};

export default Task;
