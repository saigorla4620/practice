import React, { useState } from "react";

function Example(){

    function handleColor(e){
          document.documentElement.style.setProperty("--bg-color", e.target.value);
    }
    return (
        <>
        <div className="ColorExample">
        <input type="color" onChange={handleColor} style={{width:"50px"}} />
        <h2>Pick color then See magic</h2>
        </div>
        </>
    )
    
}
export default Example