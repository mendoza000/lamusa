import React, {useState} from 'react'
import {Link} from 'react-router-dom' 
import '../HomeScreen/Product.css'

const Product = ({title, img, price, category, content, id}) => {

	return(
	    <Link 
	    	exact="true" 
	    	to={{
	    		pathname: `/products/${id}`,
	    		id: id
	    	}}
			className="products_category_product animate__animated animate__fadeIn animate__faster"
			>
			<div>
				<img src={img} alt={title}/>
				<div className="product_circle"></div>
			</div>
			<div>
				<span>{title}</span>
				<span>{price}$</span>
			</div>
		</Link>
	)

}

export default Product