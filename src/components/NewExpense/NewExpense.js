import React from "react";
import { ExpensesForm } from "./ExpensesForm";
import "./NewExpense.css";
export const NewExpense = ({ onNewSubmit }) => {
  const handleOnSave = (savedExpenseData) => {
    const newExpenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };

    console.log(newExpenseData);
    onNewSubmit(newExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpensesForm onSubmitExpenseData={handleOnSave} />
    </div>
  );
};
