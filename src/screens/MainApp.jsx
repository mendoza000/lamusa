import React, {useState, useEffect} from 'react'
import AppRouter from './AppRouter'
import {CartContext} from './CartContext'
import useGetCategories from '../hooks/useGetCategories'
import useGetProducts from '../hooks/useGetProducts'

const MainApp = () => {
	const [cart, setCart] = useState([])

	const {categories} = useGetCategories()
	const {products} = useGetProducts()
	
	useEffect(() => {
		if(!categories) return

		localStorage.setItem('categories', JSON.stringify(categories))
	}, [categories])

	useEffect(() => {
		if(!products) return

		localStorage.setItem('products', JSON.stringify(products))
	}, [products])

	const value = {
		cart,
		setCart
	}

	return (
		<CartContext.Provider value={value}>
			<AppRouter />
		</CartContext.Provider>
	)

}

export default MainApp