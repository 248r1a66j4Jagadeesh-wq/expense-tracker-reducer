import "../styles/Balance.css";

function Balance({ expenses }) {

  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <section className="balance">

      <h2>Current Balance</h2>

      <h1>₹{total}</h1>

    </section>
  );
}

export default Balance;