import React from 'react'
import styles from './Home.module.scss'

// components
import MainSlide from '../../components/main-slide/main-slide'
import Advert from '../../components/advert/advert'
import Shortcuts from '../../components/shortcuts/shortcuts'

const HomePage: React.FC =()=> {
    return (
        <div className={styles.home}>
            <MainSlide/>
            <Advert/>
            <Shortcuts/>
        </div>
    )
}
export default HomePage