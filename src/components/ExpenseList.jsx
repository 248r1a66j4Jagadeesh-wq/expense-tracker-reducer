import "../styles/ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, dispatch }) {
  return (
    <section className="expense-list">
      <h2>Expenses</h2>

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          dispatch={dispatch}
        />
      ))}
    </section>
  );
}

export default ExpenseList;