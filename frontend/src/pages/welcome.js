
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";


function Welcom(props) {
    
 
    return (
        <div className="welcome-feed-container bottom-margin">
        
            <div className="we-img">
                <img src="friends.png" className="image-welcom"/>
            </div>
            <Link to="/signup" className="welcome-btn">GET STARTED <AiOutlineArrowRight size={30}/></Link>
        </div>
    );
  }




  export default Welcom 
 