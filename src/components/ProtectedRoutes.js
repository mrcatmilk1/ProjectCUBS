import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    return (
        user ? <Outlet context={[ user ]} /> : <Navigate to={"/login"} />
    )
}

export default ProtectedRoutes;