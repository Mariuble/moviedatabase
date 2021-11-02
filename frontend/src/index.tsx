import {
  applyMiddleware,
  configureStore,
  createStore,
  Store,
} from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import { EpisodeAction, EpisodeState } from './store/action/Type'
import reducer from './store/Reducer'
import ReactDom from 'react-dom'
import ReactDOM from 'react-dom'
import React from 'react'
import reportWebVitals from './reportWebVitals'
import store from './store/Store'
import 'bootstrap/dist/css/bootstrap.min.css'

const rootElement = document.getElementById('root')

let filter: string = 'Title'

interface Action {
  type: string
  payload: string
}

function filterReducer(state = filter, action: Action) {
  filter = action.payload
  return state
}

export function setFilter(payload: string) {
  return { type: 'SET_FILTER', payload }
}

export const filterStore = createStore(filterReducer)

ReactDOM.render(
  <Provider store={filterStore}>
    <App></App>
  </Provider>,
  rootElement
)

reportWebVitals()
