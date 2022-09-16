import './App.css';

// import Greet from './components/Greet'; // default export
import {Greet} from './components/Greet'; // named export

import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
