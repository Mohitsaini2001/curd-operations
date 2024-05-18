import React,{useState}from "react";
import "./allpages.css";
import axios from "axios";
function UserSearch() {
let[set,setname] = useState()
let[val,setval] = useState()


let serchdata=(key)=>{
console.log(key);
axios.get("http://localhost:3000/User?name="+key).then((res)=>{
// console.log(res.data);
setval(res.data)
})
}

  return (
    <>
      <div className="outer">
        <span className="inner">
          <input
            type="search"
            name="search"
            placeholder="searchdata"
            className="myinput" onChange={(e)=>{setname(e.target.value)}}
          />
          <i className="myicon fa-brands fa-searchengin" onClick={()=>{serchdata(set)}}></i>
        </span>
      </div>
      <div className="displayData">
        <table border="2px" className="mytable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Email-id</th>
            </tr>
          </thead>
          {val?<tbody>
            {val.map((item)=>{
return(
  <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.city}</td>
    <td>{item.email}</td>
  </tr>
)
            })}
          </tbody>:null}
        </table>
      </div>
    </>
  );
}

export default UserSearch;
