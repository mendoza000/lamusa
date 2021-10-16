import React, {useState} from 'react'
import OpenProduct from '../HomeScreen/OpenProduct' 
import './Product.css'

const Product = ({title, img, price, category, content}) => {
	
	const [viewProduct, setViewProduct] = useState(false)

	return(
	    <>
			<div 
				className="products_category_product"
				onClick={() => setViewProduct(true)}
				>
				<img src={img} alt={title}/>
				<div>
					<span>{title}</span>
					<span>{price}</span>
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
					/>
			}
		</>
	)

}

export default Product