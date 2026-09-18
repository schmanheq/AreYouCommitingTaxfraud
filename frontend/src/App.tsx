import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css'
import Starter from './components/Starter'
import Game from './components/Game';

export default function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Starter/>} />
        <Route path='/game' element={<Game/>}/>
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
     </BrowserRouter>
    
    </>
  )
}


