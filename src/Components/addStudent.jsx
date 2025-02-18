import "./addStudent.css"

function AddStudent({ id, removeStudent, register, errors }) {
  return (
      <div className="container-addStudent">
          <div className="form__input-group">
              <input {...register(`signupsfname_${id}`, { required: "Student First name is required" })} 
                  type="text" className={`form__input ${errors[`signupsfname_${id}`] ? "form__input--error" : ""}`} 
                  placeholder="Student First Name" />
              <div className="form__input-error-message">{errors[`signupsfname_${id}`]?.message}</div>
          </div>

          <div className="form__input-group">
              <input {...register(`signupslname_${id}`, { required: "Student Last name is required" })} 
                  type="text" className={`form__input ${errors[`signupslname_${id}`] ? "form__input--error" : ""}`} 
                  placeholder="Student Last Name" />
              <div className="form__input-error-message">{errors[`signupslname_${id}`]?.message}</div>
          </div>

          <div className="form__input-group">
              <select {...register(`signupgradelvl_${id}`, { required: "Grade level is required" })} 
                  className={`form__input ${errors[`signupgradelvl_${id}`] ? "form__input--error" : ""}`}>
                  <option value="" hidden>Grade</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
              </select>
              <div className="form__input-error-message">{errors[`signupgradelvl_${id}`]?.message}</div>
          </div>

          <div className="form__input-group">
              <button type="button" className="form__button-error" onClick={() => removeStudent(id)}>Remove Student</button>
          </div>
      </div>
  );
}

export default AddStudent;
