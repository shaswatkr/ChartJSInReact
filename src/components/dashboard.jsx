import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import LineGraph from "./graphs/lineGraph";
import BarGraph from "./graphs/barGraph";
import PieGraph from "./graphs/pieGraph";

class Dashboard extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Switch>
                    <Route path="/line" component={LineGraph} />
                    <Route path="/bar" component={BarGraph} />
                    <Route path="/pie" component={PieGraph} />
                </Switch>
            </>
        );
    }
}

export default Dashboard;
