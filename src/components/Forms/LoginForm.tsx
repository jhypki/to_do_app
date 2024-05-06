"use client";
import React from "react";
import Input from "./Inputs/Input";
import Form from "./Form";
import SubmitButton from "../buttons/SubmitButton";
import { useAuth } from "@/context/AuthContext";

type Props = {};

function LoginForm({}: Props) {
  const { login, loading, user } = useAuth();
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formEntries = Array.from(formData.entries());
    const data = Object.fromEntries(formEntries);
    console.log("Form data:", data);
    try {
      await login(String(data.email), String(data.password)); // Convert FormDataEntryValue to string
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in. Please try again.");
    } finally {
    }
  }

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Input placeholder="Email" type="email" name="email" />
      <Input placeholder="Password" type="password" name="password" />
      <SubmitButton disabled={false}>Login</SubmitButton>
    </Form>
  );
}

export default LoginForm;
