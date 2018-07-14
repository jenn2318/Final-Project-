import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import  {makeMainRoutes} from "./routes";

const allroutes = makeMainRoutes();

ReactDOM.render(allroutes , document.getElementById("root"));
