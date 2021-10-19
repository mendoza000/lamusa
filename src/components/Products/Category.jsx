import React from 'react'
import Product from '../HomeScreen/Product'
import useGetProducts from '../../hooks/useGetProducts'
import './Category.css'

const Category = ({name,icon}) => {
	
	const products = JSON.parse(localStorage.getItem('products'));

	return(
		<>
			<span className="products_category_title">
				<i className={icon}></i>
				{name}
			</span>
			<div className="products_category_container">
				
				{
					products?.map(({category, content, description, img, price, status, title, _id}) => {
						if (category === name && status) {
							return <Product 
									key={_id}
									title={title}
									price={price}
									img={img}
									category={category}
									content={content}
									description={description}
									id={_id}
									/>
						}
					})
				}

			</div>
		</>
	)

}

export default Category