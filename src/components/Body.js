import React, { useState } from "react";
import "./App.css";
import { MdOutlineSaveAlt } from "react-icons/md"; // save
import { MdDeleteForever } from "react-icons/md"; // del
import { MdDownloadDone } from "react-icons/md"; // done
import { IoReturnUpBackOutline } from "react-icons/io5"; // return

function Body() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    const newTask = { title, content };
    setTasks([...tasks, newTask]);
    setTitle("");
    setContent("");
  };

  const handleDone = (index) => {
    const newCompletedTask = tasks[index];
    setCompletedTasks([...completedTasks, newCompletedTask]);
    setTasks(tasks.filter((_, idx) => idx !== index));
  };

  const handleDelete = (index) => {
    setCompletedTasks(completedTasks.filter((_, idx) => idx !== index));
  };

  const handleFix = (index) => {
    const taskToReturn = completedTasks[index];
    setTasks([...tasks, taskToReturn]);
    setCompletedTasks(completedTasks.filter((_, idx) => idx !== index));
  };

  return (
    <div className="body">
      <div className="menu-wrapper">
        <div className="menu">
          <h4>Add a Task</h4>
          <div className="container">
            <div className="style">
              <div className="squareStyle1">
                <div className="text-container">
                  <label>New task:</label>
                  <input
                    type="text"
                    className="input-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Content:</label>
                  <textarea
                    className="input-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
                <button className="done-button" onClick={handleSave}>
                  <MdOutlineSaveAlt size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <h4>My Task</h4>
          <div className="container">
            <div className="style">
              {tasks.map((task, index) => (
                <div key={index} className="squareStyle1">
                  <div className="text-container">
                    <h5>{task.title}</h5>
                    <h6>{task.content}</h6>
                  </div>
                  <div className="button-container">
                    <button
                      className="del-button"
                      onClick={() => handleDelete(index)}
                    >
                      <MdDeleteForever size={20} />
                    </button>
                    <button
                      className="done-button"
                      onClick={() => handleDone(index)}
                    >
                      <MdDownloadDone size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="menu">
          <h4>isDone</h4>
          <div className="container">
            <div className="style">
              {completedTasks.map((task, index) => (
                <div key={index} className="squareStyle1">
                  <div className="text-container">
                    <h5>{task.title}</h5>
                    <h6>{task.content}</h6>
                  </div>
                  <div className="button-container">
                    <button
                      className="del-button"
                      onClick={() => handleDelete(index)}
                    >
                      <MdDeleteForever size={20} />
                    </button>
                    <button
                      className="fix-button"
                      onClick={() => handleFix(index)}
                    >
                      <IoReturnUpBackOutline size={20}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
