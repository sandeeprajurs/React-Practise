import {useState, useMemo} from "react";
import Child from "./child";

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = ()=>{
    setCount(count+1);
  }

  //as we are not passing any param to child..so it wont re-render
  // const memoChild = useMemo(() => {
  //   return <Child></Child>
  // }, []);

  //child renders only when count increases
  const memoChild = useMemo(() => {
    return <Child></Child>
  }, [count]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={clickHandler}>Increse Count</button>
      <div>Normal Component</div>
      <Child/>
      <div>Memoised Component</div>
      {memoChild}
    </div>
  );
}

export default App;
