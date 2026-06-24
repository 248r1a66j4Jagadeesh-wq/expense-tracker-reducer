import { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";
import "../styles/ExpenseForm.css";

function ExpenseForm() {
  const { dispatch } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || amount === "") return;

    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now(),
        title: title,
        amount: Number(amount),
      },
    });

    setTitle("");
    setAmount("");
  };

  return (
    <section className="expense-form">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">
          Add Expense
        </button>
      </form>
    </section>
  );
}

export default ExpenseForm;