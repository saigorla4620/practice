import React from "react";
function Button({type,handleSearch}){
    return (
        <>
        
         <button onClick={handleSearch} type={type}>{type}</button>
        </>
    )
}
export default Button;