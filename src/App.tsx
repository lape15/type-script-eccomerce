import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import color from './assets/color';
import { increment } from './slices/test';
import { RootState } from './store';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!.</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code style={{ color: color.orange }}> App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
