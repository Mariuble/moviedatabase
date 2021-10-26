import { applyMiddleware, createStore, Store } from "redux"
import { EpisodeAction, EpisodeState } from "./action/Type"
import reducer from "./Reducer"
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


type DispatchType = (args: EpisodeAction) => EpisodeAction

const store: Store<EpisodeState, EpisodeAction> & {
    dispatch: DispatchType
} = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
