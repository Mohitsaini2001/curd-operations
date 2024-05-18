import React, { useState, useEffect } from "react";
import "./allpages.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UserRead() {
  let negative = useNavigate();
  let [set, setval] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/User").then((res) => {
      // console.log(res.data);
      setval(res.data);
    });
  });

  let userdelete = (del) => {
    axios.delete("http://localhost:3000/User/" + del).then((res) => {
      negative("/read");
    });
  };

  return (
    <>
      <div className="displayData">
        <table border="2px" className="mytable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Email-id</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          {set ? (
            <tbody>
              {set.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.city}</td>
                    <td>{item.email}</td>
                    <td>
                     <Link to={'/update/'+item.id}> <i className="fa fa-edit"></i></Link>
                    </td>
                    <td>
                      <Link
                        to={"/delete/" + item.id}
                        onClick={() => {
                          userdelete(item.id);
                        }}
                      >
                        <i className="fa fa-trash"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <p>No data</p>
          )}
        </table>
      </div>
    </>
  );
}

export default UserRead;
