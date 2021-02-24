import React, {useState, useEffect, useReducer}from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";

import "./App.scss";

export const context = React.createContext();
const Provider = context.Provider;

/****Initial global state****/
const initialState = {
  data:[],
  fetching:true,
  error:""
};

/****reducer function****/
const reducer = (state, action) => {
switch(action.type){
  case "GET_INITIAL_DATA":
    return{
      ...state,
      data:action.payload,
      fetching:false
    }
case "SORT_BY_NEW":
  console.log("app",state)
  const newPost = action.payload
  return {
    ...state,
    data: newPost,
    fetching:false
  }
  case "SORT_BY_HOT":
    const hotPost = action.payload
    return{
      ...state,
      data:hotPost,
      fetching:false
    }
    case "SORT_BY_TOP":
      let topPost = action.payload
    return{
      ...state,
      data:topPost,
      fetching:false
    }
    case "SORT_BY_RISING":
      let risingPost = action.payload
    return{
      ...state,
      data:risingPost,
      fetching:false
    }
    case "FETCH_ERROR":
    return{
      ...state,
      data:[],
      fetching:false,
      error:"Error Fetching Data"
    }
    default:
      return state
}
}
function App() {
  //get state on initial load
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    try{
      const fetchData  = async () => {
        const response = await fetch("https://www.reddit.com/r/reactjs.json");
        const data = await response.json();
        const post = data ?. data.children
        dispatch({type:"GET_INITIAL_DATA", payload:post}) //update initial state when page loads
      }
      fetchData();
    }
    catch{
      dispatch({type:"FETCH_ERROR"})
    }
  },[])
  return (
    
    <Provider value={{state, dispatch}}>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/post-page"  component={PostPage}></Route>
        <Route path="/user-profile"  component={UserPage}></Route>
     </Switch>
     </BrowserRouter>
    </Provider>
   
  );
}


export default App;
