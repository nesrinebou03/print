const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let currentSlide = 0;

const createDot = () => {
	slides.forEach((element,index) => {
		const dotElement = document.createElement('div');
		if(index === 0){dotElement.classList.add('dot_selected');}
		dotElement.classList.add('dot');

		document.querySelector('.dots').appendChild(dotElement);
	});
}

const changeBulletPoint = (position) => {
   Array.from(document.querySelectorAll('.dot')).forEach((element,index) => {
	   element.classList.remove('dot_selected')
	   if(index === position){element.classList.add('dot_selected');}
   });
}

const slider = (direction) => {
	currentSlide = currentSlide + direction;

	if(currentSlide === -1){
		currentSlide = slides.length - 1;
	}else if(currentSlide > (slides.length - 1)){
		currentSlide = 0;
	}

	document.querySelector('.banner-img').setAttribute('src', './assets/images/slideshow/'+slides[currentSlide].image);
	document.querySelector('.tagLine').innerHTML = slides[currentSlide].tagLine;
	changeBulletPoint(currentSlide);
}

document.querySelector('.arrow_left').addEventListener('click', () => {
   console.log('Previous Slide');
   slider(-1);
});

document.querySelector('.arrow_right').addEventListener('click', () => {
	console.log('Next Slide');
	slider(1);
 });
 
 createDot();
 
