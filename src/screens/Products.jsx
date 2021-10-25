import React, {useEffect} from 'react'
import CategoriesList from '../components/Products/CategoriesList'
import PrincipalCard from '../components/HomeScreen/PrincipalCard'
import Footer from '../components/Footer'
import './Products.css'

const Products = () => {
	
	return(
		<div className="animate__animated animate__fadeIn animate__faster products_container">

			<h2 className="products_title">Productos</h2>
			
			{/*<PrincipalCard 
				text={"Detalles que enamoran, para las personas que quieres 💜"}
				img={img1}
			/>*/}
				
			<CategoriesList />

			<Footer />

		</div>
	)

}

export default Products