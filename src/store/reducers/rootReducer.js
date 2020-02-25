import { combineReducers } from 'redux';
import cards from './cards';
import app from './app';
import columns from './columns';
import comments from './comments';

const todoApp = combineReducers({
  cards,
  app,
  columns,
  comments,
});
export default todoApp;
