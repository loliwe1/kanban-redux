import {
  ADD_COMMENT,
  REMOVE_CARD,
  REMOVE_COMMENT,
  SAVE_COMMENT,
} from '../actions/actions';

const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        {
          textComment: action.comment,
          author: action.author,
          id: action.id,
          cardId: action.cardId,
        },
        ...state,
      ];
    case REMOVE_CARD: {
      // localStorage
      return [...state.filter((comment) => comment.cardId !== action.cardId)];
    }
    case REMOVE_COMMENT:
      return [...state.filter((comment) => comment.id !== action.id)];
    case SAVE_COMMENT:
      return state.map((comment) => (comment.id === action.id
        ? { ...comment, textComment: action.comment }
        : comment
      ));
    default:
      return state;
  }
};

// localStorage.setItem('comments', JSON.stringify(state))
// localStorage.getItem(JSON.parse("comments")) ||
export default comments;
