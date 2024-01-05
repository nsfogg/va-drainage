document.addEventListener('DOMContentLoaded', (event) => {
    // Function to show the bubble
    function showBubble(bubble) {
        document.getElementById('page-overlay').style.display = 'block';
        bubble.style.display = 'block';
        bubble.style.opacity = '1';
        bubble.style.visibility = 'visible';
    }

    // Function to hide all bubbles
    function hideBubbles() {
        document.querySelectorAll('.service-description-bubble').forEach(function(bubble) {
            bubble.style.display = 'none';
            bubble.style.opacity = '0';
            bubble.style.visibility = 'hidden';
        });
        document.getElementById('page-overlay').style.display = 'none';
    }

    // Event listeners for each service item
    document.querySelectorAll('.service-item').forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Prevent the click from propagating to the document
            event.stopPropagation();
            hideBubbles(); // Hide any bubbles that might be open
            showBubble(this.querySelector('.service-description-bubble'));
        });
    });

    // Event listener for the overlay to close the bubbles
    document.getElementById('page-overlay').addEventListener('click', hideBubbles);

    // Hide bubbles when clicking anywhere in the document
    document.addEventListener('click', hideBubbles);
});


let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
});

const slides = document.querySelectorAll(".slider__slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
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

// Initialize the first slide
showSlide(currentSlide);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.what-we-do-section1 h2, .what-we-do-section1 p');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect();

        // Checking if element is within viewport (you might adjust 'window.innerHeight' value)
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate'); // Optionally remove the class when out of view
        }
    }
});
