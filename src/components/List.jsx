const List = ({ todo, deleteTask }) => {
    if(todo.length === 0){
        return <p>まだTaskはありません</p>
    }
    return(
    <ul>
        {todo.map((todo,_todo)=>(
        <li key={_todo}>
            {todo}
            <button onClick={() => deleteTask(_todo)}>消去</button>
        </li>
        ))}
    </ul>
    )
}
export default List;