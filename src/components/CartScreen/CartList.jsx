import React, {useContext} from 'react'
import {CartContext} from '../../screens/CartContext'
import CartItem from './CartItem'

const CartList = () => {
	const {cart} = useContext(CartContext)

	return(
		<div className="cart_list">
		{ cart.map((item) => {
				return <CartItem 
						key={item.id} 
						item={item} />
			})}
		</div>
	)

}

export default CartList