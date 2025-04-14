"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        {/* logo */}
        <Image src={"/logo.svg"} alt="logo" height={25} width={40} />
        <span className="text-purple-900 font-bold text-xl">SpendWise</span>
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className='rounded-full border-purple-900 text-purple-900'>Dashboard</Button>
          </Link>
          <Link href="/dashboard">
            <Button className='rounded-full text-white bg-purple-900'>Get Started</Button>
          </Link>
        </div>
      )}

    </div>
  );
}

export default Header;
