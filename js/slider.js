const position = 0
const slidesToShow = 0
const itemWidth = 94 + 8
const movePosition = 2 * itemWidth
const itemsLength = 0
const btnPrev = () => {
  
	const itemsLeft = Math.abs(position.value) / itemWidth
	position += itemsLeft >= slidesToShow ? movePosition : itemsLeft * 102
	tracker.style.transform = `translateX(${position}px)`
 
}

const btnNext = () => {
	const movePosition = 2 * itemWidth
	const itemsLeft =
		itemsLength -
		(Math.abs(position) + slidesToShow.value * itemWidth) / itemWidth

	console.log(itemsLeft)
	position -=
		itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth
	tracker.style.transform = `translateX(${position}px)`
}

const showNextButton =  () => {
   position >
			-(itemsLength - slidesToShow) * itemWidth
})
