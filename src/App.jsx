import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
// const time=new Date().toLocaleTimeString();
const App = () => {
   let  time=new Date().toLocaleTimeString();
    const[ctime,setCtime]= useState(time);
   const Updatet=()=>{
    time=new Date().toLocaleTimeString();
    setCtime(time);
   };
setInterval(Updatet,1000);
    return(
<>
<h1>
   {ctime}
</h1>


</>

    );
};
export default App;