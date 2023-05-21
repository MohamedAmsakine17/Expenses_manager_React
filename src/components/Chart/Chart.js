import ChartBar from "./ChartBar";
import "./Chart.css";
import Item from "../UI/Item";

const Chart = (props) => {
  const expencesValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...expencesValues);
  return (
    <Item className="chart-bar__Container">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </Item>
  );
};

export default Chart;
