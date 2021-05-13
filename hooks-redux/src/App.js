import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from "./store/actions/action";

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  useEffect(()=>{
    let a= increment();
    debugger
  }, []);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment Count</button>
      <button onClick={() => dispatch(decrement())}>Decrement Count</button>
    </div>
  );
}

export default App;
