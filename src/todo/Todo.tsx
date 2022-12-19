import { off } from "process";
import { useState, useRef } from "react";
import TodoList from './TodoList';

const Todo = () => {
    const no = useRef(1)
    const [todos,setTodos] = useState([{}]);
    const [todo,setTodo] = useState('');
    
    const handleOnKeyDown = (e:any) => {
        if (e.key == 'Enter') {
            let text = e.target.value;
            setTodos((todos:any):any => [
                ...todos, 
                {
                    id:no.current++,
                    text:text,
                    isDel:false
                }
            ]);
            setTodo('');
        }
    };


    const todoClickEvent = {
        'del' : (id:string) => {
            setTodos(todos.filter((todo:any) => todo.id !== id));
        },
        'complete' : (id:string) => {
            setTodos(todos.map((todo:any) => todo.id === id ?
                {
                    ...todo,
                    isDel:true
                }
                : todo
            ));
        }
    }


    return (
        <div id="todolist-container">
            <div className="text-center">
                <div id="todoDayStr" className="bold f23"></div>
                <input 
                    id="todoInput" 
                    name="todoInput" 
                    type="text" 
                    value={todo}
                    className="todo-input text-center" 
                    placeholder="메모를 작성하고 Enter를 눌러주세요."
                    onChange={(e) => {setTodo(e.target.value);}}
                    onKeyDown={handleOnKeyDown}
                />
            </div>
            <div className="todo left text-center">
                <span className="f17 bold">To Do List</span>
                <div id="todolist">
                    {
                        todos.filter((todo:any) => todo.isDel == false).map((todos:any) =>
                            <TodoList id={todos.id} text={todos.text} isDel={todos.isDel} todoClickEvent={todoClickEvent}/>
                        )
                    }
                </div>

            </div>
            <div className="todo right text-center">
                <span className="f17 bold">Finish List</span>
                <div id="finishlist">
                    {
                        todos.filter((todo:any) => todo.isDel == true).map((todos:any) =>
                            <TodoList id={todos.id} text={todos.text} isDel={todos.isDel} todoClickEvent={todoClickEvent}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};




export default Todo;