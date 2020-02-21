import { CHANGE_TITLE_COLUMN } from '../actions/actions';

const columns = JSON.parse(localStorage.getItem('columns'));
const initialState = columns;

const changeTitleColumn = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE_COLUMN:
      return state.map((column) => {
        if (column.id === action.id) {
          column.title = action.title;
        }
        return column;
      });
    default:
      return state;
  }
};

export default changeTitleColumn;
