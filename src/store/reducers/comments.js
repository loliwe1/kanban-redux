import { ADD_COMMENT } from "../actions/actions";

const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          textComment: action.comment,
          author: action.author,
          id: action.id,
          cardId: action.cardId
        }
      ];
    default:
      return state;
  }
};

export default comments;
