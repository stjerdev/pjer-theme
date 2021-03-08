import { combineReducers } from "redux"

import rutaReducer from "./rutasReducer"

export default combineReducers({
  storeRuta: rutaReducer,
})
