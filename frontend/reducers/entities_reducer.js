import { combineReducers } from 'redux';
import photosReducer from './photos_reducer';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';

const entitiesReducer = combineReducers({
  photos: photosReducer,
  users: usersReducer
});

export default entitiesReducer;
