export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const ADD_NAME = 'ADD_NAME';
export const CHANGE_TITLE_COLUMN = 'CHANGE_TITLE_COLUMN';
export const OPEN_POPUP_CARD = 'OPEN_POPUP_CARD';
export const CLOSE_POPUP_CARD = 'CLOSE_POPUP_CARD';
export const CHANGE_CARD_DESCRIPTION = 'CHANGE_CARD_DESCRIPTION';
export const CHANGE_CARD_TITLE = 'CHANGE_CARD_TITLE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const SAVE_COMMENT = 'SAVE_COMMENT';

export function addCard(title, columnId, name, id) {
  return {
    type: 'ADD_CARD',
    title,
    columnId,
    name,
    id,
  };
}

export function removeCard(cardId) {
  return {
    type: 'REMOVE_CARD',
    cardId,
  };
}

export function saveName(name) {
  return {
    type: 'ADD_NAME',
    name,
  };
}
export function changeTitleColumn(title, id) {
  return {
    type: 'CHANGE_TITLE_COLUMN',
    title,
    id,
  };
}

export function openPopupCard(id) {
  return {
    type: 'OPEN_POPUP_CARD',
    id,
  };
}

export function closePopupCard() {
  return {
    type: 'CLOSE_POPUP_CARD',
  };
}

export function changeCardDescription(cardId, description) {
  return {
    type: 'CHANGE_CARD_DESCRIPTION',
    cardId,
    description,
  };
}

export function changeCardTitle(cardId, title) {
  return {
    type: 'CHANGE_CARD_TITLE',
    cardId,
    title,
  };
}

export function addComment(comment, id, author, cardId) {
  return {
    type: 'ADD_COMMENT',
    comment,
    id,
    author,
    cardId,
  };
}
export function removeComment(id) {
  return {
    type: 'REMOVE_COMMENT',
    id,
  };
}

export function saveComment(id, comment) {
  return {
    type: 'SAVE_COMMENT',
    id,
    comment,
  };
}
