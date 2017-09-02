import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';

const logger = createLogger();
const store = applyMiddleware(logger, reduxThunk)(createStore);

export default store(rootReducer);
