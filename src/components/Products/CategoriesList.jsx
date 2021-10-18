import React from 'react'
import Category from './Category'

const CategoriesList = () => {

	const cats = JSON.parse(localStorage.getItem('categories'));
	
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