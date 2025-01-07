import React, { useMemo } from 'react'
import { useState, useEffect } from 'react';

//UseState ( ) = no argument
//useState ( [] ) = empty array
//useState ( {} ) = empty object


function App () {

    const[exchangeData1, setExchangeData1] = useState({});
    const[exchangeData2, setExchangeData2] = useState({});
    const[bankData, setBankData] = useState({});

    useEffect ( () =>{
        setExchangeData1({
            returns: 100
        });
    }, []);

    useEffect ( () =>{
        setExchangeData2({
            returns: 100
        });
    }, []);

    useEffect( () =>{
        setTimeout (() =>{
            setBankData({
                income: 100
            });
        }, 5000)
    }, []);

    useEffect ( () =>{
        setBankData({
            income : 500
        });
    }, []);

    // so here cryptoExchange is calculated but there is no change in the data. 
    // we can use UseMemo here to save that time/ more optimized and prevent our app for more re-renders.
    // UseMemo lets you save some computation between re-renders.
    // const cryptoExchange = exchangeData1.returns + exchangeData2.returns;

    const cryptoExchange = useMemo (() =>{
        console.log(" This was before")
        return exchangeData1.returns + exchangeData2.returns;
    }, [exchangeData1, exchangeData2]);

    const incomeTax = ( cryptoExchange + bankData.income)* 0.3;

    const cryptoExchange1 = useMemo (() =>{
        console.log("after")
        return exchangeData2.returns + exchangeData1.returns;
    }, [exchangeData1, exchangeData2]);

    const GST = ( cryptoExchange1 + bankData.income )* 0.18;

    
    //useCallback 
    // 1. It is not about minimizing the amount of code that is run
    // 2. it is about not rendering a child component, if the function hasn't / doesn't need to change across renders. 

  return (
    <>
    <div>So your income tax on the crypto Exchange is {incomeTax}</div>
    <div>So normal tax is {GST} </div>
    </>
  )
}

export default App;