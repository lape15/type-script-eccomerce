
import './App.scss';
import LayOut from './layout';
import Navbar from './components/navbar/navbar';
import ModalContainer from './components/modal/portal';

function App() {
  return (
    <div className="App">
         <Navbar/>
        <LayOut title="hello" />
        <ModalContainer />
    </div>
  );
}

export default App;
