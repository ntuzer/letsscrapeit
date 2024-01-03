import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "react-hook-theme";


function logAnalytics(){
  // console.log("logAnalytics");
  const window_size = window.screen.width + 'x' + window.screen.height;

  axios({
    method: "POST",
    url: "https://render-server-m6tq.onrender.com/lsi/analytics",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    data: {
      referer: ref,
      window_size
    }
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
