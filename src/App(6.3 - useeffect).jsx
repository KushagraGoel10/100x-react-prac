import React from "react";
import { useState, useEffect } from "react";

function App(){

    const [bankData, setBankData] = useState({});
    const [exchangeData, setExchangeData] = useState({ });

    useEffect(function (){
        setTimeout(()=>{
            setBankData({income: 300});
        }, 3000);
    }, []); 

    useEffect(() =>{
        setTimeout(() =>{
            setExchangeData({ returns : 300});
        }, 1000);
    }, []);

    const incomeTax = (bankData.income + exchangeData.returns)* 0.3;

    
    useEffect ( () => {
        setTimeout ( () =>{
            setBankData ({ income : 3090})
        }, 4000);
    }, []);

    useEffect ( () => {
        setTimeout ( ( ) =>{
            setBankData ( { income : 6000})
        }, 9000);
    }, []);

    return (
        <div>
            Sup, Your income Tax returns are {incomeTax}
                    </div>
    )
}


export default App;