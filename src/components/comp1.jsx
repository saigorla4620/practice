import React,{Component, useEffect, useState} from "react";

function useColorChange({value}){
    const [bgcolor,setBgcolor] = useState('')
    console.log("Color",bgcolor)
    useEffect(()=>{
        setBgcolor(value)
    },[value])
    return {bgcolor}
}
export default useColorChange;