import { ReactNode, createContext, useContext, useState } from "react";
// import { json } from "react-router-dom";


export type TodosProvderprops = {
    children : ReactNode;
}

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createAt:Date;
}

export type TodoContext ={
    todos :Todo[];
    handleAddTodo:(task:string) => void;
    toggleTodoAsCompleted:(id:string) => void;
    handleDeleteTodo:(id:string) => void;
}

export const todoContext =  createContext<TodoContext | null>(null)

export const TodosProvider = ({children}:TodosProvderprops) => {
        const[todos , setTodo] = useState<Todo[]>(() => {
            try {
                const newTodos =  localStorage.getItem("todos")  || "[]";
                return JSON.parse(newTodos) as Todo[]
            } catch (error) {
                return []
            }
        })
        const handleAddTodo = (task:string) =>{
            setTodo((prev) =>{
                const newTodos:Todo[] = [
                    {
                        id:Math.random().toString(),
                        task:task,
                        completed:false,
                        createAt:new Date()

                    },
                ...prev
                ]
                // console.log("my pre" + prev)
                // console.log(newTodos);
                localStorage.setItem("todos", JSON.stringify(newTodos))
                return newTodos;
            })
        }
        // mark completed 

        const toggleTodoAsCompleted = (id:string) => {
            setTodo((prev) => {
                let newTodos = prev.map((todo) => {
                    if(todo.id === id){
                        return {...todo , completed:!todo.completed}
                    }
                    return todo;
                })
                localStorage.setItem("todos", JSON.stringify(newTodos))
                return newTodos;
            })
        }

        // delete the indivisual data
        const handleDeleteTodo = (id:string) => {
            setTodo((prev) => {
                let newTodos = prev.filter((filterTodo) => filterTodo.id !== id);
                localStorage.setItem("todos", JSON.stringify(newTodos))
                return newTodos;
            })
        }

    return <todoContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo}}>
        {children}
    </todoContext.Provider>
}


// consumer

export const useTodos = () => {
    const todosConsumer = useContext(todoContext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");
    }

    return todosConsumer;
}