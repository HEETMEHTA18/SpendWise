"use client";
import React from "react";
import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="p-4 md:p-6 bg-white border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
          <span className="text-2xl font-extrabold text-orange-500 tracking-wide">
            SpendWise
          </span>
        </div>

        {/* Auth Buttons / User Profile */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 text-sm font-medium border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton>
              <button className="px-4 py-2 text-sm font-medium bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
