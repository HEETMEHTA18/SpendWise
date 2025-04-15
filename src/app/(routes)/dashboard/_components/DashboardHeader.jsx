import { UserButton } from "@clerk/nextjs";
import React from "react";

function DashboardHeader() {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between">
      <div></div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </div>
  );
}

export default DashboardHeader;
