import { useEffect, useRef } from "react";
import Child from "./child";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const email = useRef(null);
  const childRef = useRef(null);

  useEffect(()=>{
    firstNameRef.current.focus();
  }, [])

  const inputHandler = (e) => {
    if (e.keyCode === 13) {
      if (e.target.name === "firstName")
        lastNameRef.current.focus();
      else if (e.target.name === "lastName")
        email.current.focus();
      else if (e.target.name === "email")
        childRef.current.focus();
    }
  }

  return (
    <div className="App">
      <div>First Name</div>
      <input type="text" name="firstName" onKeyDown={inputHandler} ref={firstNameRef} /><br />
      <div>Last Name</div>
      <input type="text" name="lastName" onKeyDown={inputHandler} ref={lastNameRef} /><br />
      <div>Email</div>
      <input type="text" name="email" onKeyDown={inputHandler} ref={email} />
      <div>Forward Ref-used to reference child elements from parent</div>
      <Child type="text" name="childElement" onKeyDown={inputHandler} ref={childRef} />
    </div>
  );
}

export default App;
