import React, {useEffect, useState} from 'react';
import AddTodo from "../AddTodo/AddTodo.jsx";
import Todo from "../Todo/Todo.jsx";
import styles from "./TodoList.module.css";


export default function TodoList({filter}) {
    const [todos, setTodos] = useState(readTodos );
    const handleAdd = (todo) => setTodos([...todos, todo])
    const handleUpdate = (updated) => setTodos(
        todos.map((t) => t.id === updated.id ? updated : t)
    )
    const handleDelete = (deleted) => setTodos(
        todos.filter((t) => t.id !== deleted.id)
    )
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const filtered = getFilterdItem(todos,filter)
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {
                    filtered.map((item) => <Todo
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                        todo={item}
                        key={item.id}
                    />)
                }
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}


function getFilterdItem(todos, filter) {
    if(filter === 'all'){
        return todos;
    }
    return todos.filter((t) => t.status === filter);
}

function readTodos() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}
