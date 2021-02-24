import React, {useContext, Fragment} from "react";
import Navbar from "../components/navbar/navbar";
import PostsList from "../components/postslist/postsList";

import {context} from "../App";
import {getDayOfMonth} from "../utils/utils";
import "../App.scss"


function LandingPage() {
//consume state
const stateContext = useContext(context)
const {state, dispatch} = stateContext;
console.log("state props is", state)
const postDisplay = state && state.data && state.data.map((item, index) => {
    const postedDate = item && getDayOfMonth(item.data.created)
return(
    <div className="col s12 m7" key={index}>
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content"> 
        <div className="author-time-container" style={{display:"flex"}}>
            <p style={{marginRight:"5px"}}>{`Posted by u/${item.data.author}`}</p>
            <p>{typeof postedDate !== 'string' ? `${postedDate} days ago` : postedDate}</p>
        </div>
        <div className="title">{item.data.title}</div>
        <div className="selftext">{item.data.selftext}</div>
        </div>
      </div>
    </div>
  </div>
)
})


    return (
        <Fragment>
            <PageTitle />
            <div className="App">
            <Navbar dispatch={dispatch}/>
            <PostsList>
                {postDisplay}
            </PostsList>
            </div>
        </Fragment>
    )
}

export const PageTitle = () => {
    return (
        <header style={{background:"white", padding:"20px 0", marginBottom:"20px"}}>
            <h4 style={{textAlign:"center"}}>/r/ReactJS - The Front Page of React</h4>
        </header>
    )
}
const fetchPostType = async (categoryType) => {
    const proxy  = "https://cors-anywhere.herokuapp.com/"
    const fullUrl = `${proxy}https://www.reddit.com/r/reactjs/${categoryType}.json`
const res = await fetch(`${fullUrl}`)
const data = await res.json();
console.log("post data", data)
}
export default LandingPage


