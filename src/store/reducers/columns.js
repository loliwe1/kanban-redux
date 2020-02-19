import { CHANGE_TITLE_COLUMN } from "../actions/actions";

const initialState = {
  columns: JSON.parse(localStorage.getItem("columns"))
};

const changeTitleColumn = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE_COLUMN:
      return (state.columns.filter(column => {
        return column.id === action.id;
      }).title = action.title);
    default:
      return state;
  }
};

export default changeTitleColumn;
