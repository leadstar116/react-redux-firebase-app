import { databaseRef } from "../config/firebase";
import { FETCH_TODOS } from "./types";

export const addToDo = (newToDo) => async dispatch => {
  databaseRef
    .set(newToDo, function(error) {
      if(error) {
        return false;
      } else {
        return true;
      }
    });
};

export const fetchToDos = () => async dispatch => {
  databaseRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
