// import { legacy_createStore as createStore } from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import BallReducer from "./balls/ballReducer";
// const store = createStore(BallReducer,composeWithDevTools());
// export default store;



import { legacy_createStore as createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer,composeWithDevTools());
export default store;