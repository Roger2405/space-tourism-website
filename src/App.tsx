


import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Destination from './pages/Destination'
import Home from './pages/Home'
import './index.scss';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<Destination />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App
