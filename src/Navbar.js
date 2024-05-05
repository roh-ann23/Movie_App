// import React, { Component } from 'react'
import styles from './navbar.module.css'


export default function Navbar (props) {
  // render() {
    const {cartCount, favCount} = props;
    return (
      <div className={styles.Nav}>
        <div className={styles.title}>
            MovieApp
        </div>
        <div className={styles.CartIconContainer1}>
            <img className={styles.CartImg} src='https://cdn-icons-png.flaticon.com/128/4348/4348259.png' alt='FavIcon' />
            <span className={styles.CartCount}>{favCount}</span>
        </div>

        <div className={styles.CartIconContainer}>
            <img className={styles.CartImg} src='https://cdn-icons-png.flaticon.com/128/1062/1062974.png' alt='CartIcon' />
            <span className={styles.CartCount}>{cartCount}</span>
        </div>
        
      </div>
    )
  // }
}