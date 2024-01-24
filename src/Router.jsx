
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeViews from './views/HomeViews'
import DetailView from './views/DetailView'
import LoginView from './views/LoginView'
import NavBar from './components/Common/NavBar'
import Footer from './components/Common/Footer'
import UserView from './views/UserView'

function Router() {
  

  return (
    <BrowserRouter>
    <NavBar/>
    <main>
    <Routes>
      <Route path='/' element={<HomeViews/>} />
      <Route path='/detail' element={<DetailView/>} />
      <Route path='/login' element={<LoginView/>} />
      <Route path='/userPerfil' element={<UserView/>} />
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router
