import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import ControllerScreen from './Screens/ControllerScreen';

// import {db} from './firebase'

function App() {
  return (
    <BrowserRouter>
      <main>
          <Routes>
            <Route path='/' element = {<HomeScreen/>}/>
            <Route path='/upravljac' element = {<ControllerScreen/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
