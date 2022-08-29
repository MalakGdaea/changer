import React from 'react';
import { useState,useEffect} from "react"


function Sale(){
     const [value,setValue]=useState(1);
     const [select,SetSelect]=useState('usd');
     const [result,SetResult]=useState();
    function CurrencyToIls(){
        // get the json file as an object 
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ils.json',
        // convert the object to json - res=>res.json()
        {method:'GET'}).then(res=>res.json().then(data=>{
            // ils contain the ils field from the json
            const ils=data.ils;
            for(var k in ils) {
                // check if the coin type is what we want
                if(select===k){
                    //onvert the value to the chosen currency
                    SetResult(value / ils[k] * 0.99);
                }
                   
            }
        
        }));
    }
    //  every time we change the value or the currency[value,select], the CurrencyToIls function renders again.
    //  the first argument for the use effect is a function , the second argument is optional [] a dependency array
    //  ()=>{CurrencyToIls()} or CurrencyToIls is the same. () => {} is a way of writing an anonymous function
    useEffect(()=>{CurrencyToIls()},[value,select])
    return ( 
       <div>
          <h1>Sale</h1>
             <form>
                <select onChange={val=>SetSelect(val.target.value)} >
                    <option>usd</option>
                    <option>eur</option>
                </select>
                <br></br>
                <input type='number' placeholder='chaneValue' value={value} onChange={val=>setValue(val.target.value)}></input>
                <br></br>
                <h3>{result}</h3>
             </form>
       </div>
       
    )
 };

 export default Sale