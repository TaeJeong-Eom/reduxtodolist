import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import "./components/App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
// import store from "./store";

// <Provider></Provider> 를 이용해 모든 컴포넌트가 Redux Store에 접근할 수 있도록함.
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
