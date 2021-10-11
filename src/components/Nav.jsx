import React, {useEffect, useState} from 'react'
import logo from '../assets/globo.png'
import './Nav.css'

const Nav = () => {
	const [itemState, setItemState] = useState({
		homeClass: 'nav_item nav_item-active',
		giftClass: 'nav_item',
		cartClass: 'nav_item',
		contactClass: 'nav_item',
	})

	const { homeClass, 
			giftClass, 
			cartClass, 
			contactClass } = itemState

	const handleClick = (e) =>{
		const target = e.target
		let elem = ''
		
		if(!target.className.includes('las')) return;

		(target.className.includes('la-home'))
		? elem = 'homeClass'
		: (target.className.includes('la-gift'))
		? elem = 'giftClass'
		: (target.className.includes('la-shopping-cart'))
		? elem = 'cartClass'
		: (target.className.includes('la-comment'))
		? elem = 'contactClass'
		: elem = ''

		setItemState({
			homeClass: 'nav_item',
			giftClass: 'nav_item',
			cartClass: 'nav_item',
			contactClass: 'nav_item',
			[elem]: 'nav_item nav_item-active'
		})

	}
	
	return(
	    <>
		<nav className='nav'>
			<ul 
				className="nav_list"
				onClick={handleClick}>

				<li className={homeClass}>
					<i className="las la-home"></i>
				</li>
				<li className={giftClass}>
					<i className="las la-gift"></i>
				</li>
				<li className={cartClass}>
					<i className="las la-shopping-cart"></i>
				</li>
				<li className={contactClass}>
					<i className="las la-comment"></i>
				</li>
			</ul>
		</nav>

		</>
	)

}

export default Nav