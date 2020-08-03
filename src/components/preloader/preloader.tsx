import React from 'react'
import styles from './preloader.module.scss'

const Preloader: React.FC =()=> {
    return (
        <div className={styles.preloader}>
            <span className={styles.sneaker} role='img' aria-label=''> 👟</span>
            <p>Loading...</p>
        </div>
    )
}
export default Preloader