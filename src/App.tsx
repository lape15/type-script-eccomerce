import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { increment } from './slices/test';
import { RootState } from './store';
import Navbar from './components/navbar/navbar';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
        <Navbar/>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            count is: {count}
          </button>
        </p>
    </div>
  );
}

export default App;
