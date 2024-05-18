import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./allpages.css";
import axios from "axios";
function UserCreate() {
  let [name, setname] = useState();
  let [age, setage] = useState();
  let [city, setcity] = useState();
  let [email, setemail] = useState();

  let navigate = useNavigate()

  let usersubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/User",{
      name,age,city,email
    }).then((res)=>{
console.log(res.data);
navigate("/read")
    })
  }

  return (
    <>
      <div className="myform">
        <h2 className="myheading">Create User</h2>
        <form method="post" onSubmit={usersubmit}>
        <div className="importdata">
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" onChange={(e)=>{setname(e.target.value)}} />
        </div>
        <div className="importdata">
          <label>Age</label>
          <input type="Number" name="age" placeholder="Enter your Age" onChange={(e)=>{setage(e.target.value)}}/>
        </div>

        <div className="importdata">
          <label>City</label>
          <input type="text" name="city" placeholder="Enter your City"onChange={(e)=>{setcity(e.target.value)}} />
        </div>

        <div className="importdata">
          <label>Email-Id</label>
          <input type="email" name="email" placeholder="Enter your Email-Id" onChange={(e)=>{setemail(e.target.value)}} />
        </div>

        <div className="importdata">
          <input type="submit" name="sub" />
        </div>
        </form>
      </div>
    </>
  );
}

export default UserCreate;
