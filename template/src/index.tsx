import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");

root && ReactDOM.render(<App />, root);

// Enable hot-reload

if (module.hot) {
  module.hot.accept("./App", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const NextApp = require("./App").default;
    root && ReactDOM.render(<NextApp />, root);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
