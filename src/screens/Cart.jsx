import React, {useEffect, useContext, useState} from 'react'
import {CartContext} from './CartContext'
import CartList from '../components/CartScreen/CartList'
import './Cart.css'

const Cart = () => {

	const [total, setTotal] = useState(0)
	const {cart, setCart} = useContext(CartContext)

	const getTotal = () => {
		let total = 0

		cart.forEach((item) => {
			total = total + item.price
		})

		setTotal(total)
	}
	
	useEffect(() => {
		setTotal(0)
		getTotal()
	}, [cart])
	
	return(
		<div className="animate__animated animate__fadeIn animate__faster cart_container">
			<h2 className="cart_title">Mi Carrito</h2>

			<CartList />

			<p className="cart_total">
				Total 
				<span>{total} $</span>
			</p>

			<div className="cart_btns">
				<button className="cart_buyBtn">
					Comprar
				</button>
				<button 
					className="cart_clearBtn"
					onClick={() => setCart([])}>
					Limpiar
				</button>
			</div>
		</div>
	)

}

export default Cart