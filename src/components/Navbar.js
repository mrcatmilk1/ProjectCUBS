import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <header>
            <nav>
                <h1> Project Cubs </h1>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/karaoke"> Karaoke </NavLink>
                <NavLink to="/bookmark"> Bookmark </NavLink>
            </nav>
        </header>
    )
}