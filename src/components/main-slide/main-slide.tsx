import React from 'react'
import styles from './main-slide.module.scss'

const MainSlide: React.FC =()=> {
    return (
        <div className={styles.mainslide}>
            <div className={styles.overlay}>
                <div className={styles.centered}>
                    <h1> Lexi Africana</h1>
                    {/* <button className={styles.button}>Shop now</button> */}
                </div>
            </div>
        </div>
    )
}
export default MainSlide