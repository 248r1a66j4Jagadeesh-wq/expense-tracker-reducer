import { useReducer, useEffect } from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

import expenseReducer from "./reducer/expenseReducer";

import "./App.css";

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

const initialState = loadExpenses();

function App() {
  const [expenses, dispatch] = useReducer(
    expenseReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  return (
    <div className="app">
      <Header />

      <Balance expenses={expenses} />

      <ExpenseForm dispatch={dispatch} />

      <ExpenseList
        expenses={expenses}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;