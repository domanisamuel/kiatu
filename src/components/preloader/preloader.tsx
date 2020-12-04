import React from 'react'
import styles from './preloader.module.scss'

import Spinner from '../Spinner/spinner'

const Preloader: React.FC =()=> {
    return (
        <div className={styles.preloader}>
            <Spinner/>
        </div>
    )
}
export default Preloader