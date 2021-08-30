import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import "./App.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
