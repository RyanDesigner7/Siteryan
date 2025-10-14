import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Servicos from './pages/Servicos.jsx'
import Contato from './pages/Contato.jsx'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/contato' element={<Contato />} />
      </Routes> </BrowserRouter>
  )
}
export default App