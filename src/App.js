import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToDoLists from "./ToDoList";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDolist, setToDoList] = useState([]);
  function inputChange(e) {
    setToDo(e.target.value);
  }
  function addListItem(e) {
    if (toDo === "") {
      alert("add items");
    } else {
      setToDoList((oldItems) => {
        return [...oldItems, toDo];
      });
      setToDo("");
    }
  }

  const KeyEventHandler = (e) => {
    if (e.key === "Enter" && toDo !== "") {
      console.log(toDo);
      setToDoList((oldItems) => {
        return [...oldItems, toDo];
      });
      setToDo("");
    }
    // setToDo(toDo);
  };

  const deleteItem = function (id) {
    console.log("clicked! delete");
    setToDoList((oldItems) => {
      return oldItems.filter((arr, i) => {
        return i + 1 !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="heading">ToDo List</h1>
          <input
            type="text"
            placeholder="Add a item"
            onChange={inputChange}
            value={toDo}
            onKeyDown={KeyEventHandler}
          />
          <button onClick={addListItem}> + </button>

          <ol>
            {/* <li>{toDolist}</li> */}
            {toDolist.map((item, i) => (
              <ToDoLists
                text={item}
                key={i + 1}
                id={i + 1}
                onSelect={deleteItem}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
