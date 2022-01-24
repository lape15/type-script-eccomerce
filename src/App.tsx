
import './App.scss';
import LayOut from './layout';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
         <Navbar/>
        <LayOut title="hello" />
    </div>
  );
}

export default App;
