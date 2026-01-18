import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <main className="bg-[#251949] text-center">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App;