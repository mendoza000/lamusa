import React, {useEffect} from 'react'
import Slider from '../components/HomeScreen/Slider'
import CategoriesList from '../components/HomeScreen/CategoriesList'
import ProductList from '../components/HomeScreen/ProductList'
import 'animate.css'
import './Home.css'

const Home = () => {

	useEffect(() => {
		window.scroll(0,0)
	})

	return(
		<div className="animate__animated animate__fadeIn animate__faster">
			<Slider/>
			<CategoriesList />
			<ProductList />
		</div>
	)

}

export default Home