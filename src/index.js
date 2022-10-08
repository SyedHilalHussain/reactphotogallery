import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Logo from './dept_1.jpg';
import Logo1 from './dept_2.jpg';
import Logo2 from './dept_3.jpg';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();
// const[ctime,setCtime]= useState(time);
// if (setCtime<ctime) {
  
  
// }
root.render(
  <>
{/*   
  <h1 className='head'> my name is syedhilalhussain</h1>
<div className='divimg'>
  <img src={Logo} />
  <img src={Logo1} />
  <img src={Logo2} /> */}
  <App/>  
 
{/* </div> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
