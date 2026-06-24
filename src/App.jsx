import { useReducer } from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

import expenseReducer from "./reducer/expenseReducer";

import "./App.css";

const initialState = [
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

function App() {
  const [expenses, dispatch] = useReducer(
    expenseReducer,
    initialState
  );

  return (
    <div className="app">
      <Header />

      <Balance expenses={expenses} />

      <ExpenseForm />

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;