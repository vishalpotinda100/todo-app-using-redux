import {createStore} from 'redux';
import rootReducer from './Reduces';

const store=createStore(rootReducer,
    window.__RUDUX_DEVTOOLS_EXTENSION_&& window.REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;