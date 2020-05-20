import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Chart
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        to="/line"
                        className="nav-item nav-link"
                        activeClassName="active"
                    >
                        Line
                    </NavLink>
                    <NavLink
                        to="/bar"
                        className="nav-item nav-link"
                        activeClassName="active"
                    >
                        Bar
                    </NavLink>
                    <NavLink
                        to="/pie"
                        className="nav-item nav-link"
                        activeClassName="active"
                    >
                        Pie
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
