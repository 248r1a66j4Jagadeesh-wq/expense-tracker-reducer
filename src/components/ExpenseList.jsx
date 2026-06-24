import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

import "../styles/ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const { expenses, dispatch } = useContext(ExpenseContext);
return (
  <section className="expense-list">
    <h2>Expenses</h2>

    {expenses.length === 0 ? (
      <p className="empty-message">
        No expenses added yet.
      </p>
    ) : (
      expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          dispatch={dispatch}
        />
      ))
    )}
  </section>
);
  
}

export default ExpenseList;