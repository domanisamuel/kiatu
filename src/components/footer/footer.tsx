import React from 'react'
import styles from './footer.module.scss'

const Footer: React.FC =()=> {
    const year = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            <p>&copy; {year} Lexi Fashion House</p>
        </div>
    )
}
export default Footer