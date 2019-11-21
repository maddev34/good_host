// document.addEventListener('DOMContentLoaded', function () {

// 	let slideIndex = 1,
// 		slides = document.querySelectorAll('.slides'),
// 		prev = document.querySelector('.arrow-left'),
// 		next = document.querySelector('.arrow-right'),
// 		dotWrap = document.querySelector('.dots'),
// 		dots = document.querySelectorAll('.dots__item');

// 	function showSlides(n) {

// 		if(n > slides.length) {
// 			slideIndex = 1;
// 		}

// 		if(n < 1) {
// 			slideIndex = slides.length;
// 		}

// 		slides.forEach((item) => item.style.display = 'none');

// 		dots.forEach((item) => item.classList.remove('dots__item--active'));

// 		slides[slideIndex - 1].style.display = 'flex';
// 		dots[slideIndex - 1].classList.add('dots__item--active');
// 	}

// 	function plusSlide(n) {
// 		showSlides(slideIndex += n);
// 	}

// 	function currentSlide(n) {
// 		showSlides(slideIndex = n);
// 	}

// 	prev.addEventListener('click', function(){
// 		plusSlide(-1);
// 	})

// 	next.addEventListener('click', function(){
// 		plusSlide(1);
// 	})

// 	dotWrap.addEventListener('click', function(event){
// 		for (let i = 0; i < dots.length + 1; i++) {
// 			if (event.target.classList.contains('dots__item') && event.target == dots[i -1]) {
// 				currentSlide(i)
// 			}
// 		}
// 	}) 

// 	showSlides(slideIndex)
// })



var navBtn = document.querySelector('.nav__btn');
	console.log(navBtn);
	
	navBtn.addEventListener('click', function(){
		document.querySelector('.nav').classList.toggle('show');
	})

