"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import Authenticated from "../Redirects/Authenticated";
type Props = {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: Props) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!loading && user) return <Authenticated />;
  return (
    <form
      onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      className="mt-24 flex flex-col w-11/12 max-w-md m-auto gap-8 bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue shadow-md rounded-md p-8 "
    >
      {props.children}
    </form>
  );
};

export default Form;
