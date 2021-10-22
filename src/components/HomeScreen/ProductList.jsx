import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Product from './Product'
import {CartContext} from '../../screens/CartContext'
import './ProductList.css'

const ProductList = () => {
	const [top, setTop] = useState([])
	const {setCart} = useContext(CartContext)

	useEffect(() => {
		const products = localStorage.getItem('products')
		const prods = JSON.parse(products);
		setTop(prods)
	}, [])

	useEffect(() => {
		const data = localStorage.getItem('tempCart')
		if(!data) return
		const tempCart = JSON.parse(data);
		setCart(tempCart)
		localStorage.removeItem('tempCart')
	}, [])
	
	return(
		<div className="productList">
			<div>
				<h2 className="productList_title">
					Productos Nuevos
				</h2>

				<Link exact="true" to='/products' onClick={()=> window.scroll(0,0)}>
					Ver todos...
				</Link>
			</div>

			<div className="productList_list">
				{
				top?.map((item, i) => {
					if (top.length-4 < i) {
						return(
							<Product 
							title={item.title}
							category={item.category}
							price={item.price}
							img={item.img}
							content={item.content}
							description={item.description}
							id={item._id}
							key={item._id}
							/>
						)
					}
				})
				}
			</div>
		</div>
	)

}

export default ProductList