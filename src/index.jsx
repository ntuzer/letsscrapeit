import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "react-hook-theme";


function logAnalytics(){
  // console.log("logAnalytics");
  axios({
    method: "GET",
    url: "http://localhost:10000/lsi/analytics",
  })
}

logAnalytics();
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider
      options={{
        theme: "dark",
        save: true,
      }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
