import './css/Login.css';
// import{handleAuth} from "./fetching/AuthFetch";
import { useState } from "react";

const Home = () => {
    
    return ( 
        <div>
            <h1>dash</h1>
            <p>{localStorage.getItem("auth")}</p>
        </div>
     );
}

export default Home;