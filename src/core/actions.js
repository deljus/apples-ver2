import { TRIGGER, ADD_APPLE, ADD_APPLES, DELETE_APPLE, EDIT_APPLE, START_REQUEST, STOP_REQUEST } from './constants';

// Aples actions
export const addApples = apples => ({
  type: ADD_APPLES,
  apples,
});

export const addApple = apple => ({
  type: ADD_APPLE,
  apple,
});

export const deleteApple = id => ({
  type: DELETE_APPLE,
  id,
});

export const editApple = (id, apple) => ({
  type: EDIT_APPLE,
  id,
  apple,
});

// Modal action
export const modal = id => ({
  type: TRIGGER, id,
});

// Loader action

export const startRequest = () => ({
  type: START_REQUEST,
});

export const finishRequest = () => ({
  type: STOP_REQUEST,
});
