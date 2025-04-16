import styles from "./todoitem.module.css";

export default function TodoItem({ item, setTodos, todos }) {
  function handleDelete() {
    console.log("Deleted the todo ", item.name);
    setTodos(todos.filter((todo) => todo.name !== item.name)); // Compare by 'name'
  }

  function handleClick() {
    console.log(item.name, " is clicked");
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }

  const strikeClass = item.done ? styles.completed : ""; 

  return (
    <div className={styles.itemName}>
      <div
        onClick={handleClick}
        className={`${styles.todoItem} ${strikeClass}`}
      >
        <span>{item.name}</span>
        <span>
          <button onClick={handleDelete} className={styles.deleteButton}>
            x
          </button>
        </span>
      </div>
    </div>
  );
}
