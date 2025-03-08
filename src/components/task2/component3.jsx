import React, { useState } from "react";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Button from "./button";
function Component3(){
    const [Data,SetData] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((result)=>SetData(result))
    },[Data])
    console.log(Data)
    function handleSearch(e) {
        const filtered = Data.filter((item) =>
            item.title.toLowerCase().includes(e.toLowerCase())
        );
        setSearchValue(e)
        setFilteredProducts(filtered);
    }
    return (
        <>
        <div>
            <h1>Users Profile</h1>
            <input type="text"  placeholder="Search here...." 
            value={searchValue} 
            onChange={(e)=>handleSearch(e.target.value)}/>
             <div className="main">
                {
                  (filteredProducts.length > 0  ? filteredProducts: Data).map((item)=>(
                    <div className="item" style={{width:"200px"}}>
                        <img src={item.image} alt=""   height="300px"/>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                    </div>
                ))
                }
             </div>
        </div>
        </>
    )
}
export default Component3