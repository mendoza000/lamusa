import React, {useState} from 'react'
import PropTypes from 'prop-types'
import OpenProduct from './OpenProduct'
import './Product.css' 

const Product = ({img, title, category, price, cart, setCart}) => {
	const [viewProduct, setViewProduct] = useState(false)

	return(
	    <>
			<div
				className="product"
				onClick={ () => setViewProduct(true) }>
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
			
			{
				viewProduct 
				&& <OpenProduct 
					title={title}
					img={img}
					price={price}
					category={category}
					setViewProduct={setViewProduct}
					cart={cart}
					setCart={setCart} />
			} 
		</>
	);

};

export default Product;

Product.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	setCart: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired
}