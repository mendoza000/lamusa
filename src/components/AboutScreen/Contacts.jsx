import React from 'react'

const Contacts = () => {
	return(
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
	)

}

export default Contacts