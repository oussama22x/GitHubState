import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchForm from './compenet/SearchForm'
import GetProfile from './compenet/GetProfile'  
function App() {
  const [userName, setUserName] = useState('')
  const handelUserSerach = (username) => {
    setUserName(username);
  };
  return (
    <div className='container'>
      {
      !userName ? //userNamen does not have valid value?
      (<SearchForm Onsearch={handelUserSerach}/>)
        : //else
      (<GetProfile username={userName}/>)
      }
    </div>
  )
}

export default App
