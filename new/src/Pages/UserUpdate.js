import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UserUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/User/${id}`)
      .then((res) => {
        setName(res.data.name);
        setAge(res.data.age);
        setCity(res.data.city);
        setEmail(res.data.email);
      })
      .catch(error => {
        console.error("There was an error fetching the user data:", error);
      });
  }, [id]);

  const updateUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/User/${id}`, {
        name,
        age,
        city,
        email,
      })
      .then(() => {
        navigate("/read");
      })
      .catch(error => {
        console.error("There was an error updating the user data:", error);
      });
  };

  return (
    <div className="myform">
      <h2 className="myheading">Update User</h2>
      <form method="post" onSubmit={updateUser}>
        <div className="importdata">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="importdata">
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="importdata">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter your City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="importdata">
          <label>Email-Id</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email-Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="importdata">
          <input type="submit" name="sub" value="update" />
        </div>
      </form>
    </div>
  );
}

export default UserUpdate;
