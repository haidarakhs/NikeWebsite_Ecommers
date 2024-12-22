const texts = [
    "Teachers & Students Get 10% Off",
    "Exclusive Deals for Educators",
    "Special Discount for Learners",
    "Save Big on Your Next Purchase",
    "New Arrivals Available Now",
    "Join Our Membership Today!"
];

const links = [
    "#", "#", "#", "#", "#", "#"
];

let currentIndex = 0;
const carouselText = document.getElementById("carousel-text");
const carouselLink = document.getElementById("carousel-link");

function updateContent() {
    currentIndex = (currentIndex + 1) % texts.length;
    carouselText.textContent = texts[currentIndex];
    carouselLink.textContent = "Learn More";
    carouselLink.href = links[currentIndex];


    carouselText.style.animation = "none";
    void carouselText.offsetWidth; 
    carouselText.style.animation = "slideInOut 1s ease-in-out";

    carouselLink.style.animation = "none";
    void carouselLink.offsetWidth; 
    carouselLink.style.animation = "slideInOut 1s ease-in-out";
}


setInterval(updateContent, 5000);


let currentIndexCarousel = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.my-carousel-image');
    const totalSlides = slides.length;

   
    currentIndexCarousel += direction;

  
    if (currentIndexCarousel < 0) {
        currentIndexCarousel = totalSlides - 1; 
    } else if (currentIndexCarousel >= totalSlides) {
        currentIndexCarousel = 0;
    }

   
    const carousel = document.querySelector('.my-carousel');
    carousel.style.transition = "transform 0.5s ease-in-out"; 
    carousel.style.transform = `translateX(-${currentIndexCarousel * 100}%)`;
}


updateContent();

