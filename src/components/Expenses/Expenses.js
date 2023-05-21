import { useState } from "react";
import Card from "../UI/Card";
import ExpenceFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2023");

  const FilterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses-container">
      <ExpenceFilter
        selected={filteredYear}
        onChangeFilterdYear={FilterChangeHandler}
      />
      <ExpensesChart expences={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}

export default Expenses;
