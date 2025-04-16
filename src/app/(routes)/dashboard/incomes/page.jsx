"use client";
import React from "react";
import CreateIncomes from "./_components/CreateIncomes";

function IncomesPage() {
  return (
    <div className="p-8">
      <h2 className="font-bold text-4xl">Incomes</h2>
      <CreateIncomes refreshData={() => {}} />
    </div>
  );
}

export default IncomesPage;
