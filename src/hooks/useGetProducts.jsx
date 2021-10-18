import React,{useState, useEffect} from 'react'

const useGetProducts = () => {
	const url = 'https://lamusaapi.herokuapp.com/api/product'
	const [products, setProducts] = useState({})
	
	useEffect(() => {
		fetch(url, {
			headers:{
				method: 'GET',
				'Content-Type': 'aplicattion/json'
			}
		})
		.then(resp => resp.json())
		.then(data => setProducts(data))
		return () => {
			return products
		}
	}, [url])

	return products
}

export default useGetProducts