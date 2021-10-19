import React,{useContext, useState, useEffect} from 'react'
import {CartContext} from '../../screens/CartContext'

const NavAction = ({price, prod}) => {
	const {cart} = useContext(CartContext)
	const [vCart, setVCart] = useState([])

	useEffect(() => {
		setVCart(cart)
	}, [])

	useEffect(() => {
		console.log(vCart);
		localStorage.setItem('tempCart', JSON.stringify(vCart))
	}, [vCart])

	const addToCart = () => {
		setVCart(c=> [...c, prod])
	} 

	return(
		<div className="openProduct_nav">
			<span>
				<i className="las la-shopping-cart"></i>
				Carrito ( { vCart?.length } )
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