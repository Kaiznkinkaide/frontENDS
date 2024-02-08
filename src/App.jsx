
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import LeaguePage from './pages/home/leaguePage/LeaguePage'
import DetailPage from './pages/home/detailPage/DetailPage'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:leaguename' element={<LeaguePage/>}/>
      <Route path='/:teamname/details' element={<DetailPage/>}/>
    </Routes>
    </>
  )
}

export default App
