import React, { useRef } from "react";
import './InputField.css'

interface inputProps{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: inputProps) =>{
    const inputRef = useRef<HTMLInputElement>(null);
    
    return(
        <> 
        <form className = 'input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur;
        }}>
            <input 
            ref = {inputRef}
            type= 'input' 
            value = {todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder='Enter a task' className ='input_box'></input>
            <button className='input_submit' type = 'submit'>Go</button>
        </form>
        </>
    );
};

export default InputField;