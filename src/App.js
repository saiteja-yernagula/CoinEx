import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';


import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>

      <Route path='/contact' element={<Contact/>}/>

     </Routes>
    </BrowserRouter>

    
    <Footer/>


    
    </>
  );
}

export default App;
