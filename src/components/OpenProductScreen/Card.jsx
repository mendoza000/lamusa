import React from 'react'

const Card = ({category, title, img, content}) => {
	
	return(
		<div className="openProduct_card">
			<span className="openProduct_card_category">
				{category}
			</span>
			<span className="openProduct_card_title">
				{title}
			</span>
			<div className="openProduct_circle"></div>
			<img 
				src={img} 
				alt={title}
				className="openProduct_card_img"/>

			<span className="openProduct_card_contenidoTitle">
				<i className="las la-gift"></i>
				Contenido
			</span>
			<ul className="openProduct_card_contenidoList">
			{
				content?.map((item) =>{
					return (
						<li key={item}>
							<i className="las la-bolt"></i>
							{item}
						</li>
					)
				})
			}
			</ul>
		</div>
	)

}

export default Card