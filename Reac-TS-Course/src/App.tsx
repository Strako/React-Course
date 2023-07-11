import React, { useState } from 'react';
import FirstPage from './Pages/MyFisrtPage'
import InputField from './Components/Inputs/InputField'
import todoModel from './Models/TodoModel'
import './App.css'
import TodoList from './Components/List/TodoList';


const App = (): JSX.Element => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todoModel[]>([]);

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };


  console.log(todo);
  console.log(todos);
  return (
    <>
      <div className='App'>
        <span className="heading" style={{ color: "white" }}>Taskify!</span>
        <InputField todo ={todo} setTodo = {setTodo} handleAdd ={handleAdd}/>
        <span style={{color: "white"}}>{}</span>
        <TodoList todos = {todos} setTodos = {setTodos}/>
      </div>

    </>
  );
};

export default App;


