import React from "react";
import Button from "./button";
function Component1(){

    return (
        <>
        
        
        <div style={{marginLeft:"50%",padding:"10px"}}>
        <h1>Login</h1>
            <input type="text" placeholder="Email or username" /><br />
            <input type="password" placeholder="password" /><br />
            <Button type="login"/>
        </div>
        
        </>
    )
}
export default Component1