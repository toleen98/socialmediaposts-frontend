import {
    SHOW_SIDEBAR
  } from "../actions/types";
  
  const initialState = {
    show: true,
  };  

  export default function(state = initialState, action) {
      console.log(state)
    switch (action.type) {
      case SHOW_SIDEBAR:
        return {
          ...state,
          show: action.payload,
          
        };
      
      default:
        return state;
    }
}