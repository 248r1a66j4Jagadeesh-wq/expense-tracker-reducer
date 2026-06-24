import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

import ExpenseProvider from "./context/ExpenseProvider";

import "./App.css";

function App() {
  return (
    <ExpenseProvider>
      <div className="app">
        <Header />

        <Balance />

        <ExpenseForm />

        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}

export default App;