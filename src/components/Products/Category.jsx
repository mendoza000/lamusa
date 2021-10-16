import React from 'react'
import Product from './Product'
import pImg from '../../assets/cesta.png'
import './Category.css'

const Category = ({title,icon}) => {
	
	const content = ["Cesta", "Vino", "Carta", "Mermelada", "Chocolate", "Perfume"]

	return(
		<>
			<span className="products_category_title">
				{icon}
				{title}
			</span>
			<div className="products_category_container">
				
				<Product 
					title={"Title of product"}
					price={"14.000$"}
					img={pImg}
					category={title}
					content={content}
				/>
				<Product 
					title={"Title of product"}
					price={"14.000$"}
					img={pImg}
					category={title}
					content={content}
				/>
				<Product 
					title={"Title of product"}
					price={"14.000$"}
					img={pImg}
					category={title}
					content={content}
				/>

			</div>
		</>
	)

}

export default Category