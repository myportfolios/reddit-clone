import React, {useState, useEffect} from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css'

function Navbar(props) {
    const [postType, setPostType] = useState("");
    const dispatch = props.dispatch;
    //make calls to fetch post based on category
   useEffect(() => {
       try{
           const type = getActionType(postType)
            const url = `https://www.reddit.com/r/reactjs/${postType}.json`;
            const fetchPostByType = async () => {
                  const res = await fetch(`${url}`);
                  const data = await res.json()
                  console.log("data is", data)
                  dispatch({type, payload:data.data.children}) //update global store with new data
            }
            fetchPostByType();
       }
       catch{

       }

   }, [postType])

   //event handler that takes in category selection
   const handlePostSelection = (e) => {
    let selectedType = e.target.innerHTML;
    let post = selectedType.toLowerCase()
    setPostType(post)
   }
    return (
        <nav>
        <div className="nav-wrapper">
          <ul className="right hide-on-med-and-down">
            <li><a className="waves-effect waves-light btn" onClick={(e) => {handlePostSelection(e)}}>Hot</a></li>
            <li><a className="waves-effect waves-light btn" onClick={(e) => {handlePostSelection(e)}}>New</a></li>
            <li><a className="waves-effect waves-light btn" onClick={(e) => {handlePostSelection(e)}}>Top</a></li>
            <li><a className="waves-effect waves-light btn" onClick={(e) => {handlePostSelection(e)}}>Rising</a></li>
          </ul>
        </div>
      </nav>
    )
}

//function to determine ACTION_TYPE to dispatch based on user selection
const getActionType = (str = "") => {
    let type;
switch(str){
case "new":
     type = "SORT_BY_NEW";
     break;
     case "hot":
         type = "SORT_BY_HOT";
         break;
         case "top":
             type = "SORT_BY_TOP";
             break;
             case "rising":
                 type = "SORT_BY_RISING";
                 break;
                 default:
                     type = ""
}
return type
}

export default Navbar
