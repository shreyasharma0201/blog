import logo from './logo.svg';
import './App.css';
import User from './User';
import CUser from './ClassUser';
import State from './State';
import StateClass from './StateClass';
function App() {
  // component created inside another component.
  function Apple(){
    alert("function called");
    return (<div>Apple Component</div>)
    
  }
  return (
    <div className="App">
      <h1>Hello react</h1>
      {/* <User /> */} 
      {/* // to see functional component */}
      {/* <CUser/> */} 
      {/* // class component */}
      {/* {Apple()}  */}
      {/* // to see if nested component works */}
      {/* <Apple /> */} 
      {/* // this is how functional component should be called */}
      {/* function called shouldn't end with parenthesis */}
      {/* <button onClick={Apple()}>Click me</button> */}
      {/* <button onClick={Apple}>Click me</button> */}
      {/* <State/> */}
      <StateClass/>
    </div>
  );
}

export default App;
