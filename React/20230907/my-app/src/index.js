import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ListRender from "./ListRender.js";
import ReactFragment from "./ReactFragment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ReactFragment />
    </React.StrictMode>
);
