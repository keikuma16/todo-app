const Button = ({ addTask, deleteTask }) => {

  return(
    <button onClick={() => addTask()}>追加</button>
  )
   
}
export default Button;