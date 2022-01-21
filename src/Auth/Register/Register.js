import React, { useState } from "react";
import logo from "../../Assets/Images/login.png";
import "./Register.css";
// import { BsFacebook } from 'react-icons/bs'
// import { FcGoogle } from 'react-icons/fc'
import { Link,useHistory } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";



const Register = () => {

const[close,setClose]=useState(true)
const loginClose=()=>{
  setClose(false) 
}

  const [enterValue, SetEnterValue] = useState({
    enteredUserName: "",
    enteredUserEmail: "",
    enteredUserPassword: "",
  });

  const { enteredUserName, enteredUserEmail, enteredUserPassword } = enterValue;

  const onEnteredSignupChange = (e) => {
    e.preventDefault();
    SetEnterValue({ ...enterValue, [e.target.name]: e.target.value });
  };



  // useEffect(() => {
  //   onSingupFormSubmit();
  // }, [])
  const history = useHistory();

  const loginType = {
    "logintype": "app"
  }

  const onSingupFormSubmit = async (e) => {
    let result = await axios.post("http://103.171.181.46:2081/api/users", {
      email: enteredUserEmail,
      userName: enteredUserName,
      password: enteredUserPassword,
    }, {
      loginType
    })
    console.log(result);
    window.location.reload();
    // Swal.fire({  
    //   title: 'Welcome to Fanfiction !! ',  
    //   text: ' Now Login you account !!',
    //   icon: 'success'
    // }); 
  }



  return (
    <>
     {
       close &&  (<div className="login-page">
       <Link to="/login">
         {/* <div className="back">
           <IoMdArrowRoundBack />
         </div> */}
       </Link>
     
         
         <div className="cancel">
           <MdOutlineCancel   onClick={() => loginClose()} />
         </div>
      
       
       <div className="logo-login">
         <img src={logo} alt="logo" />
       </div>
       <h4>Welcome to fanfiction</h4>
       <h6 className="access">
         Access tons of novels and comics with free chapters that daily
         updating
       </h6>
       <div className="username">
         <label for="fname">Username</label>
         <input
         className="login-input"
           type="text"
           id="fname"
           name="enteredUserName"
           maxlength="35"
           onChange={onEnteredSignupChange}
         />
       </div>
       <div className="login-email">
         <label for="fname">E-mail</label>
         <input
         className="login-input"
           type="email"
           id="fname"
           name="enteredUserEmail"
           maxlength="30"
           onChange={onEnteredSignupChange}
           pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
           required
         />
       </div>
       <div className="login-password">
         <label for="fname">Password</label>
         <input
         className="login-input"
           required
           type="password"
           id="fname"
           maxlength="20"
           name="enteredUserPassword"
           onChange={onEnteredSignupChange}
         />
       </div>
       <button className="sign-button" onClick={onSingupFormSubmit}><p>SignUp</p></button>
       <p className="copyright-a">
         ©2022 Fanfiction | Terms of service | Privacy Policy
       </p>
     </div>
)
     }
    </>
  );
};

export default Register;