import { OPEN_POPUP_CARD, CLOSE_POPUP_CARD } from '../actions/actions';

const initialState = '';
const popupCard = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POPUP_CARD:
      return {
        id: action.id,
      };
    case CLOSE_POPUP_CARD:
      return {
        id: '',
      };
    default:
      return state;
  }
};

export default popupCard;
