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
// import ParentComponent from './components/section2/ParentComponent';
// import UserGreeting from './components/section2/UserGreeting';
// import NameList from './components/section2/NameList';
// import Stylesheet from './components/section2/Stylesheet';
// import Inline from './components/section2/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/section3/Form';
// import LifecycleA from './components/section3/LifecycleA';
// import LifecycleC from './components/section3/LifecycleC';
// import Fragment from './components/section3/Fragment';
// import Table from './components/section3/Table';
// import ParentComp from './components/section3/ParentComp';
// import RefDemo1 from './components/section3/RefDemo1';
// import RefDemo2 from './components/section3/RefDemo2';
// import FocusInput from './components/section3/FocusInput';
// import ForwardRefInputParent from './components/section3/ForwardRefInputParent';
// import PortalDemo from './components/section4/PortalDemo';
// import Hero from './components/section4/Hero';
// import ErrorBoundary from './components/section4/ErrorBoundary';
import ClickCounter from './components/section4/ClickCounter';
import HoverCounter from './components/section4/HoverCounter';

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

      {/* <ParentComponent /> */}

      {/* <UserGreeting /> */}

      {/* <NameList />  */}

      {/* <Stylesheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <h1 className='error'>Error Message</h1>
     <h1 className={styles.success}>Yay ! Success</h1> */}

      {/* <Form /> */}

      {/* <LifecycleA /> */}

      {/* <LifecycleC /> */}

      {/* <Fragment /> */}
      {/* <Table /> */}

      {/* <ParentComp /> */}

      {/* <RefDemo1 /> */}
      {/* <RefDemo2 /> */}

      {/* <FocusInput /> */}

      {/* <ForwardRefInputParent /> */}

      {/* <PortalDemo /> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      <ClickCounter name="Das"/>
      <HoverCounter />
    </div>
  );
}

export default App;
