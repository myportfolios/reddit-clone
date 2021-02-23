import React, {useState, useEffect}from "react";
import LandingPage from "./pages/LandingPage";

import "./App.scss";

export const context = React.createContext();
const Provider = context.Provider;

function App() {
  const [state, setState] = useState(null) 
  useEffect(() => {
    const fetchData  = async () => {
      const response = await fetch("https://www.reddit.com/r/reactjs.json");
      const data = await response.json();
      const post = data ?. data.children
      setState(post)
    }
    fetchData();
  },[])
  return (
    <Provider value={{state}}>
     <LandingPage />
    </Provider>
  );
}

export default App;
