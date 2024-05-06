// components/ToDoList.tsx
"use client";
import React, { useState } from "react";
import FilterBar from "./FilterBar/FilterBar";
import Tasks from "./Tasks";
import CreateBar from "./CreateBar";
import { useAuth } from "@/context/AuthContext";

type Props = {};

const ToDoList = (props: Props) => {
  const { user, loading } = useAuth();
  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => {
    setRefresh(!refresh); // Toggle the refresh state
  };

  return (
    <div className="w-11/12 max-w-xl flex flex-col gap-6">
      <CreateBar onTaskAdded={handleTaskAdded} />
      <div className="flex flex-col bg-light-veryLightGray items-center justify-center dark:bg-dark-veryDarkDesaturatedBlue shadow-md rounded-md">
        <Tasks
          onTaskAdded={handleTaskAdded}
          user={user}
          loading={loading}
          refresh={refresh}
        />
        <FilterBar onTaskAdded={handleTaskAdded} />
      </div>
    </div>
  );
};

export default ToDoList;
