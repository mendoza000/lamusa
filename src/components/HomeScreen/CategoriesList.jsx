import React, {useReducer} from 'react'
import Category from './Category'
import {CartContext} from '../../screens/CartContext'
import PrincipalCard from './PrincipalCard'
import imgCard1 from '../../assets/cesta.png'
import imgCard2 from '../../assets/desayuno.png'
import imgCard3 from '../../assets/regaloUp.png'
import './CategoriesList.css'

const CategoriesList = () => {

	const cats = JSON.parse(localStorage.getItem('categories'));
	return(
		<div className="categoriesList">

			<div className="infoCards">
				<PrincipalCard 
				text={"Tu complice en momentos especiales 💜"}
				img={imgCard1}/>
				<PrincipalCard 
					text={"Regalos hechos con amor para toda ocación 💜"}
					img={imgCard2}/>
				<PrincipalCard 
					text={"Una manera diferente de celebrar 💜"}
					img={imgCard3}/>
			</div>

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