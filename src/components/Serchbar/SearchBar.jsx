import styles from './SearchBar.module.css'

export default function SearchBar() {

  return (
    <div className={styles.searchContainer}>
      <input id={styles.inputs} type='search' placeholder="Search..." />
      <button id={styles.btn}>Buscar</button>
    </div>
  )


}

