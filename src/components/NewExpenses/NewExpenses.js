import NewExpenses_Form from "./NewExpenses_Form";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const AddNewExpensesHandler = (expences) => {
    const saveExpenses = { ...expences, id: Math.random() * 10000000 };
    props.saveExpenses(saveExpenses);
  };

  return (
    <div className="NewExpenses">
      <NewExpenses_Form onAddNewExpenses={AddNewExpensesHandler} />
    </div>
  );
};

export default NewExpenses;
