import { Link } from "react-router-dom";


const NavBar = () => {


  return (
    <nav className="flex justify-between border-b mb-4 border-solid border-gray-500 py-2 ">
        <Link to="/" className=' text-xl font-semibold hover:bg-gradient-to-r from-pink-500 to-indigo-800 inline-block hover:text-transparent hover:bg-clip-text' >All</Link>
        <Link to="/?todos=active" className=' text-xl font-semibold hover:bg-gradient-to-r from-pink-500 to-indigo-800 inline-block hover:text-transparent hover:bg-clip-text' >Active</Link>
        <Link to="/?todos=completed" className=' text-xl font-semibold hover:bg-gradient-to-r from-pink-500 to-indigo-800 inline-block hover:text-transparent hover:bg-clip-text' >Completed</Link>
    </nav>
  )
}

export default NavBar;
