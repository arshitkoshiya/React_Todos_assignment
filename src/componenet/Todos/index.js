import React, { useState } from "react";
import "./index.css";
import List from "./index.json";
import Form from "../Form/index.js";

export default function Index() {
  const Todo = List.filter((abc) => abc.Status === "Todo").map((todolist) => (
    <div>{todolist.Title} : {todolist.Description}</div>
  ));
  const InProgress = List.filter((abc) => abc.Status === "InProgress").map(
    (todolist) => <div>{todolist.Title} : {todolist.Description}</div>
  );
  const Done = List.filter((abc) => abc.Status === "Done").map((todolist) => (
    <div>{todolist.Title} : {todolist.Description}</div>
  ));
  const [createTodo, setcreateTodo] = useState(true);

  function createtodo( ) {

	setcreateTodo(!createTodo)

  }

  return (
    <>
		{createTodo ?<div> <div className="grid-container">
        <div className="class1">
          Todos
          <hr />
          {Todo}
        </div>
        <div className="class2">
          InProcess
          <hr />
          {InProgress}
        </div>
        <div className="class3">
          Done
          <hr />
          {Done}
        </div>
      </div>
      <br />
      <div className="btn">
        <input
          type="button"
          value="Create Todos"
          id="btn"
          onClick={createtodo}
        />
      </div></div>: <Form  form = {createtodo}	/> }
      
    </>
  );
}
