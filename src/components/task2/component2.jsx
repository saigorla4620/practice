import React from "react";
import Button from "./button";
function Component2(){
    return (
        <>
        <div>
            <h1>Register</h1>
            <input type="text"  placeholder="username"/><br />
            <input type="eamil" placeholder="Email"/><br />
            <input type="number" placeholder="Phone" /><br />
            <input type="passeord"  placeholder="Password"/><br />
            <input type="cnfpassword" placeholder="confirm Password"/><br />
            <Button type="SignUp"/>
        </div>
        </>
    )
}
export default Component2