// src/store.js
import { combineReducers, createStore } from 'redux';
import tasksReducer from './reducers';



// 한 개에만 접근하는걸 막기위해서 객체를 생성해서 전방적으로 접근하게 만드는거.
const rootReducer = combineReducers({
  tasksReducer: tasksReducer // ctrl space = auto import 이름 찾아주기
})
// 중괄호 안에 있는건 객체; rootReducer taskReducer라는 key 안에 tasksReducer를 바인딩 해둔것.
const store = createStore(rootReducer);

export default store;


// createStore: Redux에서 Store를 생성하는 함수