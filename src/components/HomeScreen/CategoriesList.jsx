import React, {useReducer} from 'react'
import Category from './Category'
import {CartContext} from '../../screens/CartContext'
import './CategoriesList.css'

const CategoriesList = () => {

	const cats = JSON.parse(localStorage.getItem('categories'));
	return(
		<div className="categoriesList">
			<h2 className="categoriesList_title">
				Categorias Principales
			</h2>

			<div className="categoriesList_list">
				{
					cats?.map(({_id, name, icon}) => {
						return <Category
								key={_id} 
								name={name} 
								icon={icon}/>
					})
				}
			</div>

		</div>
	)

}

export default CategoriesList