import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <Balance />

      <ExpenseForm />

      <ExpenseList />

    </div>
  );
}

export default App;