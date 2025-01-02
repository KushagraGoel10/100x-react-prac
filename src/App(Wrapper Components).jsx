
import React, {useState} from 'react';

function App(){

    return <div>
    <CardWrapper>
        sup
    </CardWrapper>
    </div>
}


function TextComponent (){
    return <div>
       sup bitch !
    </div>
}

function TextComponent2 (){
    return <div>
       sup bitcaasdasdash !
    </div>
}

function CardWrapper  ({children})  {

    return <div style = {{ border: "2px solid black", padding: 30, marginTop: "20px", width: "300"}}>
        {children}
    </div>
}


export default App;