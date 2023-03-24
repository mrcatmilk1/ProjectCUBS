import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav>
                <h1> My K Star </h1>
                <NavLink to={"/"}> Home </NavLink>
                <NavLink to={"/dashboard"}> Dashboard </NavLink>
                <NavLink to={"/dictionary"}> Dictionary </NavLink>
                <NavLink to={"/learn"}> Learn </NavLink>
                <button onClick={() => {
                    localStorage.removeItem("user");
                    window.location.reload();
                }}> Logout </button>
            </nav>
        </header>
    )
}

export default Navbar;