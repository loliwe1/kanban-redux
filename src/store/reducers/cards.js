import { ADD_CARD } from "../actions/actions";
import { REMOVE_CARD } from "../actions/actions";

const initialState = [];

function cards(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          title: action.title,
          id: action.id,
          columnId: action.columnId,
          description: "",
          creator: action.name
        }
      ];
    case REMOVE_CARD:
      return [
        ...state.cards.filter(card => {
          return card.id !== action.id;
        })
      ];
    default:
      return state;
  }
}

export default cards;
