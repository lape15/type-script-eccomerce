
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { increment } from './slices/test';
import { RootState } from './store';
import LayOut from './layout';
import Navbar from './components/navbar/navbar';

function App() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
         <Navbar/>
        <LayOut title="hello" />
    </div>
  );
}

export default App;
