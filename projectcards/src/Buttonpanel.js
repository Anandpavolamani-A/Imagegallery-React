import { useState } from "react";
import './Buttonpanel.css';

function Buttonpanel(props) {
    function handleclick(value){
        props.onData(value);
    }
    return (
        <div class="buttons">
            <button onClick={()=>{handleclick('all')}} className="bttn">All</button>
            <button onClick={()=>{handleclick('lap')}} className="bttn">Laptops</button>
            <button onClick={()=>{handleclick('mob')}} className="bttn">Mobiles</button>
            <button onClick={()=>{handleclick('hp')}} className="bttn">Headphones</button>
        </div>
    );
}

export default Buttonpanel;
