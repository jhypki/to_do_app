import React from "react";
import LoginForm from "@/components/Forms/LoginForm";

type Props = {};

function page({}: Props) {
  return (
    <div className="w-full">
      <LoginForm />
    </div>
  );
}

export default page;
