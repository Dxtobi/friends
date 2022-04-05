
import {useEffect, useState, useRef} from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
//import {AiOutlineSearch} from "react-icons/ai"
import BackBtn from "../../components/BackBtn";
//import ProfileImg from "../Home/Hcomponent/ProfileImg";
import io from "socket.io-client"
import { connect } from "react-redux";
import { conversation, sendMessages, getMessages } from "../../actions/messages";
//import { socket } from "../../utils/secketGlobal";


function MessageChat(props) {
    const msgDiv = useRef(null);
    const [message, setMessage]=useState("")
    const [socket, setSocket]=useState(null)
    const [messages, setMessages] = useState([
        { date:"11:11",
            message:`no messages..`,
            img:"image/uimg.jpg",
            me:false
        },])
    const params = useParams()
    const uid = params.id
    const nav = useNavigate()
    const myid = props.auth.user._id
    if(uid === myid){
        nav("/feeds")
    }
    useEffect(() => {
        props.conversation({myId:myid, yourId:uid})
      }, []);

      useEffect(() => {
       setMessages(props.auth.messages)
      //console.log(props.auth.messages[0])
      }, [props.auth.messages]);

    useEffect(() => {
        const newSocket = io(`https://friendsapp-api.herokuapp.com`);
        setSocket(newSocket);
       // return () => newSocket.close();
      }, [setSocket]);


      //use effect for socket
      useEffect(() => {
       if(socket){
           
           socket.emit("newConnect", myid)
            

           //props.auth.conversation._id

            socket.emit('subscribe', props.auth.conversation._id, uid);

 
            socket.on('msg', (e) => {
                setMessages([...messages, e])
            })

          //  socket.on('messages', (e) => {
            //    console.log(e)
           // })
            
       }
      }, [socket]);


      //send message
    
      const sendMessage=()=>{
         
        props.sendMessages({text:message, senderId:myid, conversationId:props.auth.conversation._id },props.auth.conversation._id);

        if(socket){


            //casting default message template like db kind

          const msg = { conversationId: props.auth.conversation._id,
            createdAt: "2022-04-01T02:25:01.510Z",
            recieverId: uid,
            senderId: myid,
            text: message,
            
          
            _id: "6246627df020386241dbd84d",
           }
             socket.emit("sendMessage", msg, props.auth.conversation._id,)
        }
        setMessage("")
      }

//since socket io decided to be a b*** we using time out 😔 so we using plan F

 useEffect(()=>{
    msgDiv.current.scrollIntoView()
 },[messages])
 
    //

   
    return (
        <div className="message-feed-container bottom-margin">
          <BackBtn/>
            
            <div className="row-messages-search">
                <div className="clear-div"><button className="clear-msg-btn">Clear</button></div>
                <div  ref={msgDiv} className="message-div">
                   
                    <div className="messages-row-holder">
                        {
                            messages.map((e, i)=>{
                                return (<div className={`chat-box-${e.senderId===myid?true:false}`} key={i}>
                               {!e.senderId===myid&& <div className="user-profile" src={"image/user.jpg"} alt="fr"/> }
                                            <div className={`message-text-time-${e.senderId===myid?true:false}`}>
                                                <div className={`text-div-${e.senderId===myid?true:false}`}>{e.text}</div>
                                                <div className={`message-date-${e.senderId===myid?true:false}`}>{dateSpliter(e.createdAt)}</div>
                                            </div>
                                    </div>)
                            })
                        }
                    </div>
               
                </div>
                <div className="message-input">
                    <input onChange={(e)=>{setMessage(e.target.value)}} value={message} placeholder="Send message"  type="text" className="enter-message"/>
                    <button onClick={sendMessage}className="send-message">Send</button>
                </div>
            </div>
        </div>
    );
  }


  
  //export default MessageChat;
  
  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors,
    posts: state.posts
  });

  export default connect( mapStateToProps, {conversation, sendMessages, } )( MessageChat );
 

  
  
  const dateSpliter=(date)=>{
    const d = new Date(date);
    let h =  d.getHours()
    const m = String(d.getMinutes()).padStart(2, '0')

    console.log(m)
    

    const fulldate = `${h}:${m}`
    return fulldate
 }