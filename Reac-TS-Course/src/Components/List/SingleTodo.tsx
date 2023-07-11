import React, { useEffect, useRef, useState } from "react";
import TodoModel from '../../Models/TodoModel'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './SingeTodo.css'

interface Props {
    key: number
    todo: TodoModel
    todos: TodoModel[]
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>

}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        ));
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => (
            todo.id !== id)));
    };

    const handleAddEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, todo: editTodo } : todo)
        ));
        setEdit(!edit);
    };

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form className="todos-single" onSubmit={(e) => handleAddEdit(e, todo.id)}>
            {edit ? (
                <input className="input-single-text" ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)}></input>
            ) : (
                todo.isDone ? (
                    <s className="todos-single-text">{todo.todo}</s>

                ) : (
                    <span className="todos-single-text">{todo.todo}</span>

                ))}

            <div className="icons">
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}
                >
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>

    );

};

export default SingleTodo;
