import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
//<Route path="/filme/:id" element={<Movie />} />

export default RoutesApp