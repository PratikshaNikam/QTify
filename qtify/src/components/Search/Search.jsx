import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import React from "react";


function Search({ placeholder }) {
  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper}>
        <div>
          <input
            placeholder={placeholder}
            className={styles.search}
          />
        </div>
        <div>
          <button className={styles.searchButton}>
            <SearchIcon/>
          </button>
        </div>
      </form>
   </div>
  )
}

export default Search;