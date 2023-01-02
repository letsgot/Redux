import { combineReducers } from "redux";
import BallReducer from "./balls/ballReducer";
import BatReducer from "./Bats/batReducer";
import userReducer from "./users/userReducer.js";
const rootReducer = combineReducers({
    ball:BallReducer,
    bat:BatReducer,
    user:userReducer
})
export default rootReducer;