import Layout from "./components/Layout/Layout"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/register/SignUp";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />
        <Route
          path="/sign-in"
          element={
            <Login />
          }
        />
        <Route
          path="/sign-up"
          element={
            <SignUp />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
