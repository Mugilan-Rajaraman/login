import { useForm, SubmitHandler } from "react-hook-form"
import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import "./loginForm.css";

function Login({ toggleForm }) {
  
  const {register, formState : {errors},handleSubmit} = useForm({mode: "onTouched"})
  console.log(errors)
  const onSubmitLogin = (data) => {console.log(data)
  }
  const emailRegex = /^(?=.{1,100}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{15}$/;
  const [errorMessageUsername, setErrorMessageUsername] = useState(""); //updated code
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorClassUsername, setClassUsername] = useState("form__input");
  const [errorClassPassword, setClassPassword] = useState("form__input");
  const [showPassword, setPasswordType] = useState("password")
  const [iconSwitch, setIconSwitch] = useState(false)
  const [moveIcon, setMoveIcon] = useState("default")

  const handleformlogin = (event) => {
    event.preventDefault();
    let form = event.target;
    //console.log(form)
    let loginData = new FormData(form);
    let loginDataObj = Object.fromEntries(loginData.entries());
    console.log(loginDataObj)
    
    
    if (!handleerrorlogin(loginDataObj)) {  //updated code
      return;                           //updated code
    }                                     //updated code


    console.log(loginDataObj);
  };


  const handleerrorlogin = (loginDataObj) => {
    const usernameValue = loginDataObj.username;
    const passwordValue = loginDataObj.password;

    if (usernameValue.length === 0) {
      setErrorMessageUsername("Username cannot be blank.");
      setClassUsername("form__input form__input--error")
  } else if (usernameValue.length > 10 || usernameValue.length < 5) {
      setErrorMessageUsername( "Username must be between 5 and 10 characters.");
      setClassUsername("form__input form__input--error")
  } else if (!/[A-Z]/.test(usernameValue)) {
      setErrorMessageUsername ("Username must contain at least one capital letter.");
      setClassUsername("form__input form__input--error")
  }
  else{
      setErrorMessageUsername("")
      setClassUsername("form__input")
  }

 


  if (passwordValue.length === 0){
      setErrorMessagePassword("Password cannot be blank")
      console.log("Works here")
      setClassPassword("form__input form__input--error")
      setMoveIcon("error")
      
      //return false
  }
  else{
      setErrorMessagePassword("")
      setClassPassword("form__input")
      setMoveIcon("default")
  }
};
      

const setShowPassword =() =>{
  if (showPassword === "password"){
    setPasswordType("text")
    setIconSwitch(true)
  }
  else{
    setPasswordType("password")
    setIconSwitch(false)
  }
}

return (
  <div className="loginform">
    <div  onSubmit = {handleSubmit(onSubmitLogin)} className="container">
      <form action="" className="form" id="login">
        <h1 className="form__title">Login</h1>
        <div className="form__input-group">
      <input 
      {...register("email", {
        required: "Email is Required",
        pattern : {value : emailRegex, message : "Email not Valid"}
      })}
      name="email" type="text" className={`form__input ${errors.email ? "form__input--error" : ""}`}  placeholder="Email"
    /> {/*{`form__input ${errors.email ? "form__input--error" : ""}`}*/}
          <div id = "emailerrormessage"className="form__input-error-message">{errors.email?.message}</div>
          
        </div>
        <div className="form__input-group">
          <div className="form__input-wrapper">
          <input {...register("password", {
            required : "Password is Required",
            pattern : {value:passwordRegex, message:"Password not valid"}
          })} name="password" type={showPassword} className={`form__input ${errors.password? "form__input--error" : ""}`}  placeholder="Password" />
          <div className="toggle__input-group">
            <button className = {`default ${errors.password ? "error" : ""}`} type="button" onClick={setShowPassword}>{iconSwitch ?<IoMdEye className="Eye"/> : <IoMdEyeOff className="Eye"/>}</button>

          </div>
          <div className="form__input-error-message">{errors.password?.message}</div>
          </div>
          
        </div>
        <button className="form__button" type="submit">Continue</button>
        <p className="form__text">
          <a href="#" className="form__link">Forgot your password?</a>
        </p>
        <p className="form__text">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
            }}
            className="form__link"
          >
            Don't have an account? Create account
          </a>
        </p>
      </form>
    </div>
    </div>
  );
}


export default Login;

