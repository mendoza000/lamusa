import React from 'react'
import {Link} from 'react-router-dom'
import commerce from "../../assets/commerce.png"
import onda from '../../assets/onda.png'
import './Header.css'

const Header = () => {

	console.log(commerce);
	
	return(
		<header className="header">
			<div className="header_col">
				<div className="header_circle"></div>

				<h1>La Musa Regalona</h1>
				<p>Somos tus complices en esos momentos tan especiales para ti 💜</p>

				<Link exact="true" to="/products">
					Observa lo que ofrecemos
				</Link>
			</div>

			<div className="header_col">
				<img src={commerce} alt="header img"/>
			</div>

			<img className="header_onda" src={onda} alt="wave"/>
		</header>
	)

}

export default Header