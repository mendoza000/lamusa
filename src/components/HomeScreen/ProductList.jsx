import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Product from './Product'
import desayunoImg from '../../assets/desayuno.png'
import regaloUp from '../../assets/regaloUp.png'
import './ProductList.css'

const ProductList = () => {
	const [top, setTop] = useState([])

	useEffect(() => {
		const products = localStorage.getItem('products')
		const prods = JSON.parse(products);
		setTop(prods)
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

			{/*<Product
				img={desayunoImg}
				title={"Title of product"}
				category={"Desayuno"}
				price={"14.000$"}
				content={content1}
				/>

			<Product
				img={regaloUp}
				title={"Title of product"}
				category={"Desayuno"}
				price={"12.000$"}
				content={content2}
				/>

			<Product
				img={desayunoImg}
				title={"Title of product"}
				category={"Desayuno"}
				price={"16.000$"}
				content={content1}
				/>*/}

		</div>
	)

}

export default ProductList