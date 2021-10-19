import React, {useContext} from 'react'
import {CartContext} from '../../screens/CartContext'

const CartItem = ({item}) => {
	const {cart, setCart} = useContext(CartContext)

	const delProduct = (e) => {
		const id = e.target.id
		const purge = cart.filter(x => x._id !== id)
		setCart(purge)
	}

	return(
		<div className="cart_item">
			<img src={item.img} alt={item.title}/>
			<div className="cart_item_divSpan">
				<span>
					{item.title}
				</span>
				<span>
					{item.price}
				</span>

				<button id={item._id} onClick={delProduct}>
					Eliminar
				</button>
			</div>
		</div>
	)

}

export default CartItem