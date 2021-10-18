import React, {useState} from 'react'
import OpenProduct from '../HomeScreen/OpenProduct' 
import './Product.css'

const Product = ({title, img, price, category, content, id}) => {
	
	const [viewProduct, setViewProduct] = useState(false)

	return(
	    <>
			<div 
				className="products_category_product animate__animated animate__fadeIn animate__faster"
				onClick={() => setViewProduct(true)}
				>
				<div>
					<img src={img} alt={title}/>
					<div className="product_circle"></div>
				</div>
				<div>
					<span>{title}</span>
					<span>{price}$</span>
				</div>
			</div>

			{
				viewProduct 
				&& <OpenProduct 
					title={title}
					img={img}
					price={price}
					category={category}
					content={content}
					setViewProduct={setViewProduct}
					id={id}
					/>
			}
		</>
	)

}

export default Product