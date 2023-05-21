import ExpenceItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) => {
  if (props.items.length == 0) {
    return <h2 className="expenses-error">No Item Found In This Year</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expence) => {
        return (
          <ExpenceItem
            key={expence.id}
            date={expence.date}
            name={expence.name}
            price={expence.price}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
