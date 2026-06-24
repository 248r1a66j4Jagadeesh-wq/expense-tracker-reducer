import "../styles/ExpenseItem.css";

function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">

      <span>{expense.title}</span>

      <span>₹{expense.amount}</span>

      <button>Delete</button>

    </div>
  );
}

export default ExpenseItem;