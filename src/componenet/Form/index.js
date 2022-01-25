import React from "react";
import "./index.css";
import List from "../Todos/index.json";
import { useState, useEffect } from "react/cjs/react.development";

export default function Form(props) {
  function update() {
    List.push({
      Id:List[List.length - 1]['Id'] + 1,
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
    if (e.target.name === "title") {
      seta(e.target.value);
    } else if (e.target.name === "Description") {
      setb(e.target.value);
    } else {
      setc(e.target.value);
    }
  }

  const create = () => {
    List.filter((xyz) => xyz.Id === props.editid.Id).map((mno) => {
      mno.Title = a;
      mno.Description = b;
      mno.Status = c;
    });

    props.form();
    props.setid(null);
  };

  useEffect(() => {
    if (props.editid != null) {
      seta(props.editid.Title);
      setb(props.editid.Description);
      setc(props.editid.Status);
    }
  }, []);

  return (
    <>
      <div className="form">
        <form action="" method="post">
          <label htmlFor="">Title </label>
          <input
            type="text"
            name="title"
            id="titlebox"
            value={a}
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
            value={b}
            placeholder="Description"
            onChange={(e) => logvalue(e)}
          ></textarea>
          <br />
          <label htmlFor="">Status</label>
          <select
            name="select"
            id="select"
            value={c}
            onChange={(e) => logvalue(e)}
          >
            <option value="" selected disabled>
              --select--
            </option>
            <option value="Todo">Todo</option>
            <option value="InProgress">InProgress</option>
            <option value="Done">Done </option>
          </select>
          <br />
          <br />
          <div className="btn1">
            {props.editid != null ? (
              <input type="button" value="Edit" id="btn1" onClick={create} />
            ) : (
              <input type="button" value="Add" id="btn1" onClick={update} />
            )}
          </div>
        </form>
      </div>
    </>
  );
}
