import './App.css';
import { ParentDiv } from './modal/components/parent';
import { ParentTimer } from './timer/components/parentDiv';

function App() {
  return (
    <div className="App">
      <h1>CostumerGlu FrontEnd Assignment</h1>
      <ParentTimer />
      <br/>
      <br/>
      <ParentDiv />
    </div>
  );
}

export default App;
