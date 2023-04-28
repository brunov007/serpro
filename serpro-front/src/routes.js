import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Main } from './pages/Main'
import { ForgotPassword } from './pages/ForgotPassword'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forget' element={<ForgotPassword />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/main' element={<Main />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp