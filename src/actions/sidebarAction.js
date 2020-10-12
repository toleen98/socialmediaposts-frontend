import {
    SHOW_SIDEBAR
  } from "./types";


  export const showSidebarFunc = (boolean) =>  {
    return {
        type: SHOW_SIDEBAR,
        payload: boolean
      };
  };
  
  
  export const setSidebar = sidebarOn => {
    
  }
  // Set logged in user
  export const setCurrentUser = decoded => {
    
  };
  
 
  
  