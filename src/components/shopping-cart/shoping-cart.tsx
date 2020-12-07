import React, { useState } from 'react'
import styles from './shopping-cart.module.scss'

import { ReactComponent as CartIcon } from '../../assets/icons/cart-big.svg'

const ShoppingCart: React.FC =()=> {
    const [ cart, setCart ] = useState([])
    return (
        <div className={styles.cart}>
            <h1>Cart:)</h1>
            <CartIcon style={cart.length > 0 ? {display:'none'} : {display:'inline'}}/>
            <div className={styles.checkout}>
                <button style={cart.length > 0 ? {display:'none'} : {display:'inline'}}>START SHOPPING</button>
                <button style={cart.length < 1 ? {display:'none'} : {display:'inline'}}>CONTINUE SHOPPING</button>
                <button style={cart.length < 1 ? {display:'none'} : {display:'inline'}}>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    )
}
export default ShoppingCart