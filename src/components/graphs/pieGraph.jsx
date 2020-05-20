import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { chartContext } from "../../context";

class PieGraph extends Component {
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
                <Pie
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

export default PieGraph;
