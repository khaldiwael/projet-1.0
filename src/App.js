import './App.css';
import { Router, Routes, Route ,Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import ListMovies from './Component/listMovies';
import Details from './Component/Details';
import AddMovies from './Component/AddMovies';



function App() {
  return (
    <div className="App">
      <div className='BG'>
        <div className='menu'>
          <Link className='LMenu' to='/' >list movies</Link>
          <Link className='LMenu' to='/add' >add movies</Link>
          <Link className='LMenu' to='/' >acceuil</Link>
        </div>
      </div>


      <Routes>
        <Route path="/" element={<ListMovies />} />
        <Route path="/add" element={<AddMovies />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      
      {/* <Router>
        <NavBar/>
        <Routes>
          <Route path='/contacts' element={<ListContacts/>}/>
          <Route path='/' element={<Acceuil/>}/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
