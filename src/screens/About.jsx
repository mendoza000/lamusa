import React, {useEffect} from 'react'
import Contacts from '../components/AboutScreen/Contacts'
import './About.css'

const About = () => {
	
	return(
		<div className="animate__animated animate__fadeIn animate__faster container">
			<div className="about_circle"></div>
			<h1 className="about_title">La Musa Regalona</h1>

			<p className="about_text">Sobre nosotros text Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium ipsa veritatis porro quas ad, exercitationem saepe iste, sed deserunt voluptatum iusto.</p>

			<Contacts />

		</div>
	)

}

export default About