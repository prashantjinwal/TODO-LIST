import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";

const AddTOdo = () => {
    const[todo , setTodo] = useState("");

    const {handleAddTodo} = useTodos();  // useTodos is custom hook

    const HandFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo)
        setTodo("")
    }

  return (
    <>

        <form onSubmit={HandFormSubmit}>
            <div className="bg-[#302f2f] inline-block p-2 rounded-md ">
            <input type="text" className="bg-[#302f2f] pl-4 mr-2 w-[30em] outline-0  border-0 " placeholder="Task name" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className=" bg-black p-2 rounded-md px-6" type="submit" >Add</button>
            </div>
        </form>
    
    </>
  )
}

export default AddTOdo