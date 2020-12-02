import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import store, { rootPersistor } from "./app/store";

const render = () => {
  const App = require("./app/App").default;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={rootPersistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    $("#root")[0]
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/App", render);
}
