import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  return (
    <section className="expense-list">

      <h2>Expenses</h2>

      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />

    </section>
  );
}

export default ExpenseList;