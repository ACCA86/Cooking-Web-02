const nav_landpage = document.querySelector('.landpage_nav');
let images = document.querySelectorAll('.landpage_content');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const contain_card = document.querySelector('.contain_team');
let con_card = document.querySelectorAll('.content_team');
const next_card = document.querySelector('#next_card');
const prev_card = document.querySelector('#prev_card');
const mode = document.querySelector('.mode');
const list_show = document.querySelector('.list_show');
const close_list = document.querySelector('.close_list');
const show_menu = document.querySelector('#show_menu');
let counter = 1;
let i = 0;

close_list.addEventListener('click',()=>{
	list_show.style.display="none";
})
show_menu.addEventListener('click',()=>{
	list_show.style.display="block";
})

mode.addEventListener('click',()=>{
	document.body.classList.toggle('mode');
})

const cardWidth = con_card[0].clientWidth;
console.log(cardWidth);

contain_card.style.transform="translateX("+(-cardWidth*i)+"px)";

const nextCard = ()=>{	
		contain_card.style.marginLeft = '-100%';
		contain_card.style.transition = '0.5s';
}
next_card.addEventListener('click',nextCard);
const prevCard = ()=>{
		contain_card.style.marginLeft = '0';
		contain_card.style.transition = '0.5s';

}
prev_card.addEventListener('click',prevCard);



const first_clone = images[0].cloneNode(true);
const last_clone = images[images.length - 1].cloneNode(true);


first_clone.id = 'firstClone';
last_clone.id = 'lastClone';

nav_landpage.append(first_clone);
nav_landpage.prepend(last_clone);

const slideWidth = images[0].clientWidth;
console.log(slideWidth);

nav_landpage.style.transform = 'translateX('+(-slideWidth * counter)+'px)';

const getImages = ()=>document.querySelectorAll('.landpage_content');

nav_landpage.addEventListener('transitionend' , ()=>{
	console.log("fire");
	images = getImages();
	if(images[counter].id === first_clone.id){
		counter = 1;
		nav_landpage.style.transition = 'none';
		nav_landpage.style.transform="translateX("+(-slideWidth * counter)+"px)";
	}
	if(images[counter].id === last_clone.id){
		counter = images.length - 2;
		nav_landpage.style.transition = 'none';
		nav_landpage.style.transform="translateX("+(-slideWidth * counter)+"px)";
	}
})





const nextSlide = ()=>{
	if(counter >= images.length - 1) return;
	nav_landpage.style.transition="0.8s";
	counter++;
	nav_landpage.style.transform = 'translateX('+(-slideWidth * counter)+'px)';
}
setInterval(nextSlide,3000);

const prevSlide = ()=>{
	if(counter <= 0) return;
	nav_landpage.style.transition = "0.8s";
	counter--;
	nav_landpage.style.transform = 'translateX('+(-slideWidth * counter)+'px)';
}

next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);

const scrolling = ()=>{
	const reveals = document.querySelectorAll('.reveal');
	for(var i = 0; i < reveals.length; i++){
		const page = window.innerHeight;
	    const scrollTop = reveals[i].getBoundingClientRect().top;
	    let point = 140;
	    if(scrollTop < page - point) {
		reveals[i].classList.add('occur');
	}else{reveals[i].classList.remove('occur');}
	}
}

window.addEventListener('scroll',scrolling);
