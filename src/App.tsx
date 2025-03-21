import './App.css'
import { Box } from '@mui/material';
import NotFound from './components/NotFount';
import HomePage from './pages/HomePage'
import {  Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import AdminRoute from './components/AdminRoute';
import AdminDashboard from './pages/AdminDashboard';
import AddMenu from './components/AddMenu';
import ViewMenuItems from './components/ViewMenuItems';
import AddMenuItemWrapper from './components/AddMenuItemWrapper';
import ContactUs from './components/ContactUs';
import Reservation from './components/Reservation';


function App() {

  return (
    <Box sx={{ width:"100%", flexGrow: 1, backgroundColor:"black" }}>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path="/*" element={<NotFound/>} />
          
          {/* Protected Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-menu" element={<AddMenu />} />
          <Route path="/admin/view-menu/:categoryId" element={<ViewMenuItems />} />
          <Route path="/admin/add-menu-item/:categoryId" element={<AddMenuItemWrapper />} />
        </Route>
        </Routes>
      <Footer/>
    </Box>
  )
}

export default App
