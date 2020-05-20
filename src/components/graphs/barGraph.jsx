import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { chartContext } from "../../context";

class BarGraph extends Component {
    static contextType = chartContext;

    componentWillMount() {
        let { getChartData } = this.context;
        getChartData();
    }

    render() {
        let {
            chartData,
            location,
            legendPosition,
            displayTitle,
            displayLegend,
        } = this.context;

        return (
            <div className="container pt-5">
                <Bar
                    data={chartData}
                    options={{
                        title: {
                            display: displayTitle,
                            text: "Largest Cities In " + location,
                            fontSize: 25,
                        },
                        legend: {
                            display: displayLegend,
                            position: legendPosition,
                        },
                    }}
                />
            </div>
        );
    }
}

export default BarGraph;
