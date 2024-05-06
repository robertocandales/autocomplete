'use client';
import AutoComplete from './components/Autocomplete';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Auto Complete Component</h1>
      <AutoComplete
        fetchUrl='https://jsonplaceholder.typicode.com/todos'
        placeholder='Search TODO'
      />
    </main>
  );
}
