import AddTOdo from './Components/AddTOdo'
import './App.css'
import Todos from './Components/Todos'
import NavBar from './Components/NavBar'

function App() {
  
  return (
    <div className=' flex justify-center '>
    <div className=' inline-flex mt-[5em] ' >
      <div className='p-3 '>
        <h1 className='my-5 font-bold text-3xl bg-gradient-to-r from-pink-500 to-indigo-800 inline-block text-transparent bg-clip-text'>REACT TODO APP</h1>
            <NavBar/>
            <AddTOdo/>
            <Todos />
       
      </div>


    </div>
    </div>
  )
}

export default App
