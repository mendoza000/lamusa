import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import 'animate.css'
import './OpenProduct.css'

const OpenProduct = ({img, title, price, category, setViewProduct, cart, setCart}) => {
	const body = document.querySelector('body');

	useEffect(() => {
		body.style.overflowY = 'hidden'
	}, [])

	const addToCart = () => {
		setCart([...cart, {
			title,
			img,
			price,
			category
		}])
		console.log(cart);
	}

	const returnPage = () => {
		const op = document.querySelector('.openProduct');
		op.classList.remove('animate__slideInUp')
		op.classList.add('animate__slideOutDown')
		body.style.overflowY = ''
		setTimeout(() =>{
			setViewProduct(false)
		}, 550)
	}
	
	return(
		<div className="openProduct animate__animated animate__slideInUp animate__faster">
			<button 
				className="openProduct_btnReturn"
				onClick={returnPage}>
				<i className="las la-arrow-left"></i>
			</button>
			<h3 className="openProduct_title">
				La Musa Regalona
			</h3>

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

				<div className="openProduct_card_containerBtn">
					<span>
						<i className="las la-shopping-cart"></i>
						Carrito ( { cart.length } )
					</span>
					<button onClick={addToCart}>
						<i className="las la-cart-plus"></i>
						Añadir
					</button>
					<span>
						{price}
					</span>
				</div>
			</div>
		</div>
	)

}

export default OpenProduct

OpenProduct.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	setCart: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired
}