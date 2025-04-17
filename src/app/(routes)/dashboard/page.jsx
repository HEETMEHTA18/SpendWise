"use client";
import React, { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses, Incomes } from "../../../../utils/schema";
import { db } from "../../../../utils/dbConfig";
import BarChartDashboard from "./_components/BarChartDashboard";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";
import BudgetItem from "./budgets/_components/BudgetItem";

function Page() {
  const { user } = useUser();
  const [budgetList, setBudgetList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    if (user) {
      getBudgetList();
    }
  }, [user]);

  const getBudgetList = async () => {
    try {
      if (!user?.primaryEmailAddress?.emailAddress) return;

      const result = await db
        .select({
          ...getTableColumns(Budgets),
          totalSpent: sql`sum(cast(${Expenses.amount} as numeric))`.mapWith(
            Number
          ),
          totalItem: sql`count(${Expenses.id})`.mapWith(Number),
        })
        .from(Budgets)
        .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id));

      setBudgetList(result);
      getAllExpenses();
      getIncomeList();
    } catch (error) {
      console.error("Error fetching budget list:", error);
    }
  };

  const getAllExpenses = async () => {
    try {
      if (!user?.primaryEmailAddress?.emailAddress) return;

      const result = await db
        .select({
          id: Expenses.id,
          name: Expenses.name,
          amount: Expenses.amount,
        })
        .from(Expenses)
        .innerJoin(Budgets, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
        .orderBy(desc(Expenses.id));

      setExpenseList(result);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const getIncomeList = async () => {
    try {
      const result = await db
        .select({
          totalAmount: sql`sum(cast(${Incomes.amount} as numeric))`.mapWith(
            Number
          ),
        })
        .from(Incomes);

      setIncomeList(result); // result[0].totalAmount is the total income
    } catch (error) {
      console.error("Error fetching total income:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="font-bold text-4xl">Hi, {user?.fullName}</h2>
      <p className="text-gray-500">
        Here's what's happening with your money. Let's manage your expenses.
      </p>

      <CardInfo budgetList={budgetList} incomeList={incomeList} />

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-5">
        <div className="lg:col-span-2">
          <BarChartDashboard budgetList={budgetList} />
          <ExpenseListTable
            expenseList={expenseList}
            refreshData={() => getBudgetList()}
          />
        </div>

        <div className="grid gap-5">
          <h2 className="font-bold text-lg">Latest Budgets</h2>
          {budgetList?.length > 0
            ? budgetList.map((budget, index) => (
                <BudgetItem budget={budget} key={index} />
              ))
            : [1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="h-[180px] w-full bg-slate-200 animate-pulse rounded-xl"
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
