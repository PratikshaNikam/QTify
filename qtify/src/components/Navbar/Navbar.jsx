import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import React from "react";



function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a song of your choice"></Search>
      <Button>Give Feedback</Button>
    </nav>
    
  )
}

export default Navbar;