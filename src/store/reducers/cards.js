import {
  ADD_CARD,
  REMOVE_CARD,
  CHANGE_CARD_DESCRIPTION,
  CHANGE_CARD_TITLE,
} from '../actions/actions';

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
          description: '',
          creator: action.name,
        },
      ];
    case REMOVE_CARD:
      return [...state.filter((card) => card.id !== action.cardId)];
    case CHANGE_CARD_DESCRIPTION:
      return state.map((card) => {
        if (card.id === action.cardId) {
          card.description = action.description;
        }
        return card;
      });
    case CHANGE_CARD_TITLE:
      return state.map((card) => {
        if (card.id === action.cardId) {
          card.title = action.title;
        }
        return card;
      });
    default:
      return state;
  }
}

export default cards;
