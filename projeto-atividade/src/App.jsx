import { useState } from 'react';
import './App.css';
import Components_01 from './Components_01';
import Components_02 from './Components_02';
import Components_03 from './Components_03';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>

      <Components_03 />

      <Components_02 />
      
    </div>
  );
}

export default App;
