import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, RETURN_TASK } from "./actions.js";

// 초기값
const initialState = {
  tasks: [],
  completedTasks: [],
};

// 액션; switch문으로 액션 타입에 따른 상태를 어떻게 변경할지 표현하기
// ...state : 기존의 상태를 복사하고, 배열을 업데이트한 상태로 바꾼다.
const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    // 할 일 추가하기
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    // 할 일 완료하기
    case COMPLETE_TASK:
      const completedTask = state.tasks[action.payload];
      return {
        ...state,
        tasks: state.tasks.filter((_, idx) => idx !== action.payload),
        completedTasks: [...state.completedTasks, completedTask],
      };

    // 할 일 삭제하기
    case DELETE_TASK:
      return {
        ...state,
        completedTasks: state.completedTasks.filter((_, idx) => idx !== action.payload),
      };

    // 되돌리기
    case RETURN_TASK:
      const taskToReturn = state.completedTasks[action.payload];
      return {
        ...state,
        completedTasks: state.completedTasks.filter((_, idx) => idx !== action.payload),
        // 완료된 할 일 tasks 배열로 다시 추가하기
        tasks: [...state.tasks, taskToReturn],
      };

    default:
      return state;
  }
};

export default tasksReducer;



/**
 * 리듀서 (Reducer)
정의:
리듀서는 상태 변화를 처리하는 함수입니다.
액션을 받아 현재 상태를 어떻게 변경할지를 결정합니다.

역할:
리듀서는 두 가지 인자를 받습니다: 현재 상태(state)와 액션(action).
리듀서는 액션의 타입에 따라 새로운 상태를 반환합니다.
 */