
import {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { getUsers } from "../../actions/auth";
import BackBtn from "../../components/BackBtn"
import Notifcard from "../../components/Notifcard";
import { connect } from "react-redux";


function Users(props) {


    const [users, setUsers] = useState([])
    const [skip, setSkip] = useState(0)

    const loadMore = ()=>{
        props.getUsers(skip+10)
        setSkip(skip+10)
       }

    useEffect(()=>{
        props.getUsers(skip)
    },[])
    useEffect(()=>{
       setUsers(props.auth.users)
    },[props.auth.users])
    
    return (
        <div className="message-feed-container bottom-margin">
          <BackBtn/>
            <div className="row-users-search">
                <div className="row-users-search">
                    <div className="message-header bold"><div>Notifications</div> <button onClick={loadMore} className="more-users">More</button></div>
                    <div className="users-row-holder">
                        {
                            users.map((e, i) => {
                            console.log(e)

                                return (
                                    <Notifcard key={i} name={e.username} id={e._id} />
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
  }

  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors,
    posts: state.posts
  });

  export default connect( mapStateToProps, {getUsers} )( Users );