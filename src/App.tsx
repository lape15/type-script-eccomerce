import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { increment } from './slices/test';
import { RootState } from './store';
import Navbar from './components/navbar/navbar';
import ModalContainer from './components/modal/portal';

function App() {
  // const [count, setCount] = useState(0);
  // const cart = useSelector((state: RootState) => state.cart);
  // const dispatch = useDispatch();
  return (
    <div className="App">
         <Navbar/>
         
        {/* <LayOut title="hello" /> */}
        <ModalContainer />
    </div>
  );
}

export default App;
