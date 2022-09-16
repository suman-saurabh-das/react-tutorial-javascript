import './App.css';

// import Greet from './components/Greet';    // default export
// import {Greet} from './components/Greet';  // named export
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import GreetProps from './components/GreetProps';
import WelcomeProps from './components/WelcomeProps'


function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      {/* <Welcome/> */}
      {/* <Hello /> */}
      
      {/* Passing props to functional component */}
      <GreetProps name={"Bruce"} heroName={"Batman"}>
        <p>I believe what doesn't kill you simply makes you, stranger.</p>
      </GreetProps>
      <GreetProps name={"Clark"} heroName={"Superman"}>
        <button>Laser Eyes !</button>
      </GreetProps>

      {/* Passing props to class component */}
      <GreetProps name={"Diana"} heroName={"Wonder woman"} />
      <WelcomeProps name={"Bruce"} heroName={"Batman"} />
      <WelcomeProps name={"Clark"} heroName={"Superman"} />
      <WelcomeProps name={"Diana"} heroName={"Wonder woman"} />
    </div>
  );
}

export default App;
