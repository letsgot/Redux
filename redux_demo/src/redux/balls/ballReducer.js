const initialState = {
    numOfBalls : 20
}

const BUY_BALL = 'BUY_BALL'
const BallReducer = (state=initialState,action)=>{
      // console.log(state);
console.log(state.numOfBalls);
      switch(action.type){
         case BUY_BALL : 
            return {...state,numOfBalls : state.numOfBalls-1}
            default :
            return state
      }
}

export default BallReducer;