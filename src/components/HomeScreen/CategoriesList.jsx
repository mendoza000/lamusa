import React from 'react'
import Category from './Category'
import './CategoriesList.css'

const CategoriesList = () => {
	
	return(
		<div className="categoriesList">
			<h2 className="categoriesList_title">
				Categorias Principales
			</h2>

			<div className="categoriesList_list">
				<Category 
					name={"Desayunos"} 
					icon={
						<i className="las la-bread-slice"></i>
					}/>
				<Category 
					name={"Category"} 
					icon={
						<i className="las la-apple-alt"></i>
					}/>
				<Category 
					name={"Category"} 
					icon={
						<i className="lar la-heart"></i>
					}/>
				<Category 
					name={"Category"} 
					icon={
						<i className="las la-birthday-cake"></i>
					}/>
				<Category 
					name={"Category"} 
					icon={
						<i className="las la-gift"></i>
					}/>
			</div>

		</div>
	)

}

export default CategoriesList