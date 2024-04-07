import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './components/Home.jsx'
import GuiEduPage from './components/GuiEduPage.jsx'



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [openGuiPageToggle, setOpenGuiPageToggle] = useState(true)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const OpenGuiPage = () => {
    setOpenGuiPageToggle(!openGuiPageToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} OpenGuiPage={OpenGuiPage} openGuiPageToggle={openGuiPageToggle} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      {openGuiPageToggle ? <Home /> : <GuiEduPage />}

    </div>
  )
}

export default App