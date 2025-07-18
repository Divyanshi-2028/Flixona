let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const captions= document.querySelectorAll('.caption');

function showSlide(index) {
  if(index >=slides.length){
    currentSlide=0;
  }else if(index<0){
    currentSlide=slides.length-1;
  }else{
    currentSlide=index;
  }
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
  captions.forEach((caption,i) =>{
    caption.classList.remove('active');
    if(i==currentSlide){
      setTimeout(() =>{
        caption.classList.add('active');
      },50);
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
/*document.querySelector('.prev').addEventListener('click',prevSlide);
document.querySelector('.next').addEventListener('click',nextSlide);*/

showSlide(currentSlide); // initialize
/*for new release*/

const movieCarousel=document.querySelector('#movieCarousel2');
const nextBtn=document.querySelector('.next-btn');
const prevBtn=document.querySelector('.prev-btn');
nextBtn.addEventListener('click',()=>{
  movieCarousel.scrollBy({left:450,behavior:'smooth'});
});
prevBtn.addEventListener('click',()=>{
  movieCarousel.scrollBy({left:-450,behavior:'smooth'});
});

/*for top hits */
const movieCarousel3=document.querySelector('#movieCarousel3');
const nextBtn3=document.querySelector('.next-btn3');
const prevBtn3=document.querySelector('.prev-btn3');
nextBtn3.addEventListener('click',()=>{
  movieCarousel3.scrollBy({left:450,behavior:'smooth'});
});
prevBtn3.addEventListener('click',()=>{
  movieCarousel3.scrollBy({left:-450,behavior:'smooth'});
});

//for featured originals //
const movieCarousel4=document.querySelector('#movieCarousel4');
const nextBtn4=document.querySelector('.next-btn4');
const prevBtn4=document.querySelector('.prev-btn4');
nextBtn4.addEventListener('click',()=>{
  movieCarousel4.scrollBy({left:450,behavior:'smooth'});
});
prevBtn4.addEventListener('click',()=>{
  movieCarousel4.scrollBy({left:-450,behavior:'smooth'});
});

// FOR TOP TV //

const movieCarousel5=document.querySelector('#movieCarousel5');
const nextBtn5=document.querySelector('.next-btn5');
const prevBtn5=document.querySelector('.prev-btn5');
nextBtn5.addEventListener('click',()=>{
  movieCarousel5.scrollBy({left:450,behavior:'smooth'});
});
prevBtn5.addEventListener('click',()=>{
  movieCarousel5.scrollBy({left:-450,behavior:'smooth'});
});

// Action_and_Adventure

const movieCarousel6=document.querySelector('#movieCarousel6');
const nextBtn6=document.querySelector('.next-btn6');
const prevBtn6=document.querySelector('.prev-btn6');
nextBtn6.addEventListener('click',()=>{
  movieCarousel6.scrollBy({left:450,behavior:'smooth'});
});
prevBtn6.addEventListener('click',()=>{
  movieCarousel6.scrollBy({left:-450,behavior:'smooth'});
});

// Anime_TV

const movieCarousel7=document.querySelector('#movieCarousel7');
const nextBtn7=document.querySelector('.next-btn7');
const prevBtn7=document.querySelector('.prev-btn7');
nextBtn7.addEventListener('click',()=>{
  movieCarousel7.scrollBy({left:450,behavior:'smooth'});
});
prevBtn7.addEventListener('click',()=>{
  movieCarousel7.scrollBy({left:-450,behavior:'smooth'});
});


// crime and horror

const movieCarousel8=document.querySelector('#movieCarousel8');
const nextBtn8=document.querySelector('.next-btn8');
const prevBtn8=document.querySelector('.prev-btn8');
nextBtn8.addEventListener('click',()=>{
  movieCarousel8.scrollBy({left:450,behavior:'smooth'});
});
prevBtn8.addEventListener('click',()=>{
  movieCarousel8.scrollBy({left:-450,behavior:'smooth'});
});

// FOR KIDS

const movieCarousel9=document.querySelector('#movieCarousel9');
const nextBtn9=document.querySelector('.next-btn9');
const prevBtn9=document.querySelector('.prev-btn9');
nextBtn9.addEventListener('click',()=>{
  movieCarousel9.scrollBy({left:450,behavior:'smooth'});
});
prevBtn9.addEventListener('click',()=>{
  movieCarousel9.scrollBy({left:-450,behavior:'smooth'});
});
 
// FOR NEW ON FLIXONA

const movieCarousel10=document.querySelector('#movieCarousel10');
const nextBtn10=document.querySelector('.next-btn10');
const prevBtn10=document.querySelector('.prev-btn10');
nextBtn10.addEventListener('click',()=>{
  movieCarousel10.scrollBy({left:450,behavior:'smooth'});
});
prevBtn10.addEventListener('click',()=>{
  movieCarousel10.scrollBy({left:-450,behavior:'smooth'});
});

