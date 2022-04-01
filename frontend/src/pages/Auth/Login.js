import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import CommonBtn from "./Acomponents/CommonBtn";
import CommonInput from "./Acomponents/LoginInputes";
import { FcGoogle } from "react-icons/fc";
import { login } from "../../actions/auth";
import { connect } from 'react-redux';

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


  useEffect(()=>{
    console.log(props.auth);
  },[props.auth])
    const loginFun = (e) => {
        ///console.log(props);
        e.preventDefault()
        if(email.length < 10){
            return setError("Invalid Input")
        }
        if(password.toString().length < 4){
            return setError("Invalid Input")
        }
       props.login({password, email})

       
    }
    const googleAuth = () => {
        console.log(password, email);
    }


    return (
        <div className="log-in-container bottom-margin">
           <form>
            <div className="login-header">
                    <h2>Welcome!</h2>
                    <small className="text-color">Please sign in your account</small>
                    <br/>
                    <br/>
                    <br/>
                    {error!==""&&<small className="error-div">{error}</small>}
                    
                </div>
                <div className="input-sec-holder">
                    <CommonInput onChangeFun={setEmail} type="email" value={email} label="Email Address" />
                    <CommonInput onChangeFun={setPassword} type="password" value={password} label="Password" />
                    <div className="forgetpass"><Link to="signup" className="footer-link">Forget password?</Link></div>
                </div>

                <div className="button-sec-holder">
                    {<CommonBtn onChangeClick={loginFun} label="Sign in" />
                    }
                   
                    {/*</div>{<button className="enter-btn" ><Link to="/feeds" className="">Sign in</Link></button>*/}
                  
                   
                </div>
           </form>

            <div className="login-footer">
                <small >Dont have an account <Link to="/signup" className="footer-link">Sign up</Link></small>
            </div>
        </div>
    );
  }

  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect( mapStateToProps, { login } )( Login );
 