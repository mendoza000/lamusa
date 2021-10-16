import React from 'react'
import './About.css'

const About = () => {
	
	return(
		<div className="animate__animated animate__fadeIn animate__faster container">
			<div className="about_circle"></div>
			<h1 className="about_title">La Musa Regalona</h1>

			<p className="about_text">Sobre nosotros text Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium ipsa veritatis porro quas ad, exercitationem saepe iste, sed deserunt voluptatum iusto.</p>

			<div className="about_contact_container">

				<h3 className="about_contact_title">
					Contactanos
				</h3>
				
				<div>
					<a 
						href="https://wa.me/+56931292847"
						target="_blank"
						className="about_contact"
						>
						<i className="lab la-whatsapp"></i>
					</a>
					<a 
						href="https://www.instagram.com/lamusaregalona/"
						target="_blank"
						className="about_contact"
						>
						<i className="lab la-telegram"></i>
					</a>
					<a 
						href="https://www.instagram.com/lamusaregalona/"
						target="_blank"
						className="about_contact"
						>
						<i className="lab la-instagram"></i>
					</a>
				</div>
			</div>

		</div>
	)

}

export default About