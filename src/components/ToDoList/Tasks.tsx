// components/Tasks.tsx
"use client";
import React, { useEffect, useState } from "react";
import Task from "./Task/Task";
import { User } from "firebase/auth";
import { BounceLoader } from "react-spinners";

type Props = {
  user: User | null;
  loading?: boolean;
  refresh: boolean;
  onTaskAdded: () => void;
  // Indicates if the list should be refreshed
};

const Tasks = ({ user, loading, refresh, onTaskAdded }: Props) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`/api/task?uid=${user?.uid}`);
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError("Error fetching tasks. Please try again.");
      }
    };

    if (user) {
      fetchTasks();
    }
  }, [user, refresh]); // Add `refresh` as a dependency

  if (loading) {
    return <BounceLoader className="my-20" />;
  }

  if (!user) {
    return <div>Not logged in</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col w-full max-w-xl bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue rounded-md">
      {tasks.map((task: any) => (
        <Task
          onTaskAdded={onTaskAdded}
          id={task.id}
          completed={task.completed}
          key={task.id}
          task={task.task}
        />
      ))}
    </div>
  );
};

export default Tasks;
