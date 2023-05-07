import React from "react"; 
import '../css/Body.css';
import Header from "./Header";

const Body =()=> {
    return(
        <div className='body'>
            <Header />
            <h2>
            Am the body!
            </h2>
        </div>
    )
}
export default Body;