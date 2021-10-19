import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './Product.css' 

const Product = ({img, title, category, price, content, id}) => {

	return(
		<Link
		exact="true" 
	    to={{
	    	pathname: `/products/${id}`,
	    	id: id
	    }}
		className="product animate__animated animate__fadeIn animate__faster"
		>

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
		</Link>
	);

};

export default Product;

/*Product.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	content: PropTypes.array.isRequired
}*/