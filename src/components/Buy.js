import React from 'react'
import { useState,useEffect} from "react"

function Buy() {
    const [value, setValue] = useState(1);
    const [select, SetSelect] = useState('usd');
    const [result, SetResult] = useState();
    function IlsToCurrency() {
        // get the json file as an object 
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ils.json',
            // convert the object to json - res=>res.json()
            { method: 'GET' }).then(res => res.json().then(data => {
                // ils contain the ils field from the json
                const ils = data.ils;
                for (var k in ils) {
                    // check if the coin type is what we want
                    if (select === k) {
                        //onvert the value to the chosen currency
                        SetResult(value * ils[k] * 1.05);
                    }
                }
            }));
    }
    //  every time we change the value or the currency[value,select], the IlsToCurrency function renders again.
    //  the first argument for the use effect is a function , the second argument is optional [] a dependency array
    //  ()=>{IlsToCurrency()} or IlsToCurrency is the same. () => {} is a way of writing an anonymous function
    useEffect(() => { IlsToCurrency() }, [value, select])
    return (
        <div>
            <h1>Buy</h1>
            <form>
                <input type='number' placeholder='chaneValue' value={value} onChange={val => setValue(val.target.value)}></input>
                <br></br>
                <select onChange={val => SetSelect(val.target.value)}>
                    <option>usd</option>
                    <option>eur</option>
                </select>
                <br></br>
                <h3>{result}</h3>
            </form>
        </div>
    )
};

export default Buy