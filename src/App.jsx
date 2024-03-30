import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Info from './Components/Info/Info'
import Specialities from './Components/Specialities/Specialities'
import Myworks from './Components/Myworks/Myworks'
import Froms from './Components/form/Froms'
import Exp from './Components/Exp/Exp'
import Education from './Components/Education/Education'


function App() {

  return (
    <div >
      <div style={{padding:'15px 50px' ,display:'flex', flexDirection:'column'}}>

    <Navbar/>
    <Info/>
      </div>
    <Specialities/>
    <Myworks/>
    <Exp/>
    <Education/>
    <Froms/>
    
    </div>
  )
}

export default App
