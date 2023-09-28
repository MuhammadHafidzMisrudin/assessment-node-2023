// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Freelancer from './Freelancer';
import RegisterFreelancer from './RegisterFreelancer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Freelancer/>}></Route>
          <Route path='/register' element={<RegisterFreelancer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;