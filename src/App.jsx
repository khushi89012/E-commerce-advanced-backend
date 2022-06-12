import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Login } from './components/login'
import { Home } from './components/home'
import { Body } from './components/body'
import { Sign } from './components/sign'
// import {Footer} from './components/footer'
import { Main } from './components/main'
// import { PrivateComponent } from './components/privateComponent'





function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/body" element={<Body />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/main" element={<Main />} />



      </Routes>
      {/* <Footer/> */}



    </div>
  )
}

export default App
