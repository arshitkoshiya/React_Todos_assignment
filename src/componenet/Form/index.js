import React from "react";
import "./index.css";
import List from "../Todos/index.json";
import { useState } from "react/cjs/react.development";

export default function Form(props) {
  function update() {
    List.push({
      Title: a,
      Description: b,
      Status: c,
    });
    /* alert(JSON.stringify(List)); */
    props.form();
  }
  const [a, seta] = useState();
  const [b, setb] = useState();
  const [c, setc] = useState();
  function logvalue(e) {
    console.log("hello")
    if(e.target.name === 'title'){
      seta(e.target.value)
    }
    else if(e.target.name === 'Description'){
      setb(e.target.value)
    }
    else{
      setc(e.target.value)

    }
  }
  return (
    <>
      <div className="form">
        <form action="" method="post">
          <label htmlFor="">Title </label>
          <input
            type="text"
            name="title"
            id="titlebox"
            placeholder="enter title"
            onChange={(e) => logvalue(e)}
          />
          <br />
          <label htmlFor="">Description </label>
          <textarea
            name="Description"
            id="textarea"
            cols="20"
            rows="5"
            placeholder="Description"
            onChange={(e) => logvalue(e)}
          ></textarea>
          <br />
          <label htmlFor="">Status</label>
          <select name="select" id="select" onChange={(e) => logvalue(e)}>
            <option value="" selected disabled>--select--</option>
            <option value="Todo">Todo</option>
            <option value="InProgress">InProgress</option>
            <option value="Done">Done </option>
          </select>
          <br />
          <br />
          <div className="btn1">
            <input type="button" value="Add" id="btn1" onClick={update} />
          </div>
        </form>
      </div>
    </>
  );
}
