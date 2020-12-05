import React from 'react'
import styles from './shortcuts.module.scss'
import className from 'classnames'

const Shortcuts: React.FC =()=> {
    return (
        <div className={styles.shortcuts}>
            <div className={className('row')}>
                <div className={className('col-md-3', styles.card)}>
                    <img src='https://cdn.shopify.com/s/files/1/0122/4569/6608/products/0819065white_620x.jpg?v=1602794676' alt='' />
                    <div className={styles.tag}>Clothing</div>
                </div>
                <div className={className('col-md-3', styles.card)}>
                    <img src='https://cdn.shopify.com/s/files/1/0122/4569/6608/products/SilverToeStrap_3_620x.jpg?v=1602797674' alt='' />
                    <div className={styles.tag}>Footwear</div>
                </div>
                <div className={className('col-md-3', styles.card)}>
                    <img src='https://cdn.shopify.com/s/files/1/0122/4569/6608/products/IMG_6750_620x.jpg?v=1602791847' alt='' />
                    <div className={styles.tag}>Beauty</div>
                </div>
                <div className={className('col-md-3', styles.card)}>
                    <img src='https://cdn.shopify.com/s/files/1/0122/4569/6608/products/Brands-1071_500x500.jpg?v=1602791792' alt='' />
                    <div className={styles.tag}>Bags</div>
                </div>
            </div>
        </div>
    )
}
export default Shortcuts