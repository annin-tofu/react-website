import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";

// ###  serviceWorker.js and replaced it with reportWebVitals ?
// https://stackoverflow.com/questions/64850206/serviceworker-missing-from-reactapp
// A. Yes, this is an update after CRAv4 and React 17. Create-React-App’s (CRA) boilerplate now comes set up to record those measurements out of the box (In an update, they switched from Service worker to the Workbox InjectManifest plugin and moved the PWA templates into their own repository. )
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
