import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import reducer from "./reducers"
import { loadState, saveState } from "./localStorage"

const persistedState = loadState()

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware()),
)
store.subscribe(() => {
  saveState(store.getState())
})

export default store
