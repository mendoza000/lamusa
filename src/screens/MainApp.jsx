import React, {useState} from 'react'
import AppRouter from './AppRouter'
import {CartContext} from './CartContext'

const MainApp = () => {

	const [cart, setCart] = useState([])

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