import { useState } from 'react';
import DisplayBox from './Components/DisplayBox';
import ControlButtons from './Components/ControlButtons';
import Numbers from './Components/Numbers';
import Operators from './Components/Operators';

function App() {
     const [current, setCurrent] = useState('0');
     const [last, setLast] = useState('0');
     const [lastIsEmpty, setLastIsEmpty] = useState(true);

     return (
          <div className="App">
               <DisplayBox current={current} last={last} />
               <ControlButtons
                    current={current}
                    setCurrent={setCurrent}
                    setLast={setLast}
                    setLastIsEmpty={setLastIsEmpty}
               />
               <Numbers current={current} setCurrent={setCurrent} />
               <Operators
                    current={current}
                    last={last}
                    setCurrent={setCurrent}
                    setLast={setLast}
                    lastIsEmpty={lastIsEmpty}
                    setLastIsEmpty={setLastIsEmpty}
               />
          </div>
     );
}

export default App;
