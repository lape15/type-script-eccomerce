import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import color from './assets/color';
import { increment } from './slices/test';
import { RootState } from './store';
import LayOut from './layout';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <LayOut title="hello" />
    </div>
  );
}

export default App;
