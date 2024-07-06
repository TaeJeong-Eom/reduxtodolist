import React, { useState } from "react";
import "./App.css";
import { MdOutlineSaveAlt } from "react-icons/md"; // save
import { MdDeleteForever } from "react-icons/md"; // del
import { MdDownloadDone } from "react-icons/md"; // done
import { IoReturnUpBackOutline } from "react-icons/io5"; // return
import { useDispatch, useSelector } from "react-redux"; // store에서 redux 가져오기
import {
  addTask,
  completeTask,
  deleteTask,
  returnTask,
} from "../redux/actions";

// 음.. 내가 모르는게 뭘까?
// javaScript 기본이 안되어 있음 => 이거랑 연계된 react요소도 같이 이해가 안됨 => 뭘모르는지 모르는상황이 근본이 안되어있는 상황이기에 파악이 안되는중. but 흐름은 알겠음!

function Body() {
  // useSelector 는 redux에 있는 데이터를 불러와주는 함수
  const {completedTasks, tasks} = useSelector((state) => state.tasksReducer); // = store 객체, todos안에 taskReducer 값이 들어감.
  // = const conpletedTasks = useSelector((state) => state.tasksReducer)
  // 비구조화 할당을 하면 completedTasks, tasks를 둘다 가져올 수 있음. 하지만, 그냥 쓸경우 쓸데없이 2줄을 다 적어야함.

  // useDispatch 는 redux에 데이터를 저장해주는 함수
  const dispatch = useDispatch();

  // 추가하기
  const handleSave = () => {
    const newTask = { title, content };
    dispatch(addTask(newTask));
    setTitle("");
    setContent("");
  };

  // 완료하기
  const handleDone = (index) => {
    dispatch(completeTask(index));
  };

  // 지우기
  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  // 되돌리기
  const handleFix = (index) => {
    dispatch(returnTask(index));
  };
  const [title, setTitle] = useState(""); // 해야할 일 추가하기(제목)
  const [content, setContent] = useState(""); // 해야할 일 추가하기(내용)

  /**redux 이전 
  // useState로 관리하기
  const [tasks, setTasks] = useState([]); // 해야할 일
  const [completedTasks, setCompletedTasks] = useState([]); // 완료한 일
  const [title, setTitle] = useState(""); // 해야할 일 추가하기(제목)
  const [content, setContent] = useState(""); // 해야할 일 추가하기(내용)

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
  */

  // Body
  return (
    // 메뉴 부분 정렬시키기
    <div className="body">
      <div className="menu-wrapper">
        <div className="menu">
          {/* Menu: Add a Task */}
          <h4>Add a Task</h4>
          {/* 새로운 할일 */}
          <div className="container">
            <div className="style">
              <div className="squareStyle1">
                <div className="text-container">
                  <label>New task:</label>
                  {/* New Task 입력칸 */}
                  <input
                    type="text"
                    className="input-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {/* Content 입력칸 */}
                  <label>Content:</label>
                  <textarea
                    className="input-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                  {/* 저장 버튼 */}
                </div>
                <button className="done-button" onClick={handleSave}>
                  <MdOutlineSaveAlt size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Menu: My task */}
        <div className="menu">
          <h4>My Task</h4>
          {/* My task Container */}
          <div className="container">
            <div className="style">
              {tasks.map((task, index) => (
                <div key={index} className="squareStyle1">
                  <div className="text-container">
                    <h5>{task.title}</h5>
                    <h6>{task.content}</h6>
                  </div>
                  {/* 삭제 버튼 */}
                  <div className="button-container">
                    <button
                      className="del-button"
                      onClick={() => handleDelete(index)}
                    >
                      <MdDeleteForever size={20} />
                    </button>
                    {/* 할 일 완료 버튼 */}
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
        {/* Menu: isDone */}
        <div className="menu">
          <h4>isDone</h4>
          {/* isDone Container */}
          <div className="container">
            <div className="style">
              {completedTasks.map((task, index) => (
                <div key={index} className="squareStyle1">
                  <div className="text-container">
                    <h5>{task.title}</h5>
                    <h6>{task.content}</h6>
                  </div>
                  {/* 삭제 버튼 */}
                  <div className="button-container">
                    <button
                      className="del-button"
                      onClick={() => handleDelete(index)}
                    >
                      <MdDeleteForever size={20} />
                    </button>
                    {/* My task로 return 하는 버튼 */}
                    <button
                      className="fix-button"
                      onClick={() => handleFix(index)}
                    >
                      <IoReturnUpBackOutline size={20} />
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
