import React from 'react'
import Nav from '../components/Nav'
import PrincipalCard from '../components/PrincipalCard'
import CategoriesList from '../components/CategoriesList'
import PrincipalCardImg from '../assets/cesta.png'
import './Home.css'

const Home = () => {
	const PrincipalCardText = "Tu complice en momentos especiales 💜"
	
	return(
		<>
			<Nav />
			{/*<h1 className="home_title">La Musa Regalona</h1>*/}
			<PrincipalCard 
				text={PrincipalCardText}
				img={PrincipalCardImg}/>
			<CategoriesList />
		</>
	)

}

export default Home