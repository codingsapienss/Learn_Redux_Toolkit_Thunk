import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateForm from './Components/CreateForm'
import Navbar from './Components/Navbar'
import Lists from './Components/Lists'
import UpdateUser from './Components/UpdateUser'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<CreateForm />} />
        <Route exact path='/lists' element={<Lists />} />
        <Route exact path='/updateUser/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  )
}

export default App