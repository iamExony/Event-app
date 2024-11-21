import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NavigateContextProvider } from "./context/NavigateContext";
import { Provider } from "react-redux";
import store from "./utils/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigateContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NavigateContextProvider>
  </React.StrictMode>
);
