import { combineReducers } from "redux"
import weatherReducer from "./weatherReducer"

const rootReducer = combineReducers({
  weatherReducer: weatherReducer
})

export default rootReducer;