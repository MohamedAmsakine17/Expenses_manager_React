import "./ExpenseFilter.css";
import Item from "../UI/Item";

const filter = (props) => {
  function onChangeHandler(e) {
    props.onChangeFilterdYear(e.target.value);
  }

  return (
    <Item className="expense-filter">
      <div>
        <p>Filter By Year</p>
      </div>
      <div>
        <select
          defaultValue="2023"
          onChange={onChangeHandler}
          className="expense-filter-select"
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </Item>
  );
};

export default filter;
