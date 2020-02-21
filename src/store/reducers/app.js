import { ADD_NAME, ADD_CARD, ADD_COMMENT } from '../actions/actions';

if (!localStorage.getItem('columns')) {
  localStorage.setItem(
    'columns',
    JSON.stringify([
      { id: 1, title: 'TODO' },
      { id: 2, title: 'In Progress' },
      { id: 3, title: 'Testing' },
      { id: 4, title: 'Done' },
    ]),
  );
}

const initialState = {
  name: localStorage.getItem('name') || '',
  nextCardId: JSON.parse(localStorage.getItem('nextCardId')) || 1,
  nextCommentId: JSON.parse(localStorage.getItem('nextCommentId')) || 1,
};

const name = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.name,
      };
    case ADD_CARD:
      return {
        ...state,
        nextCardId: state.nextCardId + 1,
      };
    case ADD_COMMENT:
      return {
        ...state,
        nextCommentId: state.nextCommentId + 1,
      };
    default:
      return state;
  }
};

export default name;
