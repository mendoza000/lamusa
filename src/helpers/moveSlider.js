export const moveSlider = () => {
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