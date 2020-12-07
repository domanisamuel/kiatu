import React from 'react'
import styles from './clothing.module.scss'

import Search from '../search/search'

const Clothing: React.FC =()=> {
    return (
        <div className={styles.clothing}>
            <div className={styles.top}>
                <h1>Clothing</h1>
            </div>
            <Search
                placeholder='Search clothing'
            />
        </div>
    )
}
export default Clothing