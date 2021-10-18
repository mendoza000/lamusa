import React from 'react'
import './Category.css'
import 'animate.css'

const Category = ({name, icon}) => {
	
	return(
		<div className="category animate__animated animate__fadeIn animate__faster">
			<i className={icon}></i>
			<span className="category_name">
				{name}
			</span>
		</div>
	)

}

export default Category