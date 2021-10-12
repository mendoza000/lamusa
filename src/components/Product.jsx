import React from 'react'
import './Product.css'

const Product = ({img, title, category, price}) => {
	
	return(
		<div className="product">
			<div className="circle"></div>
			<img src={img} alt={title}/>
			<p className="product_title">
				{title}
			</p>
			<div>
				<span className="product_category">
					{category}
				</span>
				<span className="product_price">
					{price}
				</span>
			</div>
		</div>
	)

}

export default Product