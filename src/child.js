import React,{useContext} from 'react';
import CounterContext from './CounterContext';

const Child=()=>{

  let countervalue = useContext(CounterContext)

 //console.log(countervalue);
    
  return (

        <div>
            <h1>This is using Counter Context</h1>
            <h2>Counter Value: {countervalue[0]}</h2>
            <button 
            onClick={
                ()=>
                {
                countervalue[1](++countervalue[0]);
                }
            }>
                INCREMENT
            </button>

            
        </div>
    )
}


export default Child;