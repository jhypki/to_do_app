"use client";
import React from "react";
import ToggleThemeButton from "@/components/buttons/ToggleThemeButton";
import AuthButton from "../buttons/AuthButton";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import LogOutButton from "../buttons/LogOutButton";
type Props = {};

const Header = (props: Props) => {
  const { user, loading } = useAuth();
  return (
    <div className="flex pt-8 flex-col md:pt-0  justify-between w-11/12">
      <div className="flex justify-between w-full">
        <h1 className=" text-light-veryLightGray text-5xl font-bold tracking-widest">
          <Link href="/">TODO</Link>
        </h1>
        <div className="flex h-10 gap-1 md:gap-4 flex-col md:flex-row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {user ? (
                <LogOutButton />
              ) : (
                <>
                  <AuthButton href="/register">Sign Up</AuthButton>
                  <AuthButton href="/login">Login</AuthButton>
                </>
              )}
            </>
          )}
        </div>
        <ToggleThemeButton />
      </div>
    </div>
  );
};

export default Header;
