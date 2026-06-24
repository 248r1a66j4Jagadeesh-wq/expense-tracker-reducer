import "../styles/ExpenseForm.css";

function ExpenseForm() {
  return (
    <section className="expense-form">

      <h2>Add Expense</h2>

      <form>

        <input
          type="text"
          placeholder="Expense Name"
        />

        <input
          type="number"
          placeholder="Amount"
        />

        <button>
          Add Expense
        </button>

      </form>

    </section>
  );
}

export default ExpenseForm;