import Register from './pages/register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/signin/SignIn'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'
import MyHotelLayout from './components/MyHotelLayout/MyHotelLayout'
import Sidebar from './components/MyHotelLayout/sidebar/Sidebar'
import MyHotels from './pages/myHotels/MyHotels'
import AddHotel from './pages/myHotels/addHotel/AddHotel'
import MyHotelList from './pages/myHotels/myHotelList/MyHotelList'
import EditMyHotel from './pages/myHotels/editHotel/EditMyHotel'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path='/user/myHotels' element={
        <MyHotelLayout>
          <MyHotels />
        </MyHotelLayout>
      }
      />
      <Route path='/user/myHotels/add-hotel' element={
        <MyHotelLayout>
          <AddHotel />
        </MyHotelLayout>
      }
      />
      <Route path='/user/myHotels/edit-hotel/:id' element={
        <MyHotelLayout>
          <EditMyHotel />
        </MyHotelLayout>
      }
      />
      <Route path='/user/myHotels/lists' element={
        <MyHotelLayout>
          <MyHotelList />
        </MyHotelLayout>
      }
      />
      <Route path='/register' element={<Register />} />
      <Route path='/sign-in' element={<Signin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
