import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/index.css";
import Store from "./store/store";
import { Provider } from "mobx-react";

// const store = new Store()
// console.log(store)

ReactDOM.render(
  <Provider formStore={new Store()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
