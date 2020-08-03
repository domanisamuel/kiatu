import React from 'react'
import styles from './Home.module.scss'

const HomePage: React.FC =()=> {
    return (
        <div className={styles.home}>
            <h1>Welcome to Bathu Sneakers! <span role='img' aria-label=''> 👟</span></h1>
        </div>
    )
}
export default HomePage