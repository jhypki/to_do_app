"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
type Props = {};

const LogOutButton = (props: Props) => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Error logging out. Please try again.");
    } finally {
      window.location.href = "/";
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="
    dark:bg-dark-veryDarkDesaturatedBlue dark:text-light-veryLightGrayishBlue
    bg-light-veryLightGray text-light-veryDarkGrayishBlue
    py-2 px-4 rounded-md
  "
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
