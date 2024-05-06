// components/CreateBar.tsx
"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";

type Props = {
  onTaskAdded: () => void; // Function to call when a task is added
};

const CreateBar = ({ onTaskAdded }: Props) => {
  const { user } = useAuth();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const formEntries = Array.from(formData.entries());
    const data = Object.fromEntries(formEntries);
    if (!data.task) return alert("Please enter a task");
    try {
      const response = await fetch("/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: data.task,
          uid: user?.uid,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      form.reset();
      onTaskAdded(); // Call the refresh function
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Error creating task. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-xl rounded-md p-6 bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlueHover"
      />
    </form>
  );
};

export default CreateBar;
