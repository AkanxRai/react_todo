import Todo from "./components/Todo";
import Header from "./components/Header";
import styles from "./app.module.css"
function App() {
  return (
    <div className={styles.body}>
      <Header/>
      <Todo />
    </div>
  );
}

export default App;
