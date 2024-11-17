import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { register } from "../features/authSlice";

function Register() {

  const user =useSelector((state)=>state.auth.data)
const [inputs, setInputs]= useState({
  username:"",
  email:"",
  password:""
})
const handleChange=(e)=>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value
  }))
}

const dispatch =useDispatch()
const navigate =useNavigate()

const handleSubmit =async (e)=>{
  e.preventDefault()
  const data = await dispatch(register(inputs))
  if(data.payload && "token" in data.payload){
    window.localStorage.setItem("token", data.payload.token)
      navigate("/")
  }

  
}
if(user && window.localStorage.getItem("token")){
  return <Navigate to ="/"/>
}

  return (
    <div className="container-lg my-5">
      <div className="text-center align-items-center align-content-center">
        <div className="d-flex justify-content-center">
          <form className="border p-5" onSubmit={handleSubmit}>
            <h4 className="text-secondary fw-bold fs-3 mb-5">Register</h4>

            <div className="mb-3">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                name="username"
                value={inputs.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
                value={inputs.email}
                onChange={handleChange}
                name="email"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <p>
                Already a Member? <Link to="/login">Sign In</Link>
              </p>
            </div>

            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
