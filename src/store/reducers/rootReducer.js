import { combineReducers } from 'redux';
import cards from './cards';
import app from './app';
import columns from './columns';
import popupCard from './popupCard';
import comments from './comments';

const todoApp = combineReducers({
  cards,
  app,
  columns,
  popupCard,
  comments,
});
export default todoApp;
