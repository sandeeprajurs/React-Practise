import {useEffect, useState } from "react";

let born = false;
function App() {

  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState();

  useEffect(()=>{
    console.log("I am born");
  }, []);

  useEffect(()=>{
    if(born)
      console.log("Nirvana attained");
  },[nirvana]);

  useEffect(() => {
    if(born)
      console.log("I make mistake and grow");
    else
      born = true;

    if(growth > 10)
      setNirvana(true);

    return function cleanUp(){
      console.log("clean up after mistake");
    }
  });

  const growHandler = () => {
    setGrowth(growth+1);
  }

  return (
    <div className="App">
      <h1>{growth}</h1>
      <button onClick={growHandler}>Grow More</button>
    </div>
  );
}

export default App;
