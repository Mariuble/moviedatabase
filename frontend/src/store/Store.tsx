import { applyMiddleware, configureStore, createStore, Store } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Dispatch } from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "../App";
import { EpisodeAction, EpisodeState } from "./action/Type";
import reducer from "./Reducer";

const store: Store<EpisodeState, EpisodeAction> & {
    dispatch: Dispatch//Type
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root")
render(
    <Provider store = {store}>
        <App></App>
    </Provider>
    rootElement
)