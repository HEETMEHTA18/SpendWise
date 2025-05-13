"use client";
import { db } from "../../../../../utils/dbConfig";
import { Budgets, Expenses } from "../../../../../utils/schema";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ExpenseListTable from "./_components/ExpenseListTable";
import { useUser } from "@clerk/nextjs";
import { sql } from "drizzle-orm";

function ExpensesScreen() {
  const [expensesList, setExpensesList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) getAllExpenses();
  }, [user]);

  const getAllExpenses = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;

      const result = await db
        .select({
          id: Expenses.id,
          name: Expenses.name,
          amount: Expenses.amount,
          createdAt: Expenses.createdAt,
        })
        .from(Expenses)
        .leftJoin(Budgets, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Expenses.createdBy, email))
        .orderBy(desc(Expenses.id));

      setExpensesList(result);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">My Expenses</h2>

      <ExpenseListTable
        refreshData={getAllExpenses}
        expensesList={expensesList}
      />
    </div>
  );
}

export default ExpensesScreen;
