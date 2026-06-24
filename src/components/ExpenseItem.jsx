import "../styles/ExpenseItem.css";

function ExpenseItem({ expense, dispatch }) {
  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: expense.id,
    });
  };

  return (
    <div className="expense-item">
      <span>{expense.title}</span>

      <span>₹{expense.amount}</span>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;