import { useEffect, useState } from "react";
import { LyricPlayer } from "../components/LyricPlayer";
import Navbar from "../components/Navbar";
import { db_get } from "../services/Database";

const Learn = () => {

    const [song, setSong] = useState();

    useEffect(() => {
        db_get("songs").then(songs => {
            setSong(songs[0])
        })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            {song ? <LyricPlayer {...song} /> : <h1> Learn </h1>}
        </div>
    )
}

export default Learn;