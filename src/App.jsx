import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;