import React from 'react'
import styles from './Home.module.scss'

// components
import MainSlide from '../../components/main-slide/main-slide'

const HomePage: React.FC =()=> {
    return (
        <div className={styles.home}>
            <MainSlide/>
        </div>
    )
}
export default HomePage