import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"",done:false});

  function handleAdd(e) {
    e.preventDefault();
    if (todo.name.trim()) {
      setTodos([...todos, todo]);
      setTodo({name:"",done:false});
    }
  }

  return (
    <form className={styles.todoform} onSubmit={handleAdd}>
      <div className={styles.inputContainer}>
        <input
          className={styles.mordernInput}
          type="text"
          onChange={(e) => setTodo({...todo, name: e.target.value})}
          value={todo.name}
          placeholder="Enter the todo item...."
        />
        <button type="submit" className={styles.mordernButton}>
          Add
        </button>
      </div>
    </form>
  );
}
