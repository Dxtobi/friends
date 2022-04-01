import { useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import CommonBtn from "./Acomponents/CommonBtn";
import CommonInput from "./Acomponents/LoginInputes";
import FeedbackMessage from "./Acomponents/FeedbackMessage.js";
import { GoogleLogin } from "react-google-login";


function Register() {

    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const location = '/signin'



    const apiid = "842073432195-q5upfuo71c8140rbv8rp3pn68q6tgtp9.apps.googleusercontent.com"
    

    useEffect(() => {
    if (submitted){
        return navigate("/signin");
    }
    },[submitted]);
    const handleUname= (e) =>{
        setUsername(e)
        setSubmitted(false)
    }
    const handlePhone= (e) =>{
        setPhone(e)
        setSubmitted(false)
    }
    const handleEmail= (e) =>{
        setEmail(e)
        setSubmitted(false)
    }
    const handlePassword= (e) =>{
        setPassword(e)
        setSubmitted(false)
    }

    
    const onSuccess = (request)=>{
        console.log(request.profileObj)
    }

    const onFailure = (request)=>{
        console.log(request)
    }
    const errorMessage = (e) =>{
        return (
            <div>
                {error ? <FeedbackMessage cname="error" message="Take care of all empty fields"/> : ""}
            </div>
        )
    }
    const successMessage = (e) =>{
        return (
            <div>
                {submitted ? <FeedbackMessage cname="success" message="Successfully signed in"/> : ""}
            </div>
        )
    }
    const apiPost = () =>{
        console.log("clicked");
        fetch('https://friendsapp-api.herokuapp.com/create/user/auth', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        "email": email,
                        "username": username,
                        "password": password,
                        "number": phone
                    }
                ),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => {
                    console.log("clicked");
                     response.json()
                     console.log(response);})
                .then((json)=>{
                 console.log("clicked");
                 console.log(json)
                 });
    }
    const signupFun = async (e) => {
        e.preventDefault();
        if(username.length <4 ||email.length<9 || password.length <5 || phone.toString().length<10){
            console.log("error");
            setError("Bad details 😔")
        }else{
            apiPost()
            apiPost ? setSubmitted(true) : setSubmitted(false)
             return  
            // signup.push({"email":email, "password":password,"number":phone, "username":username}   )
        }
        // console.log('jsad');
        // console.log(password, email);
    }

    return (
        <div className="log-in-container bottom-margin">
            <div className="login-header">
                <h2>Create Account</h2>
                <small className="text-color">Please fill the form</small>
                <br/>
                <br/>
                    <br/>
                {error!==""&&<small className="error-div">{error}</small>}
            </div>
            {errorMessage()}
            {successMessage()}
           <form>
           <div className="input-sec-holder">
                <CommonInput onChangeFun={handleUname} value={username} label="Username" type="text"/>
                <CommonInput onChangeFun={handlePhone} value={phone} label="Phone Number" type="number" />
                <CommonInput onChangeFun={handleEmail} value={email} label="Email" type="email" />
                <CommonInput onChangeFun={handlePassword} value={password} label="Password" type="password" />
            </div>
            
            <div className="button-sec-holder">
                <CommonBtn onChangeClick={signupFun}  label="Sign up" type="submit" />
                <br/>
          
            {/*<GoogleLogin
                        clientId={apiid}
                        buttonText="Signup with Google"
                       // onRequest={}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        
                    />*/}
            </div>
          

           </form>
            <div className="login-footer">
                <small >Already have an account <Link to="/signin" className="footer-link">Sign in</Link></small>
            </div>
        </div>
    );
  }

  export default Register;