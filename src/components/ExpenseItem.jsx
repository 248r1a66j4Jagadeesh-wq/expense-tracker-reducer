import "../styles/ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">

      <span>Coffee</span>

      <span>₹120</span>

      <button>Delete</button>

    </div>
  );
}

export default ExpenseItem;