import { useReducer, useEffect } from "react";
import ExpenseContext from "./ExpenseContext";
import expenseReducer from "../reducer/expenseReducer";

const loadExpenses = () => {
  const savedExpenses = localStorage.getItem("expenses");

  if (savedExpenses) {
    return JSON.parse(savedExpenses);
  }

  return [
    {
      id: 1,
      title: "Coffee",
      amount: 120,
    },
    {
      id: 2,
      title: "Book",
      amount: 450,
    },
    {
      id: 3,
      title: "Movie",
      amount: 300,
    },
  ];
};

function ExpenseProvider({ children }) {
  const [expenses, dispatch] = useReducer(
    expenseReducer,
    loadExpenses()
  );

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        dispatch,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;