import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { chartContext } from "../../context";

class LineGraph extends Component {
    static contextType = chartContext;

    componentWillMount() {
        const { getChartData } = this.context;
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
                <Line
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

export default LineGraph;
