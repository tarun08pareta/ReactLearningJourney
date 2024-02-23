import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
// import Chai from './chai.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>hello tarun !</h1>
//     </div>
//   )
// }

const AnotherElement = (
  <a href="https://google.com" target="_blank">
   
    visit google
  </a>
);

const ReactElement = React.createElement(
  'a',
  {href:"https://google.com" ,target:"_blank"},
  'click Me to Visit Google'
)
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
   
    // AnotherElement
    // ReactElement
    <App/>
  // </React.StrictMode>
);
