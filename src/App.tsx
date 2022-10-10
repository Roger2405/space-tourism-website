


import { Routes, Route } from 'react-router-dom'
import Header from './components/Navigation'
import Destination from './pages/Destination'
import Home from './pages/Home'
import './index.scss';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App
