import React,{useEffect} from 'react'
import Slider from '../components/HomeScreen/Slider'
import CategoriesList from '../components/HomeScreen/CategoriesList'
import ProductList from '../components/HomeScreen/ProductList'
import Header from '../components/HomeScreen/Header'
import Footer from '../components/Footer'
import 'animate.css'
import './Home.css'

const Home = () => {

	return(
		<div className="home animate__animated animate__fadeIn animate__faster">
			<Slider />
			<Header />
			<CategoriesList />
			<ProductList />
			<Footer />
		</div>
	)

}

export default Home