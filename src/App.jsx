import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Donation from './Pages/Donation/Donation'
import Events from './Pages/Events/Events'
import Blog from './Pages/Blog/Blog'
import Admin from './Pages/Admin/Admin'
import Register from './Pages/Register/Register'
import NotFound from './Pages/NotFound/NotFound'
import Navbar from './Pages/Navbar/Navbar'
import DataLoad from './Pages/DataLoad/DataLoad'
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute'
import Login from './Pages/Login/Login'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<DataLoad />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/events/:id" element={<PrivateRoute>
            <Events />
          </PrivateRoute>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
