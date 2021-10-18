import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Product from './Product'
import desayunoImg from '../../assets/desayuno.png'
import regaloUp from '../../assets/regaloUp.png'
import './ProductList.css'

const ProductList = () => {

	const content1 = ["Caja de madera", "Sandwich", "Flores", "Globo", "Carta", "Mermelada de fresa", "Chocolate", "Jugo de naranja"]
	const content2 = ["Globos", "Dos copas", "Bombones", "Vino", "Cesta"]
	
	return(
		<div className="productList">
			<div>
				<h2 className="productList_title">
					Productos Principales
				</h2>

				<Link exact={true} to='/products' onClick={()=> window.scroll(0,0)}>
					Ver todos...
				</Link>
			</div>

			<Product
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
				/>

		</div>
	)

}

export default ProductList