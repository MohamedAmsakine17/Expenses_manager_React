import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import Item from "../UI/Item";

function ExpenceItem(props) {
  return (
    <li>
      <Item className="expence-item-container">
        <ExpenseDate date={props.date} />
        <div className="expence-item-name">
          <h2>{props.name}</h2>
        </div>
        <div className="expence-item-price">{props.price}$</div>
      </Item>
    </li>
  );
}

export default ExpenceItem;
