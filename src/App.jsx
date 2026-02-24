import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Home from './pages/Home'
import Search from './pages/Search'
import Tags from './pages/Tags'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreateLinktag from './pages/CreateLinktag'
import MyLinktags from './pages/MyLinktags'
import About from './pages/About'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<CreateLinktag />} />
        <Route path="/my-links" element={<MyLinktags />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
