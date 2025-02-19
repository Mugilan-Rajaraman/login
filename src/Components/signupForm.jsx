import { useForm, SubmitHandler } from "react-hook-form"
import React, { useState } from "react";
import "./signupForm.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import AddStudent from "./addStudent";


function Signup({ toggleForm }) {
  const { register, handleSubmit, watch, formState: { errors }, clearErrors } = useForm({mode: "onTouched"});
      
      console.log(errors)
    const onSubmitSignUp = (data) => {
      // Extract dynamically added student information
      const studentEntries = addStudentIDs.studentform.map((student, index) => ({
          id: index + 1, // Assign a unique ID
          sfname: data[`signupsfname_${student.id}`] || "",
          slname: data[`signupslname_${student.id}`] || "",
          gradelvl: data[`signupgradelvl_${student.id}`] || ""
      }));
  
      // Construct final data object
      const formattedData = {
          parentEmail: data.signupemail,
          parentPassword: data.signuppassword,
          parentFirstName: data.signuppfname,
          parentLastName: data.signupplname,
          students: studentEntries
      };
  
      console.log(formattedData);
  };
    
  
  const emailRegex = /^(?=.{1,100}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{15}$/;


  const [addStudentIDs, setAddStudentIDs] = useState({
    studentform: []
  });



  /*  const [errorMessageEmail, setErrorMessageEmail] = useState(""); 
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] = useState("");
    const [errorMessagePFName, setErrorMessagePFName] = useState("");
    const [errorMessagePLName, setErrorMessagePLName] = useState("");
    const [errorMessageSFName, setErrorMessageSFName] = useState("");
    const [errorMessageSLName, setErrorMessageSLName] = useState("");
    const [errorMessageGrade, setErrorMessageGrade] = useState("");
*/

    const [errorClassEmail, setClassEmail] = useState("form__input"); 
    const [errorClassPassword, setClassPassword] = useState("form__input");
    const [errorClassConfirmPassword, setClassConfirmPassword] = useState("form__input");
    const [errorClassPFName, setClassPFName] = useState("form__input");
    const [errorClassPLName, setClassPLName] = useState("form__input");
    const [errorClassSFName, setClassSFName] = useState("form__input");
    const [errorClassSLName, setClassSLName] = useState("form__input");
    const [errorClassGrade, setClassGrade] = useState("form__input");
  

    const [showPassword, setPasswordType] = useState("password")
    const [iconSwitch, setIconSwitch] = useState(false)
    const [moveIcon, setMoveIcon] = useState("default")

    
    
/*
    const handleerrorsignup = (signupDataObj) =>{
        const emailValue = signupDataObj.email
        const passwordValue=signupDataObj.password
        const confpasswordValue = signupDataObj.confpassword 
        const parentfnameValue = signupDataObj.pfname
        const parentlnameValue = signupDataObj.plname
        const studentfnameValue = signupDataObj.sfname
        const studentlnameValue = signupDataObj.slname
        const studentgradeValue = signupDataObj.gradelvl
        
        console.log(confpasswordValue, "un")

        console.log(studentgradeValue)
        if (emailValue.length ===0 ){
          setErrorMessageEmail("Email cannot be blank")
          setClassEmail("form__input form__input--error")

        }
        

        if (passwordValue.length ===0 ){
          setErrorMessagePassword("Password cannot be blank")
          setClassPassword("form__input form__input--error")
          setMoveIcon("error")
        }

        if (confpasswordValue === undefined){
          setErrorMessageConfirmPassword("Confirm Password cannot be blank")
          setClassConfirmPassword("form__input form__input--error")
        }
        else if (confpasswordValue.length ===0 ){
          setErrorMessageConfirmPassword("Confirm Password cannot be blank")
          setClassConfirmPassword("form__input form__input--error")
        }

        if (parentfnameValue.length ===0 ){
          setErrorMessagePFName("Parent first name cannot be blank")
          setClassPFName("form__input form__input--error")
        }

        if (parentlnameValue.length ===0 ){
          setErrorMessagePLName("Parent last cannot be blank")
          setClassPLName("form__input form__input--error")
        }
        if (studentfnameValue.length ===0 ){
          setErrorMessageSFName("Password cannot be blank")
          setClassSFName("form__input form__input--error")
        }
        if (studentlnameValue.length ===0 ){
          setErrorMessageSLName("Password cannot be blank")
          setClassSLName("form__input form__input--error")
        }
        if (studentgradeValue === undefined){
          setErrorMessageGrade("Grade cannot be blank")
          setClassGrade("form__input form__input--error")
        }

    }
 */

    const addStudentForm = () => {
      setAddStudentIDs((prevState) => ({
        studentform: [...prevState.studentform, { id: prevState.studentform.length + 1 }],
      }));
    };

    const removeStudentForm = (id) => {
      setAddStudentIDs((prevState) => ({
        studentform: prevState.studentform.filter((student) => student.id !== id),
      }));
    };
/*
    const checkConfirmPassword = () =>{
      const passwordVal = document.getElementById("password").value 
      const checkpasswordVal = document.getElementById("confirmpassword").value
      console.log(passwordVal, checkpasswordVal)

      if (passwordVal!==checkpasswordVal){
        setErrorMessageConfirmPassword("Password is not same")
        setClassConfirmPassword("form__input form__input--error")
      }
      else{
        setErrorMessageConfirmPassword("")
        setClassConfirmPassword("form__input")
      }

    }
      */

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
    
    <div className="signupform">
    <div className="container">
      <form onSubmit={handleSubmit(onSubmitSignUp)} className="form" id="signup">
        <h1 className="form__title">Sign Up</h1>
        <div className="form__input-group">
          <input {...register("signupemail" , {required: "Email cannot be blank",
            pattern : {value: emailRegex, message: "Email must be Valid" }
          })} name="signupemail"type="text" className={`form__input ${errors.signupemail ? "form__input--error" : ""}`}  placeholder="Email" />
          <div className="form__input-error-message">{errors.signupemail?.message}</div>
        </div>
        <div className="form__input-group">
          <div className="form__input-wrapper">
          <input {...register("signuppassword", {
            required : "Password cannot be blank",
            pattern: {value: passwordRegex, message: "Minimum 15 characters, 1 number, 1 special character is required"}
          })} name="signuppassword" type={showPassword} className={`form__input ${errors.signuppassword ? "form__input--error" : ""}`}  placeholder="Password" />
          <div className="toggle__input-group">
            <button className = {`default ${errors.signuppassword ? "error" : ""}`} type="button" onClick={setShowPassword}>{iconSwitch ?<IoMdEye className="Eye"/> : <IoMdEyeOff className="Eye"/>}</button>

          </div>
          <div className="form__input-error-message">{errors.signuppassword?.message}</div>
          </div>
        </div>
        <div className="form__input-group">
          <input {...register("signupconfpassword", {
            required : "Confirm Password cannot be blank",
            validate : (val) =>{if (watch("signuppassword") !=val){return "Your passwords don't match"}}
          })} id= "confirmpassword" name="signupconfpassword" type="password" className={`form__input ${errors.signupconfpassword ? "form__input--error" : ""}`} placeholder="Confirm Password"/>
          <div className="form__input-error-message">{errors.signupconfpassword?.message}</div>
        </div>
        <div className="form__input-group">
          <input { ...register("signuppfname", {
            required: "Parent First name is required"
          })}name="signuppfname" type="text" className={`form__input ${errors.signuppfname ? "form__input--error" : ""}`} placeholder="Parent First Name" />
          <div className="form__input-error-message">{errors.signuppfname?.message}</div>
        </div>
        <div className="form__input-group">
          <input { ...register("signupplname", {
            required: "Parent Last name is required"
          })} name="signupplname" type="text" className={`form__input ${errors.signupplname ? "form__input--error" : ""}`} placeholder="Parent Last Name" />
          <div className="form__input-error-message">{errors.signupplname?.message}</div>
        </div>
        <div className="form__input-group">
          <input { ...register("signupsfname", {
            required: "Student First name is required"
          })} name="signupsfname" type="text" className={`form__input ${errors.signupsfname ? "form__input--error" : ""}`} placeholder="Student First Name" />
          <div className="form__input-error-message">{errors.signupsfname?.message}</div>
        </div>
        <div className="form__input-group">
          <input { ...register("signupslname", {
            required: "Student Last name is required"
          })}name="signupslname" type="text" className={`form__input ${errors.signupslname ? "form__input--error" : ""}`} placeholder="Student Last Name" />
          <div className="form__input-error-message">{errors.signupslname?.message}</div>
        </div>

        <div className={"form__input-group"}>
          <select { ...register("signupgradelvl", {
            required: "Grade level is required"
          })}className= {`form__input ${errors.signupgradelvl ? "form__input--error" : ""}`} name="signupgradelvl" id="gradelvl">
            <option name = "Grade" selected hidden value=""  >Grade</option>
            <option name = "Grade" value="1">Grade 1</option>
            <option name = "Grade" value="2">Grade 2</option>
            <option name = "Grade" value="3">Grade 3</option>
            <option name = "Grade" value="4">Grade 4</option>
            <option name = "Grade" value="5">Grade 5</option>
            <option name = "Grade" value="6">Grade 6</option>
            <option name = "Grade" value="7">Grade 7</option>
            <option name = "Grade" value="8">Grade 8</option>
          </select>
          <div className="form__input-error-message">{errors.signupgradelvl?.message}</div>
        </div>
        {addStudentIDs.studentform.map((student) => (
            <AddStudent key={student.id} id={student.id} removeStudent={removeStudentForm} register={register} errors={errors}  />
          ))}

  

        <div className="form__input-group">
          <input name="addstudent" type="button" className="form__button" value="Add Student" onClick={addStudentForm} />
        </div>
        <button className="form__button" type="submit">Continue</button>
        <p className="form__text">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
            }}
            className="form__link"
          >
            Already have an account? Login?
          </a>
        </p>
      </form>
    </div>
    </div>
  
  );
}

export default Signup;
