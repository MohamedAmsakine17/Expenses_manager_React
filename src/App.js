import React, { useState } from "react";
import "./App.css";
import Expences from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const Dummy_Expences = [
  {
    id: "Ex-0",

    date: new Date(2019, 1, 2),
    name: "PS5",
    price: "800",
  },
  {
    id: "Ex-1",
    date: new Date(2020, 5, 16),
    name: "Dell xps 13",
    price: "2000",
  },
  {
    id: "Ex-2",
    date: new Date(2021, 4, 8),
    name: "Chair",
    price: "200",
  },
  {
    id: "Ex-3",
    date: new Date(2022, 12, 1),
    name: "Desk",
    price: "300",
  },
];

function App() {
  const [expences, setExpences] = useState(Dummy_Expences);

  const saveExpensesHandler = (expence) => {
    setExpences((prevExpences) => {
      return [expence, ...prevExpences];
    });
  };

  return (
    <div className="app">
      <NewExpenses saveExpenses={saveExpensesHandler} />
      <Expences items={expences} />
    </div>
  );
}

export default App;
