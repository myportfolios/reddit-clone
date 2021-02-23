import React, {useContext, Fragment} from "react";
import Navbar from "../components/navbar/navbar";
import PostsList from "../components/postslist/postsList";

import {context} from "../App";
import {getDayOfMonth} from "../utils/utils";
import "../App.scss"


function LandingPage() {
//consume state
const {state} = useContext(context)
console.log("state props is", state)
const postDisplay = state && state.map((item, index) => {
    const postedDate = item && getDayOfMonth(item.data.created)
    console.log("postedDate",postedDate)
return(
    <div class="col s12 m7" key={index}>
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content"> 
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
            <Navbar/ >
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
export default LandingPage


