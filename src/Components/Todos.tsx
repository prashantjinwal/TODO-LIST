
import { useTodos } from "../store/todos";
// import { Todo } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
    const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos();

    const [searchParams] = useSearchParams();
    let todosData = searchParams.get("todos");
    // console.log("~ file: Todos.tsx:10 ~ todosData:", todosData);

    let filterData = todos;

    if(todosData === "active"){
        filterData = filterData.filter((task) => 
            !task.completed
        )
    }
    if(todosData === "completed"){
        filterData = filterData.filter((task) => 
            task.completed
        )
    }

  return (
    <ul className=" main-task  mt-4">
        {
        filterData.map((todo) => {
            return <li className=' border-y border-solid px-3 border-stone-600 py-[0.8em] my-2 flex  items-center' key={todo.id}>
                    <input className="h-6 w-5"  type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />
                    
                    <label className="px-[1em] flex-initial w-full text-wrap" htmlFor="">{todo.task}</label>

                    {
                        todo.completed && (
                            <button className=" bg-red-600 px-2 py-1 rounded-md " type="button" onClick={() => handleDeleteTodo(todo.id)} >Delete</button>
                        )
                    }
                   
            </li>
        })
        }
    </ul>
    
  )
}

export default Todos;