
import React from "react";
function Button({type,style,action}){
    return (
        <>
        <button style={{backgroundColor:style.bgcolor,
            border:style.border,
            width:style.width,
            padding:style.padding,
            color:style.color

        }}
        onClick={action}>{type}</button>
        </>
    )
}
export default Button