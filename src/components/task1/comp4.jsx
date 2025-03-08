import React, { useState } from "react";
import inputStore from "./store";
import { observer } from "mobx-react";

const Component4 = observer(({checkData}) => {
    const [isEdit,setIsedit] =  useState(false)
    const [newText,setNewText] = useState(inputStore.text4)
    const HandleUpdate=(text)=>{
      console.log(text)
        inputStore.setText(newText)
        setIsedit(false)
    }
    return (
       <div className="divv">
        <h1>Component 4:</h1>
        {
        isEdit ? 
        (<div>
        <input type="text" value={newText} onChange={(e)=>setNewText(e.target.value)}/>
        <button onClick={HandleUpdate("Hi")}>Save</button>
        </div>)
        :
        ( 
            
                inputStore.text && checkData.isChecked4 ?
                <div style={{display:"flex",gap:"20px"}}>
                    <h2>{inputStore.text}</h2>
                    <button onClick={()=>setIsedit(true)}>Edit</button>
                </div>:
                <h2></h2>
            

        )
        
    }
      
      </div>
    );
  });
  export default Component4