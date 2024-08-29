import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ApplicationForm from './components/ApplicationForm';
import TopNavigation from './components/TopNavigation';
import PageNotFound from './components/PageNotFound';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/SignUp" element={<SignUp/>}></Route>
    <Route path="/ApplicationForm" element={<ApplicationForm/>}></Route>
    <Route path="/TopNavigation" element={<TopNavigation/>}></Route>
    <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
