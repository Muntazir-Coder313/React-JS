import React from 'react'
import Routing from './Practice/Routing'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

 



// import Tour from './Practice/Tours'


// import ShopingCard from './Practice/ShopingCard'


// import Header from './Components/Header'


// import Routing from './Practice/Routing'


// import './Header.css'


// import Practice from './Practice/Practice'


// import './Practice.css'


import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'


// import Footer from './Components/Footer'
// import './Footer.css'

function App() {
  return ( 
    <>




     {/* Browser Routing */}
   <BrowserRouter>
    <Routing />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>




    {/* <Tour/> */}





    {/* Tailwind */}
    {/* <ShopingCard/> */}









    {/* <Footer/> */}



    {/* <Header /> */}
    {/* <Practice/> */}
    </>
  )
}
export default App