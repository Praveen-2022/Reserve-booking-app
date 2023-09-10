import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getForm } from '../../redux/action/action'

const Form = () => {
  const dispatch = useDispatch()
  const [fname,setFname] = useState("")
  const [age,setAge] = useState("")
  const [emailId,setEmailId] = useState("")
  const [city,setCity] = useState("")
  const [gender,setGender] = useState("")
  const [mobileNo,setMobileNo] = useState("")
  const [formValue,setFormValue] = useState({fullName:"",Age:"",EmailId:"",City:"",Genger:"",MobileNo:""})

 const handleSubmit = async(event) => {
   await event.preventDefault();  
    await setFormValue({fullName:fname,Age:age,EmailId:emailId,City:city,Genger:gender,MobileNo:mobileNo})
    await alert("Successfully Submitted")
  }
  getForm(dispatch,formValue)


  return (
    <div class="border border-2 my-1 rounded shadow p-2">
              <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="col-md-4">
                  <label htmlFor="validationCustom01" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    value={fname}
                    onChange={(e)=>setFname(e.target.value)}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationCustom02" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="validationCustom02"
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Email ID
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      value={emailId}
                      onChange={(e)=>setEmailId(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom03" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationCustom04" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-select"
                    id="validationCustom04"
                    onChange={(e)=>setGender(e.target.value)}
                    required
                  >
                    <option selected disabled value>
                      Choose...
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationCustom05" className="form-label">
                    Mobile No
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="validationCustom05"
                    value={mobileNo}
                    onChange={(e)=>setMobileNo(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
  )
}

export default Form