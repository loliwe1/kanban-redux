export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const ADD_NAME = "ADD_NAME";
export const CHANGE_TITLE_COLUMN = "CHANGE_TITLE_COLUMN";

export function addCard(title, columnId, name, id) {
  return {
    type: "ADD_CARD",
    title,
    columnId,
    name,
    id
  };
}

export function removeCard(id) {
  return {
    type: "REMOVE_CARD",
    id
  };
}

export function saveName(name) {
  return {
    type: "ADD_NAME",
    name
  };
}
export function changeTitleColumn(title, id) {
  return {
    type: "CHANGE_TITLE_COLUMN",
    title,
    id
  };
}
