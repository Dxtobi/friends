//import {useState} from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { AiFillHome, AiFillMessage, AiFillBell, AiOutlineUnorderedList, AiFillPlusCircle, AiOutlineUser} from "react-icons/ai";
import { connect } from 'react-redux';
import { useEffect } from "react";
import { cheackAut } from "../actions/auth";
import { getConversations } from "../actions/messages";
import Loading from "./Loadding";

function Footer({ auth, cheackAut, getConversations }) {

  useEffect(()=>{
   // getConversations()
},[])
    const nav = useNavigate()
  useEffect(() => {
      cheackAut()
      auth.isAuthenticated?nav("/feeds"):nav("/");
       // console.log("auth :", auth.user, "auth auth", auth.isAuthenticated)
      //  nav("/feeds")
        
    },[auth.isAuthenticated])
    const loc = useLocation()
    const cheeckLoc = (p) => {
        if (loc.pathname === p) {
            return true
        }
        return false
    }
  
   if(auth.loading){
     return  <Loading/>
   }
    if(auth.isAuthenticated){
    return (
        <div className="footer_nave">
            <Link to="/feeds"><AiFillHome  className={`icons-footer-${cheeckLoc("/feeds")&&"active"}`}  /></Link>
            <Link to="/message"><AiFillMessage className={`icons-footer-${cheeckLoc("/message")&&"active"}`}  /></Link>
            <Link to="/add"><AiFillPlusCircle  className={`icons-footer-${cheeckLoc("/add")&&"active"}`} /></Link>
           { <Link to="/users"><AiOutlineUser className={`icons-footer-${cheeckLoc("/notification")&&"active"}`}  /></Link>}
            <Link to="/suggestion"><AiOutlineUnorderedList className={`icons-footer-${cheeckLoc("/profile")&&"active"}`} /></Link>
        </div>
        );
    }
    return <div className="not-auth"></div>
  }

  
  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors,

  });

  export default connect( mapStateToProps, {cheackAut, getConversations} )( Footer );