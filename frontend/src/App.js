// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Freelancer from './Freelancer';
import RegisterFreelancer from './RegisterFreelancer';
import UpdateUserFreelancer from './UpdateUserFreelancer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Freelancer/>}></Route>
          <Route path='/register' element={<RegisterFreelancer/>}></Route>
          <Route path='/update/:id' element={<UpdateUserFreelancer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;