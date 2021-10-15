import React, {useEffect, useState} from 'react'
import PrincipalCard from './PrincipalCard'
/*import {moveSlider} from '../../helpers/moveSlider'*/
import imgCard1 from '../../assets/cesta.png'
import imgCard2 from '../../assets/desayuno.png'
import imgCard3 from '../../assets/regaloUp.png'

const Slider = () => {

	let moveSlider = () => {
		const sliderx = document.querySelector('.slider');

		if (sliderx !== null && window.location.pathname === '/'){
			setTimeout(() =>{
				sliderx.scroll(320, 0)
			}, 4000)
		}else{
			return;
		}

		if (sliderx !== null && window.location.pathname === '/'){
			setTimeout(() =>{
				sliderx.scroll(640, 0)
			}, 8000)
		}else{
			return;
		}

		if (sliderx !== null && window.location.pathname === '/'){
			setTimeout(() =>{
				sliderx.scroll(0, 0)
				moveSlider()
			}, 12000)
		}else{
			return;
		}
	}

	useEffect( () => {
		moveSlider()
		return () => {
			moveSlider = () => {}
		}
	}, [])
	
	return(
		<div 
			className="slider"
			>
			<PrincipalCard 
				text={"Tu complice en momentos especiales 💜"}
				img={imgCard1}/>
			<PrincipalCard 
				text={"Regalos hechos con amor para toda ocación 💜"}
				img={imgCard2}/>
			<PrincipalCard 
				text={"Una manera diferente de celebrar 💜"}
				img={imgCard3}/>
		</div>
	)

}

export default Slider