import Navbar from './components/Navbar/Navbar'
import Products from "./components/Products/Products"
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path='/Products' element={ <Products /> } />
                <Route path='/About' element={ <About /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
