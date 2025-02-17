import { createContext,use,useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : " ",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (todo,id) => {},
    delteTodo : (id) => {},
    toggleTodo : (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider