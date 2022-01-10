import * as t from "../types";

const weatherReducer = (state = {
    climateData: {},
    error: ""
}, action) => {
  switch(action.type){
    case t.SET_NAME:
      return { 
        ...state,
        name: action.payload
      };
    case t.SET_CLIMATE_STATUS:
      return {
        ...state,
        climateData: action.payload
      };
    case t.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {...state};
    }
}

export default weatherReducer;