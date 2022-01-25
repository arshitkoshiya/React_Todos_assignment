import React, { useState } from "react";
import "./index.css";
import List from "./index.json";
import Form from "../Form/index.js";

export default function Index() {
  const Todo = List.filter((abc) => abc.Status === "Todo").map((todolist,Index) => (
    <div key={Index}>
      {todolist.Title} : {todolist.Description}{" "}
      <input type="button" value="Edit" id="btn" onClick={(e) => edit(todolist)} />
    </div>
  ));
  const InProgress = List.filter((abc) => abc.Status === "InProgress").map(
    (todolist, Index) => (
      <div key={Index}>
        {todolist.Title} : {todolist.Description}{" "}
        <input type="button" value="Edit" id="btn" onClick={(e) => edit(todolist)}/>
      </div>
    )
  );
  const Done = List.filter((abc) => abc.Status === "Done").map((todolist, Index) => (
    <div key={Index}>
      {todolist.Title} : {todolist.Description}{" "}
      <input type="button" value="Remove" id="btn" onClick={(e) => remove(todolist.Id)}  />
    </div>
  ));
  const [createTodo, setcreateTodo] = useState(true);
  const [id, setid] = useState(null);

  function createtodo() {
    setcreateTodo(!createTodo);
  }

  const edit = (editid) =>{
    setid(editid);
  createtodo();
  }

const [removeffect,setremoveffect] = useState(false);

  const remove = (dremove) => {

const index = List.findIndex((rem) => rem.Id === dremove)
List.splice(index, 1);
 setremoveffect(!removeffect);
  }

  return (
    <>
      {createTodo ? (
        <div>
          {" "}
          <div className="grid-container">
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
          </div>
        </div>
      ) : (
        <Form form={createtodo} editid={id} setid={setid}/>
      )}
    </>
  );
}