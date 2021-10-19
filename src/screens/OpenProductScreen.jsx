import React, {useContext, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Card} from '../components/OpenProductScreen/Card'
import NavAction from '../components/OpenProductScreen/NavAction'
import './OpenProduct.css'

export const OpenProductScreen = React.memo(({match}) => {
	const [xProd, setXProd] = useState({})
	const {id} = match.params
	
	useEffect(() => {
		const prods = localStorage.getItem('products')
		const xProds = JSON.parse(prods);
		const [prod] = xProds.filter(x => x._id === id)

		setXProd(prod)
 	}, [])
	
	return(
		<div className="openProduct animate__animated animate__fadeIn animate__faster">
			<Link
				to="/products"
				className="openProduct_btnReturn"
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
				prod={xProd}
			/>

		</div>
	)


})