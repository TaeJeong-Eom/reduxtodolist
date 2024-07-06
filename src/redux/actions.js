export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const RETURN_TASK = 'RETUN_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const completeTask = (index) => ({
  type: COMPLETE_TASK,
  payload: index,
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

export const returnTask = (index) => ({
  type: RETURN_TASK,
  payload: index,
});

/**
 * 액션 (Action)
정의:
액션은 애플리케이션에서 발생하는 일을 나타내는 객체입니다.
상태를 어떻게 변경할지를 설명하는 정보(데이터)를 담고 있습니다.

구조:
액션은 일반적으로 type이라는 속성을 가지며, 그 외에 추가적인 데이터(payload)를 가질 수 있습니다.
 */