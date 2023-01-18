import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

//Page
import HomePage from 'pages/HomePage'
import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'
import ErrorPage from 'pages/ErrorPage'

//Components
import Navbar from 'components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-full z-0'>
      <Navbar/>
      <Routes>
        {/* signin , signup */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" caseSensitive element={<SignInPage/>}/>
        <Route path="/signup" caseSensitive element={<SignUpPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App
