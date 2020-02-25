import { CHANGE_TITLE_COLUMN } from '../actions/actions';

if (!localStorage.getItem('columns')) {
  localStorage.setItem(
    'columns',
    JSON.stringify([
      { id: 1, title: 'TODO' },
      { id: 2, title: 'In Progress' },
      { id: 3, title: 'Testing' },
      { id: 4, title: 'Done' },
    ]),
  );
}

const initialState = JSON.parse(localStorage.getItem('columns'));

const changeTitleColumn = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE_COLUMN: {
      const columns = state.map((column) => {
        return column.id === action.id ? { ...column, title: action.title } : column;
      });
      localStorage.setItem('columns', JSON.stringify(columns));
      return columns;
    }
    default:
      return state;
  }
};

export default changeTitleColumn;
