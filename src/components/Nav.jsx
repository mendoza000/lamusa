import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/globo.png'
import './Nav.css'

const Nav = () => {
	
	return(
	    <>
		<nav className='nav'>
			<ul 
				className="nav_list">

				<li>
					<NavLink 
						exact to="/" 
						activeClassName="nav_item-active"
						className="nav_item"
						onClick={()=> window.scroll(0,0)}
						>
						<i className="las la-home"></i>
					</NavLink>
				</li>
				<li>
					<NavLink 
						exact to="/products" 
						activeClassName="nav_item-active"
						className="nav_item"
						onClick={()=> window.scroll(0,0)}
						>
						<i className="las la-gift"></i>
					</NavLink>
				</li>
				<li>
					<NavLink 
						exact to="/cart" 
						activeClassName="nav_item-active"
						className="nav_item"
						onClick={()=> window.scroll(0,0)}
						>
						<i className="las la-shopping-cart"></i>
					</NavLink>
				</li>
				<li>
					<NavLink 
						exact to="/about" 
						activeClassName="nav_item-active"
						className="nav_item"
						onClick={()=> window.scroll(0,0)}
						>
						<i className="las la-comment"></i>
					</NavLink>
				</li>
			</ul>
		</nav>

		</>
	)

}

export default Nav