import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className={styles.todoList}>
      {sortTodos.map((item, index) => (
        <div key={index}>
          <TodoItem item={item} todos={todos} setTodos={setTodos} />
          {index < todos.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
