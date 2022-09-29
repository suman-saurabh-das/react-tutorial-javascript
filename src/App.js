import './App.css';

// import Greet from './components/section1/Greet';    // default export
// import {Greet} from './components/section1/Greet';  // named export
// import Welcome from './components/section1/Welcome';
// import Hello from './components/section1/Hello';
// import GreetProps from './components/section1/GreetProps';
// import WelcomeProps from './components/section1/WelcomeProps'
// import Message from './components/section1/Message';
// import Counter from './components/section2/Counter';
// import GreetPropsDestructuring from './components/section2/GreetPropsDestructuring';
// import WelcomePropsDestructuring from './components/section2/WelcomePropsDestructuring';
// import FunctionClick from './components/section2/FunctionClick';
// import ClassClick from './components/section2/ClassClick';
// import EventBind from './components/section2/EventBind';
import ParentComponent from './components/section2/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      {/* <Welcome/> */}
      {/* <Hello /> */}
      
      {/* Passing props to functional component */}
      {/* <GreetProps name={"Bruce"} heroName={"Batman"}>
        <p>I believe what doesn't kill you simply makes you, stranger.</p>
      </GreetProps>
      <GreetProps name={"Clark"} heroName={"Superman"}>
        <button>Laser Eyes !</button>
      </GreetProps>
      <GreetProps name={"Diana"} heroName={"Wonder woman"} /> */}

      {/* Passing props to class component */}
      {/* <WelcomeProps name={"Bruce"} heroName={"Batman"} />
      <WelcomeProps name={"Clark"} heroName={"Superman"} />
      <WelcomeProps name={"Diana"} heroName={"Wonder woman"} /> */}

      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <GreetPropsDestructuring name={"Bruce"} heroName={"Batman"}/> */}
      {/* <WelcomePropsDestructuring name={"Clark"} heroName={"Superman"} /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}

      {/* <EventBind /> */}

      <ParentComponent />
    </div>
  );
}

export default App;
