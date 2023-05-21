import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const dataPoints = [
    { id: "date_0", label: "Jan", value: 0 },
    { id: "date_1", label: "Feb", value: 0 },
    { id: "date_2", label: "Mar", value: 0 },
    { id: "date_3", label: "Apr", value: 0 },
    { id: "date_4", label: "May", value: 0 },
    { id: "date_5", label: "Jun", value: 0 },
    { id: "date_6", label: "Jul", value: 0 },
    { id: "date_7", label: "Aug", value: 0 },
    { id: "date_8", label: "Sep", value: 0 },
    { id: "date_9", label: "Oct", value: 0 },
    { id: "date_10", label: "Nov", value: 0 },
    { id: "date_11", label: "Dec", value: 0 },
  ];

  for (const expense of props.expences) {
    const expenceMonth = expense.date.getMonth();
    dataPoints[expenceMonth].value += expense.price;
  }

  return (
    <div>
      <Chart dataPoints={dataPoints} />
    </div>
  );
};

export default ExpensesChart;
