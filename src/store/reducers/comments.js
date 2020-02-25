import {
  ADD_COMMENT,
  REMOVE_CARD,
  REMOVE_COMMENT,
  SAVE_COMMENT,
} from '../actions/actions';

const initialState = JSON.parse(localStorage.getItem('comments')) || [];

const comments = (state = initialState, action) => {

  switch (action.type) {
    case ADD_COMMENT: {
      const comments = [
        {
          textComment: action.comment,
          author: action.author,
          id: action.id,
          cardId: action.cardId,
        },
        ...state,
      ];
      localStorage.setItem('comments', JSON.stringify(comments));
      return comments;
    }
    case REMOVE_CARD: {
      const comments = [...state.filter((comment) => comment.cardId !== action.cardId)];
      localStorage.setItem('comments', JSON.stringify(comments));
      return comments;
    }
    case REMOVE_COMMENT: {
      const comments = [...state.filter((comment) => comment.id !== action.id)];
      localStorage.setItem('comments', JSON.stringify(comments));
      return comments;
    }
    case SAVE_COMMENT: {
      const comments = state.map((comment) => (comment.id === action.id
        ? { ...comment, textComment: action.comment }
        : comment
      ));
      localStorage.setItem('comments', JSON.stringify(comments));
      return comments;
    }
    default:
      return state;
  }
};
export default comments;
