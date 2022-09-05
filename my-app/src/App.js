import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { Navigate, Route , Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/' element={<Navigate to="/SignUp" />}/>
      </Routes>

    </div>
  );
}

export default App;
