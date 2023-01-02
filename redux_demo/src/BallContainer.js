import React from 'react'
import { buyBall } from './redux/balls/ballAction';
import {connect} from 'react-redux';

function BallContainer(props) {
   console.log("ball render");
   console.log(props.numOfBalls);
    return (
    <div>
        <h2>Number of Balls : {props.numOfBalls}</h2>
        <button onClick={props.buyBall}>Buy Balls</button>
    </div>
  )
}

// first method for reading from global state/store
const mapStateToProps = state=>{
    return {
        numOfBalls : state.ball.numOfBalls
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyBall : ()=>dispatch(buyBall())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BallContainer)