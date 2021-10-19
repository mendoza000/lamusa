import React, {useContext, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/OpenProductScreen/Card'
import NavAction from '../components/OpenProductScreen/NavAction'
import {CartContext} from './CartContext'
import './OpenProduct.css'

const OpenProductScreen = ({match}) => {
	const {cart, setCart} = useContext(CartContext)
	const [xProd, setXProd] = useState({})
	const [vCart, setVCart] = useState([])
	const {id} = match.params

	const addToCart = () => {
		setVCart(c => [...c, xProd])
	}
	
	useEffect(() => {
		const prods = localStorage.getItem('products')
		const xProds = JSON.parse(prods);
		const [prod] = xProds.filter(x => x._id === id)
		setVCart(cart)
		
		setXProd(prod)
	}, [])

	
	return(
		<div className="openProduct animate__animated animate__fadeIn animate__faster">
			<Link
				to="/products"
				className="openProduct_btnReturn"
				onClick={() => setCart(vCart)}
				>
				<i className="las la-arrow-left"></i>
			</Link>
			<h3 className="openProduct_title">
				La Musa Regalona
			</h3>

			<Card 
				title={xProd.title}
				content={xProd.content}
				img={xProd.img}
				category={xProd.category}
			/>
			
			<NavAction 
				price={xProd.price}
				cart={vCart}
				addToCart={addToCart}
			/>

		</div>
	)


}

export default OpenProductScreen