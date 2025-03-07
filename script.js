document.addEventListener('DOMContentLoaded', function() {
    // Image Carousel
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    let counter = 0;
    const slideWidth = slides[0].clientWidth;

    function slide() {
        counter++;
        if (counter >= slides.length) {
            counter = 0;
        }
        carouselContainer.style.transform = `translateX(-${counter * slideWidth}px)`;
    }

    setInterval(slide, 3000);
});

// Image Carousel for Service Page (Kitchen) 
document.addEventListener('DOMContentLoaded', function() {
    // ... (Your existing JavaScript code for the first carousel)

    // Image Carousel 2
    const carouselContainer2 = document.querySelector('.carousel-container-2');
    const slides2 = document.querySelectorAll('.carousel-slide-2');
    let counter2 = 0;
    const slideWidth2 = slides2[0].clientWidth;

    function slide2() {
        counter2++;
        if (counter2 >= slides2.length) {
            counter2 = 0;
        }
        carouselContainer2.style.transform = `translateX(-${counter2 * slideWidth2}px)`;
    }

    setInterval(slide2, 3000);
});

// Image Carousel For Service Page (Bathroom)
document.addEventListener('DOMContentLoaded', function() {
    // ... (Your existing JavaScript code for other carousels)

    // Image Carousel - Bathroom
    const carouselContainerBathroom = document.querySelector('.carousel-container-bathroom');
    const slidesBathroom = document.querySelectorAll('.carousel-slide-bathroom');
    let counterBathroom = 0;
    const slideWidthBathroom = slidesBathroom[0].clientWidth;

    function slideBathroom() {
        counterBathroom++;
        if (counterBathroom >= slidesBathroom.length) {
            counterBathroom = 0;
        }
        carouselContainerBathroom.style.transform = `translateX(-${counterBathroom * slideWidthBathroom}px)`;
    }

    setInterval(slideBathroom, 3000);
});


// Remove title attribute from all links on page 
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => link.removeAttribute('title'));
});


// Image Grid & Pop up
document.addEventListener('DOMContentLoaded', function() {
    // ... (Your existing JavaScript code)

    const imageGridItems = document.querySelectorAll('.grid-item img');
    const imagePopup = document.getElementById('image-popup');
    const popupImage = imagePopup.querySelector('.popup-image');
    const closePopup = imagePopup.querySelector('.close-popup');

    imageGridItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image');
            popupImage.src = imageUrl;
            imagePopup.style.display = 'flex';
        });
    });

    closePopup.addEventListener('click', function() {
        imagePopup.style.display = 'none';
    });

    imagePopup.addEventListener('click', function(event) {
        if (event.target === imagePopup) {
            imagePopup.style.display = 'none';
        }
    });
});