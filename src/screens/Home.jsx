import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import PrincipalCard from '../components/PrincipalCard'
import CategoriesList from '../components/CategoriesList'
import PrincipalCardImg from '../assets/cesta.png'
import PrincipalCardImg2 from '../assets/regaloUp.png'
import ProductList from '../components/ProductList'
import './Home.css'

const Home = () => {
	const PrincipalCardText = "Tu complice en momentos especiales 💜"

	useEffect(() => {
		moveSlider()
	}, [])
	

	const moveSlider = () => {
		const sliderx = document.querySelector('.slider');

		setTimeout(() =>{
			sliderx.scroll(320, 0)
		}, 4000)

		setTimeout(() => {
			sliderx.scroll(640, 0)
		},8000)

		setTimeout(() => {
			sliderx.scroll(0, 0)
			moveSlider()
		}, 12000)

	}
	
	return(
		<>
			<Nav />
			{/*<h1 className="home_title">La Musa Regalona</h1>*/}
			<div 
				className="slider">
				<PrincipalCard 
					text={PrincipalCardText}
					img={PrincipalCardImg}/>
				<PrincipalCard 
					text={"Regalos hechos con amor para toda ocación 💜"}
					img={PrincipalCardImg2}/>
				<PrincipalCard 
					text={"Una manera diferente de celebrar 💜"}
					img={PrincipalCardImg}/>
			</div>
			<CategoriesList />
			<ProductList />
		</>
	)

}

export default Home