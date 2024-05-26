"use client";
import React, { FormEvent } from "react";
import Input from "./Inputs/Input";
import Form from "./Form";
import SubmitButton from "../buttons/SubmitButton";
import { useAuth } from "@/context/AuthContext";
type Props = {};

function RegisterForm({}: Props) {
  const { register } = useAuth();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Extracting the form data
    const formEntries = Array.from(formData.entries());
    const data = Object.fromEntries(formEntries);

    try {
      await register(String(data.email), String(data.password));
      window.location.href = "/";
    } catch (error) {
      console.error("Error registering:", error);
      alert("Error registering. Please try again.");
    } finally {
    }
  }

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Input placeholder="Name" type="text" name="name" />
      <Input placeholder="Email" type="email" name="email" />
      <Input placeholder="Password" type="password" name="password" />
      <Input
        placeholder="Confirm Password"
        type="password"
        name="confirmPassword"
      />
      <SubmitButton disabled={false}>Register</SubmitButton>
    </Form>
  );
}

export default RegisterForm;
