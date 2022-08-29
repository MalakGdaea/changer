import React,{useState} from 'react'
import Sale from './Sale'
import Buy from './Buy'


function Change(){

const [choice,setChoice] = useState(false)


function SetSell()
{
    setChoice(true)
}
function SetBuy()
{
    setChoice(false)
}


    return (
        <div>
            <button onClick={SetBuy}>Buy</button>
            <button onClick={SetSell}>Sale</button>
            {choice ? <Sale/> : <Buy />}
        </div>
    );
}

export default Change