import {
  ADD_NAME,
  ADD_CARD,
  ADD_COMMENT,
  OPEN_POPUP_CARD,
  CLOSE_POPUP_CARD,
} from '../actions/actions';


const initialState = {
  name: localStorage.getItem('name') || '',
  nextCardId: JSON.parse(localStorage.getItem('nextCardId')) || 1,
  nextCommentId: JSON.parse(localStorage.getItem('nextCommentId')) || 1,
  currentCardId: null,
};

const name = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME: {
      localStorage.setItem('name', action.name);
      return {
        ...state,
        name: action.name,
      };
    }
    case ADD_CARD: {
      const nextCardId = state.nextCardId + 1;
      localStorage.setItem('nextCardId', JSON.stringify(nextCardId));
      return { ...state, nextCardId };
    }
    case ADD_COMMENT: {
      const nextCommentId = state.nextCommentId + 1;
      localStorage.setItem('nextCommentId', JSON.stringify(nextCommentId));
      return { ...state, nextCommentId };
    }
    case OPEN_POPUP_CARD:
      return {
        ...state,
        currentCardId: action.id,
      };
    case CLOSE_POPUP_CARD:
      return {
        ...state,
        currentCardId: null,
      };
    default:
      return state;
  }
};

export default name;
