import {useState} from "react";
import { Link } from "react-router-dom";
import ProfileImgPost from "../pages/Home/Hcomponent/ProfileImgPost";

function Notifcard(props) {
    console.log(props)
    return (
        <div className="notif-card">
            <div className="image">
                <ProfileImgPost/>
            </div>
            <div className="notif-title">{props.name} </div>
            <Link className="chat-user" to={`/chat/${props.id}`}>Chat</Link>
        </div>
       
        );
    }
   
  

  export default Notifcard;