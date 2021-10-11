import React from 'react'
import './Category.css'

const Category = ({name, icon}) => {
	
	return(
		<div className="category">
			{icon}
			<span className="category_name">
				{name}
			</span>
		</div>
	)

}

export default Category