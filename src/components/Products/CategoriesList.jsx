import React, {useEffect, useContext} from 'react'
import Category from './Category'
import {CartContext} from '../../screens/CartContext'

const CategoriesList = () => {
	const {setCart} = useContext(CartContext)
	const cats = JSON.parse(localStorage.getItem('categories'));

	useEffect(() => {
		const data = localStorage.getItem('tempCart')
		if(!data) return
		const tempCart = JSON.parse(data);
		setCart(tempCart)
		localStorage.removeItem('tempCart')
	}, [])
	
	return(
		<>
			{
				cats?.map(({name, icon, status, _id}) => {
					return (
						<Category
						key={_id} 
						name={name} 
						icon={icon}
						/>
					)
				})
			}
		</>
	)

}

export default CategoriesList