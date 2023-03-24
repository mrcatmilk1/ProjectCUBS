import { useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
    const [user] = useOutletContext();

    console.log(user);
    return (
        <div>
            <Navbar></Navbar>
            <h1> Welcome {user.age}</h1>
            <p>Ipsum culpa esse eu nostrud minim dolor tempor magna exercitation sint laboris dolore. Do nulla ut nulla velit cupidatat qui amet deserunt. Qui Lorem quis ullamco voluptate fugiat occaecat consectetur mollit proident dolor aute est. </p>
        </div>
    )
}

export default Home;