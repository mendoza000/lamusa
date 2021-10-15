import React, {useState, useEffect} from 'react'
import Slider from '../components/HomeScreen/Slider'
import CategoriesList from '../components/HomeScreen/CategoriesList'
import ProductList from '../components/HomeScreen/ProductList'
import 'animate.css'
import './Home.css'

const Home = () => {
	const [cart, setCart] = useState([])
	
	return(
		<div className="animate__animated animate__fadeIn animate__faster">
			<Slider/>
			<CategoriesList />
			<ProductList 
				cart={cart}
				setCart={setCart} />
		</div>
	)

}

export default Home