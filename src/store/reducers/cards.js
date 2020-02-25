import {
  ADD_CARD,
  REMOVE_CARD,
  CHANGE_CARD_DESCRIPTION,
  CHANGE_CARD_TITLE,
} from '../actions/actions';

const initialState = JSON.parse(localStorage.getItem('cards')) || [];

function cards(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      localStorage.setItem('cards', JSON.stringify([
        ...state,
        {
          title: action.title,
          id: action.id,
          columnId: action.columnId,
          description: '',
          creator: action.name,
        },
      ]));
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
      localStorage.setItem('cards', JSON.stringify([...state.filter((card) => card.id !== action.cardId)]));
      return [...state.filter((card) => card.id !== action.cardId)];
    case CHANGE_CARD_DESCRIPTION:

      localStorage.setItem('cards', JSON.stringify(state.map((card) => {
        return card.id === action.cardId ? { ...card, description: action.description } : card;
      })));

      return state.map((card) => {
        return card.id === action.cardId ? { ...card, description: action.description } : card;
      });

    case CHANGE_CARD_TITLE: {
      const cards = state.map((card) => {
        return card.id === action.cardId ? { ...card, title: action.title } : card;
      });
      localStorage.setItem('cards', JSON.stringify(cards));
      return cards;
    }
    default:
      return state;
  }
}

export default cards;
