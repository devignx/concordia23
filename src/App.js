import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
