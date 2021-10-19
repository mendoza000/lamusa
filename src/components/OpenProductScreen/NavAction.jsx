import React from 'react'

const NavAction = ({price, addToCart, cart}) => {
	
	return(
		<div className="openProduct_nav">
			<span>
				<i className="las la-shopping-cart"></i>
				Carrito ( { cart.length } )
			</span>
			<button onClick={addToCart}>
				<i className="las la-cart-plus"></i>
				Añadir
			</button>
			<span>
				{price}$
			</span>
		</div>
	)

}

export default NavAction