import React from 'react'
import styles from './preloader.module.scss'

import Spinner from '../Spinner/spinner'

const Preloader: React.FC =()=> {
    return (
        <div className={styles.preloader}>
            <span className={styles.sneaker} role='img' aria-label=''> 👟</span>
            <Spinner/>
        </div>
    )
}
export default Preloader