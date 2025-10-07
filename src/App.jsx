import { useState } from 'react'
import List from './components/List';
import Input from './components/Input';
import Button from './components/Button';
import './App.css'

function App() {
    const addTask = () => {
        if(text !== ""){
            (setTodo([ ...todo ,text ]))
            setText("")
        }
    }
    const deleteTask = (index) => {
        return setTodo(todo.filter((_,i) => i !== index))
    }
  const numChangeHandler = (e) => {
    setText(e.target.value);
  }
  const firstTask = ([]);
  const [todo,setTodo] = useState(firstTask);
  const [text, setText] = useState("");
  
  return (
    <>
      <h1>Taskを入れてください</h1>
      <Input text={text} numChangeHandler={numChangeHandler}/>
      <Button addTask={addTask} />
      <List todo={todo} deleteTask={deleteTask}/>
    </>
  )
}

export default App
