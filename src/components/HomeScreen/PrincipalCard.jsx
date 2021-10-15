import React from 'react'
import './PrincipalCard.css'

const PrincipalCard = ({text, img}) => {
	
	return(
		<div className="principalCard">
			<div>
				<span 
					className="principalCard_text">
					{text}
				</span>
				<button 
					className="principalCard_btn">
					button
				</button>
			</div>

			<img className="principalCard_img" src={img} alt="Card image"/>
		</div>
	)

}

export default PrincipalCard