import { useState } from "react";
import "./NewExpenses_Form.css";

const NewExpensesForm = (props) => {
  const [item, setItem] = useState({
    name: "",
    price: "",
    date: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const savedData = {
      name: item.name,
      price: item.price,
      date: new Date(item.date),
    };

    props.onAddNewExpenses(savedData);
    setItem({ name: "", price: "", date: "" });
  };

  return (
    <form onSubmit={submitHandler} className="new-Expenses_Form">
      <div className="new-Expenses_Group">
        <label>Item</label>
        <input
          className="new-Expenses_Controll"
          type="text"
          name="name"
          value={item.name}
          onChange={changeHandler}
          required
        />
      </div>
      <div className="new-Expenses_Group">
        <label>Price</label>
        <input
          className="new-Expenses_Controll"
          type="number"
          name="price"
          value={item.price}
          onChange={changeHandler}
          required
        />
      </div>
      <div className="new-Expenses_Group">
        <label>Date</label>
        <input
          className="new-Expenses_Controll"
          type="date"
          min="2022-12-30"
          max="2032-12-30"
          name="date"
          value={item.date}
          onChange={changeHandler}
        />
      </div>
      <div className="new-Expenses_Group">
        <button className="buy-btn">ADD</button>
      </div>
    </form>
  );
};

export default NewExpensesForm;
