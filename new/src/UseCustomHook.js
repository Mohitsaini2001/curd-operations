import React, { useState } from "react";

export default function UseCustomHook() {
  let [val, setval] = useState(0);

  let show = () => {
    setval(val + 1);
  };

  let dec=()=>{
    setval(val - 1);
  };

  return {val,show,dec}
}
