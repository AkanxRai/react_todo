import styles from "./footer.module.css"
export default function Footer({ completed,total }) {
  return (
    <div className={styles.footer}>
      <span className={styles.completed}>Completed todos : {completed}</span>
      <span className={styles.completed}>Total todos : {total}</span>
    </div>
  );
}