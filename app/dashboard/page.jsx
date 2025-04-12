import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
}

export default page;
