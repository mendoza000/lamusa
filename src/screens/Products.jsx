import React, {useEffect} from 'react'
import Category from '../components/Products/Category'
import PrincipalCard from '../components/HomeScreen/PrincipalCard'
import img1 from '../assets/regaloUp.png'
import './Products.css'

const Products = () => {
	
	useEffect(() => {
		window.scroll(0,0)
	})

	return(
		<div className="animate__animated animate__fadeIn animate__faster products_container">
			
			{/*<PrincipalCard 
				text={"Detalles que enamoran, para las personas que quieres 💜"}
				img={img1}
			/>*/}
			<Category 
				title={"Desayunos"} 
				icon={<i className="las la-bread-slice"></i>}
			/>
			<Category 
				title={"Fitness"}
				icon={<i className="las la-apple-alt"></i>}
			/>
			<Category 
				title={"Amor"}
				icon={<i className="lar la-heart"></i>}
			/>
			<Category 
				title={"Cumpleaños"}
				icon={<i className="las la-birthday-cake"></i>}
			/>
			<Category 
				title={"Festivos"}
				icon={<i className="las la-glass-cheers"></i>}
			/>

		</div>
	)

}

export default Products