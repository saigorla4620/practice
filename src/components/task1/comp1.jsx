import React, { use, useState } from "react";
import inputStore from "./store";
import { observer, Observer } from "mobx-react";
import Compenent2 from './comp2'
import Compenent3 from './comp3'
import Compenent4 from './comp4'

const Compenent1 = observer(() => { 
    const [value, setValue] = useState("");
    const [checkData, setCheckData] = useState({
        isChecked1: false,
        isChecked2: false,
        isChecked3: false,
        isChecked4: false
    });

    function HandleInput(e) {
        setValue(e.target.value);
    }

    function HandleChange(e) {
        let tempArray = inputStore.cardid;

        if (e.target.checked) {
            setCheckData({ ...checkData, [e.target.name]: e.target.checked });
            inputStore.setText(value); // This should trigger a re-render
            tempArray.push(Number(e.target.id));
        } else {
            setCheckData({ ...checkData, [e.target.name]: e.target.checked });
            let index = tempArray.findIndex(data => data === Number(e.target.id));
            if (index !== -1) {
                tempArray.splice(index, 1);
            }
        }

        inputStore.setCardID(tempArray);
        console.log(tempArray);
    }

    return (
        <>
            <div className="divv">
                <h1>Component1:</h1>
                <div>
                    <input type="text" className="input" value={value} onChange={HandleInput} />
                    <div className="checkbox">
                        <input type="checkbox" name="isChecked1" id={1} checked={checkData.isChecked1} onChange={HandleChange} />1
                        <input type="checkbox" name="isChecked2" id={2} checked={checkData.isChecked2} onChange={HandleChange} />2
                        <input type="checkbox" name="isChecked3" id={3} checked={checkData.isChecked3} onChange={HandleChange} />3
                        <input type="checkbox" name="isChecked4" id={4} checked={checkData.isChecked4} onChange={HandleChange} />4
                    </div>
                </div>
                {inputStore.text && checkData.isChecked1 ? (
                    <div style={{ display: "flex", gap: "20px" }}>
                        <h2>{inputStore.text}</h2>
                        <button>Edit</button>
                    </div>
                ) : (
                    <h2></h2>
                )}
            </div>
            <Compenent2 checkData={checkData} />
            <Compenent3 checkData={checkData} />
            <Compenent4 checkData={checkData} />
        </>
    );
});

export default Compenent1