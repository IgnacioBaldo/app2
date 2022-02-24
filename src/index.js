import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC54ffcPMB_s20CnioHVhApbAJw2btR_gY",
  authDomain: "app1-9a82b.firebaseapp.com",
  projectId: "app1-9a82b",
  storageBucket: "app1-9a82b.appspot.com",
  messagingSenderId: "316974745415",
  appId: "1:316974745415:web:aacf779557a637eca9ae62"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
