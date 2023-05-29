import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    //Create a new array of 12 values
    const dataPointValues = props.dataPoints.map(dataP => dataP.value);
    //... to pull out all elements   
    const totalMax = Math.max(...dataPointValues);
    return (
        <div className='chart'>
            {props.dataPoints.map(dataP => (
            <ChartBar
                key = {dataP.label}
                value = {dataP.value}
                maxValue = {totalMax}
                label = {dataP.label}
            />
            ))}
        </div>
    );
};

export default Chart;