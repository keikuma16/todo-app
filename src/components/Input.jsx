const Input = ({ text, numChangeHandler }) => {
   
    return(
        <input type="text" value={text} onChange={numChangeHandler}/>
    )
}
export default Input;