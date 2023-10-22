// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import App from './App.tsx'
// // import './index.css'

// // ReactDOM.createRoot(document.getElementById('root')!).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// // )

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const root = createRoot(
//   document.body.appendChild(document.createElement("div"))
// );
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

const body = document.querySelector("body");
if (body) {
  const button = document.createElement("button");
  button.innerText = "アラートを表示";
  button.addEventListener("click", () => {
    alert("おめでとうございます！");
  });
  body.append(button);
}

export {};
