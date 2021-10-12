import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import desayunoImg from '../assets/desayuno.png'
import regaloUp from '../assets/regaloUp.png'
import './ProductList.css'

const ProductList = ({cart, setCart}) => {
	
	return(
		<div className="productList">
			<div>
				<h2 className="productList_title">
					Productos Principales
				</h2>

				<button>
					Ver todos...
				</button>
			</div>

			<Product
				img={desayunoImg}
				title={"Title of product"}
				category={"Desayuno"}
				price={"14.000$"}
				cart={cart}
				setCart={setCart}/>

			<Product
				img={regaloUp}
				title={"Title of product"}
				category={"Desayuno"}
				price={"12.000$"}
				cart={cart}
				setCart={setCart}/>

			<Product
				img={desayunoImg}
				title={"Title of product"}
				category={"Desayuno"}
				price={"16.000$"}
				cart={cart}
				setCart={setCart}/>

		</div>
	)

}

export default ProductList

ProductList.propTypes = {
	setCart: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired
}