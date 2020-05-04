import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
/** Bootstrap */
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();