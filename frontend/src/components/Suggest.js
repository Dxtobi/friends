// import {useState} from "react";
// import { Link, } from "react-router-dom";
import {AiOutlineFileSearch} from "react-icons/ai"

function Suggest(props) {
    console.log(props)
    return (
        <div className="suggestions">            
            <div className="sugg-title">{props.title_1} {props.title_2}</div>
            <div className="sugg-icon"><AiOutlineFileSearch size={20}/></div>
        </div>
       
        );
    }
   
  

  export default Suggest;