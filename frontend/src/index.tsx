import { applyMiddleware, configureStore, createStore, Store } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { EpisodeAction, EpisodeState } from "./store/action/Type";
import reducer from "./store/Reducer";
import ReactDom from "react-dom"
import ReactDOM from "react-dom";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import store from "./store/Store"


const rootElement = document.getElementById("root")


ReactDOM.render(
    <Provider store = {store}>
        <App></App>
    </Provider>,
    rootElement
)

reportWebVitals()