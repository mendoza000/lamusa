import React, {useState, useEffect} from 'react'

const useGetCategories = () => {
	const [categories, setCategories] = useState([])
	const url = 'https://lamusaapi.herokuapp.com/api/category'

	useEffect(() => {
		fetch(url, {
			headers:{
				method: 'GET'
			}
		})
		.then(resp => resp.json())
		.then(data => setCategories(data))
		return () => {
			return categories
		}
	}, [url])

	return categories

}

export default useGetCategories