import React, {useState, useEffect} from 'react'

const useGetProducts = () => {

	const [state, setState] = useState({})
	
	useEffect(() => {

		const products = JSON.parse(localStorage.getItem('products'));

		setState(products)

	}, [])

	return state
}

export default useGetProducts