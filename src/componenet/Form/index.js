import React from "react";
import "./index.css";

export default function index() {
  return (
    <>
      <div className="form">
        <form action="" method="post" >
          <label htmlFor="">Title </label>
          <input type="text" name="text" id="titlebox" placeholder="enter title" /><br />
          <label htmlFor="">Description </label>
          <textarea
            name=""
            id="textarea"
            cols="20"
            rows="5"
            placeholder="Description"
          ></textarea><br />
          <label htmlFor="">Status</label>
          <select name="select" id="">
            <option value="">Todo</option>
            <option value="">InProgress</option>
            <option value="">Done </option>
          </select><br />
          <input type="button" value="Add" id="btn1" />
        </form>
      </div>
    </>
  );
}
