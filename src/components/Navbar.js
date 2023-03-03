import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <header>
            <nav>
                <h1> Navigation Bar </h1>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/about"> About </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
            </nav>
        </header>
    )
}