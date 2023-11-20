import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/login" exact element={<Login />}/>
          <Route path="/register" exact element={<Register />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
