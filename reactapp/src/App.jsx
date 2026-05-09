import React from 'react'
// import API from './Practice/API'


// Routing
// import Routing from './Practice/Routing'



// Routing
import Routing from './Practice/Routing'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


// Tours
// import Tour from './Practice/Tours'


// Shpping Card
// import ShopingCard from './Practice/ShopingCard'




// Components
// import Header from './Components/Header'
// CSS
// import './Header.css'

// Practice
// import Practice from './Practice/Practice'

// CSS
// import './Practice.css'


// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Practice/Product'
import ProductDetail from './Practice/ProductDetail'
import Footer from './Components/Footer'
// import API from './Practice/API'

// Components
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
    <Route path='/product' element={<Product/>}/>
    <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>

    <Footer/>

    </BrowserRouter>


   

      {/* <API/> */}





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