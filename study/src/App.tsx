import styles from "./App.module.css";
import Module from "./components/Module";

export default function App() {
  return (
    <>
      <h1 className={styles.title}>CSS MODULE</h1>
      <h2 className="title">Text</h2>
      <Module />
    </>
  );
}
