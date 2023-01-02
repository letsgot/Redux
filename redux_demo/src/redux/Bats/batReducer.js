const Buy_Bat = 'BUY_BAT';
const Sell_Bat = 'SELL_BAT';

const initialState = {
    numOfBat : 20
}

const BatReducer = (state = initialState,action)=>{
    //  console.log(state);
     switch(action.type){
        case Buy_Bat :
            return {...state,numOfBat : (Number)(state.numOfBat) - (Number)(action.payload)}
        case Sell_Bat :
            return {...state,numOfBat : (Number)(state.numOfBat) + (Number)(action.payload)}
        default :
            return state
     }
}

export default BatReducer;