import React,{useState} from 'react';
import Child from './child';
import CounterContext from './CounterContext';
import Parent from './Parent';


function App() {

 // let [Count,SetCount]= useState(30);
 let CountState = useState(0);
 
 //array[0]->Value,Array[1]->key for updating value
  return (
    
  <CounterContext.Provider value={CountState}>
  <div>
   <Parent/>
  </div>
  </CounterContext.Provider>


      
    
  );
}

export default App;
