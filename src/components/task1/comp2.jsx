import React from "react";
import inputStore from "./store";
import { observer } from "mobx-react";
const Component2 = observer(({checkData}) => {
  
    return (
      <div className="divv">
        <h1>Component 2:</h1>
        {
            inputStore.text && checkData.isChecked2 ?
            <div style={{display:"flex",gap:"20px"}}>
                <h2>{ inputStore.text}</h2>
                <button>Edit</button>
            </div>:
            <h2></h2>
        }
      </div>
    );
  });
  export default Component2