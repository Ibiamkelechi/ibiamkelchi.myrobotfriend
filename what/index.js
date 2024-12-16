import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App' 
import 'tachyons';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
);

//if you want to measuring performance in your app, pass a function
 //to log results (for example: reportwebvitals(console.log))
//or send an analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportwebvitals();
  