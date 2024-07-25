import Register from './pages/register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/signin/SignIn'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/sign-in' element={<Signin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
