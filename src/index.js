import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/app"
import 'tachyons'

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<div><App /></div>, document.getElementById("root"));

serviceWorker.unregister();
