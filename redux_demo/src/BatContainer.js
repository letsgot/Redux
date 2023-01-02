import React,{useState} from 'react'
import {buybat,sellbat} from './redux/Bats/batAction';
import {connect} from 'react-redux';

function BatContainer(props) {
  console.log("bat render");
  console.log(props);
  const [number,setNumber] = useState(0);
  return (
    <>
      <h2> Number of Bats :- {props.numOfBat}</h2>
      <input type='number' value={number} onChange={e=>setNumber(e.target.value)}/>
      <button onClick={()=>{props.buybat(number)}}>Buy {number} Bat</button>
      <button onClick={()=>{props.sellbat(number)}}>Sell {number} Bat</button>
    </>
  )
}


// first method for reading from global state/store
const mapStateToProps = state=>{
    return {
        numOfBat : state.bat.numOfBat
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buybat : (number)=>dispatch(buybat(number)),
        sellbat : (number)=>dispatch(sellbat(number))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(BatContainer)