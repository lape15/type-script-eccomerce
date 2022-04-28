import { Routes, Route } from 'react-router-dom';
import './App.scss';
import LayOut from './layout';
import Navbar from './components/navbar/navbar';
import ModalContainer from './components/modal/portal';
import Collections from './layout/collections/collections';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LayOut />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <ModalContainer />
    </div>
  );
}

export default App;
