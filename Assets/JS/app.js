///////////////////////////////////////////////////////////////////// NAV PART////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.menu > ul > li');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('show');
        });
    });
});


////////////////////////////////////////////////////////////////// NAV FIXED & STYLE//////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('nav.navbar');
    const navbarSm = document.querySelector('nav.navbarSm');
    const navbarBottom = document.querySelector('div.navbarBottom');
    let scrollTimeout;

    function setFixedPosition() {
        if (navbar) {
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.width = '100%';
            navbar.style.zIndex = '10';
        }

        if (navbarSm) {
            navbarSm.style.position = 'fixed';
            navbarSm.style.top = '0';
            navbarSm.style.width = '100%';
            navbarSm.style.zIndex = '10';
        }

        if (navbarBottom) {
            navbarBottom.style.position = 'fixed';
            navbarBottom.style.bottom = '0';
            navbarBottom.style.left = '0';
            navbarBottom.style.width = '100%';
            navbarBottom.style.zIndex = '10';
            navbarBottom.style.transition = 'transform 1s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.8s ease';
        }
    }
    function hideNavbarBottom() {
        if (navbarBottom) {
            navbarBottom.style.transform = 'translateY(100%)';
            navbarBottom.style.opacity = '0';
            navbarBottom.style.pointerEvents = 'none';
        }
    }
    function showNavbarBottom() {
        if (navbarBottom) {
            navbarBottom.style.transform = 'translateY(0)';
            navbarBottom.style.opacity = '1';
            navbarBottom.style.pointerEvents = 'auto';
        }
    }
    setFixedPosition();

    // scrolling
    window.addEventListener('scroll', function () {
        setFixedPosition();

        showNavbarBottom();

        // Clear the previous timeout
        clearTimeout(scrollTimeout);

        // Timeout to hide
        scrollTimeout = setTimeout(function () {
            hideNavbarBottom();
        }, 3000);
    });

    // touch 
    window.addEventListener('touchstart', function () {
        showNavbarBottom();

        // Clear the previous timeout
        clearTimeout(scrollTimeout);

        // Timeout to hide
        scrollTimeout = setTimeout(function () {
            hideNavbarBottom();
        }, 3000);
    });
});


///////////////////////////////////////////////////////////////// SEARCH PART/////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    // search bar visibility lg
    document.querySelector('.searchIconDesktop').addEventListener('click', function (e) {
        e.preventDefault();
        var mainSearchBar = document.getElementById('mainSearchBar');
        mainSearchBar.style.display = mainSearchBar.style.display === 'block' ? 'none' : 'block';
    });

    // search bar visibility sm
    document.querySelector('#searchIcon').addEventListener('click', function (e) {
        e.preventDefault();
        var searchBar = document.getElementById('searchBar');
        searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    });

    // Close search bar
    document.addEventListener('click', function (e) {
        var searchBar = document.getElementById('searchBar');
        var mainSearchBar = document.getElementById('mainSearchBar');
        var searchIcon = document.querySelector('#searchIcon');
        var searchIconDesktop = document.querySelector('.searchIconDesktop');

        if (!searchBar.contains(e.target) && !searchIcon.contains(e.target) && searchBar.style.display === 'block') {
            searchBar.style.display = 'none';
        }

        if (!mainSearchBar.contains(e.target) && !searchIconDesktop.contains(e.target) && mainSearchBar.style.display === 'block') {
            mainSearchBar.style.display = 'none';
        }
    });
});


/////////////////////////////////////////////////////////////////// BACK TO TOP///////////////////////////////////////////////////////////////////

const backToTop = document.querySelector('.backToTop');
let hideTimeout;

const showButton = () => {
    backToTop.classList.add('active');
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => backToTop.classList.remove('active'), 3000);
};

const progressBar = () => {
    const totalHeight = document.body.clientHeight - window.innerHeight;
    const percentage = (window.scrollY / totalHeight) * 100;

    if (percentage > 1) {
        showButton();
    } else {
        backToTop.classList.remove('active');
    }

    backToTop.style.backgroundImage = `conic-gradient(#FF6F61 0% ${percentage}%, #ccc 0% 100%)`;
};

window.addEventListener('scroll', progressBar);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//////////////////////////////////////////////////////////////////// BANNER PART//////////////////////////////////////////////////////////////////

let currentSlide = 0;
const slides = document.querySelectorAll('.banner-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});
// SLIDE CHANGE TIME
setInterval(nextSlide, 2000);

// Initialize first slide
showSlide(currentSlide);


////////////////////////////////////////////////////////////////// PRODUCTSLIDE PART//////////////////////////////////////////////////////////////

$(".productSlide").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "#productLeft",
    nextArrow: "#productRight",
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// COUNTDOWN
$('.countdown').countdown("2025/02/01", function (e) {
    $(".countdown .day").html(e.strftime("%D"));
    $(".countdown .hour").html(e.strftime("%H"));
    $(".countdown .min").html(e.strftime("%M"));
    $(".countdown .sec").html(e.strftime("%S"));
});

///////////////////////////////////////////////////////////////// SLICK SLIDER FOR DEALS/////////////////////////////////////////////////////////

$('.deal_slider, .deal_content').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

///////////////////////////////////////////////////////////////////LEATEST NEWS///////////////////////////////////////////////////////////////////

$(document).ready(function () {
    $('.newsSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        pauseOnHover: false,
        dots: true,
        appendDots: $('.news_slider_dots_container'),
        dotsClass: 'news_slider_dots',
        customPaging: function (slider, i) {
            return '<button type="button" role="button" tabindex="0" class="slick-dot"></button>';
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 5
                }
            }
        ]
    });
});



///////////////////////////////////////////////////////////////////// DARK MODE PROCESS///////////////////////////////////////////////////////////

$(document).ready(function () {
    const toggleButton = $('#toggle-mode');
    const scrollThreshold = 0.01;

    // Function to check scroll and toggle button visibility
    function checkScroll() {
        const scrollTop = $(window).scrollTop();
        const docHeight = $(document).height() - $(window).height();
        const scrollPercent = (scrollTop / docHeight);

        if (scrollPercent > scrollThreshold) {
            toggleButton.addClass('visible');
        } else {
            toggleButton.removeClass('visible');
        }
    }

    // Initial check for scroll position
    checkScroll();
    // Event listener for scroll to update toggle button visibility
    $(window).on('scroll', function () {
        checkScroll();
    });
    // Function to apply the saved theme on page load
    function applySavedTheme() {
        if (localStorage) {
            const darkMode = localStorage.getItem('darkMode');

            if (darkMode === 'enabled') {
                enableDarkMode(false);
            } else {
                disableDarkMode(false);
            }
        } else {
            // If localStorage is not available, default to light mode
            disableDarkMode(false);
        }
    }
    // Function to enable dark mode
    function enableDarkMode(save = true) {
        $('body').addClass('dark-mode');
        // Change icon to sun
        toggleButton.find('i').removeClass('fa-moon').addClass('fa-sun');
        if (save && localStorage) {
            localStorage.setItem('darkMode', 'enabled');
        }
    }
    // Function to disable dark mode
    function disableDarkMode(save = true) {
        $('body').removeClass('dark-mode');
        // Change icon to moon
        toggleButton.find('i').removeClass('fa-sun').addClass('fa-moon');
        if (save && localStorage) {
            localStorage.setItem('darkMode', 'disabled');
        }
    }
    // Event listener for the toggle button to switch themes
    toggleButton.click(function () {
        if ($('body').hasClass('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    // Apply the saved theme when the page loads
    applySavedTheme();
});


/////////////////////////////////////////////////////////////// SPLASH MODE START/////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const logoSplash = document.getElementById('logo-splash');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        logoSplash.style.opacity = '0';

        setTimeout(() => {
            logoSplash.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible');
        }, 1500);
    }, 2000);
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////// HOME PAGE ENDS //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////ABOUT US PAGE START////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// COUNTER UP
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    function animateCounter(counter) {
        const target = +counter.getAttribute('data-value');
        const duration = 4000;
        const increment = Math.ceil(target / (duration / 100)); // Calculate the increment
        let start = 0;

        const timer = setInterval(function () {
            start += increment; // Increment the counter
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            counter.textContent = (start).toLocaleString('en') + 'k';
        }, 100);
    }

    function resetCounters() {
        counters.forEach(counter => {
            counter.textContent = '0k'; // Reset counter display to 0
        });
    }

    function checkScroll() {
        const section = document.getElementById('shopGrowth');
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Start counting when the section is in view
        if (sectionPosition < windowHeight && sectionPosition >= 0) {
            if (!hasCounted) {
                resetCounters();
                counters.forEach(counter => {
                    animateCounter(counter);
                });
                hasCounted = true;
            }
        } else if (sectionPosition < 0 || sectionPosition > windowHeight) {
            hasCounted = false;
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});


////////////////////////////////////////////////////////////////EXPERT TEAM SLIDER///////////////////////////////////////////////////////////////

$(".teamSlider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    prevArrow: ".leftArrow",
    nextArrow: ".rightArrow",
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ]
})



///////////////////////////////////////////////////////////////////////INSTAGRAM SLIDER///////////////////////////////////////////////////////////

$(document).ready(function () {
    $('.instaSlider').slick({
        slidesToShow: 6,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        pauseOnHover: false,
        dots: true,
        appendDots: $('.news_slider_dots_container'),
        dotsClass: 'news_slider_dots',
        customPaging: function (slider, i) {
            return '<button type="button" role="button" tabindex="0" class="slick-dot"></button>';
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 6
                }
            }
        ]
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////ABOUT US PAGE ENDS//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////PRODUCT DETAILS STARTS/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Main Image Slider
$('.sliderMain').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    asNavFor: '.sliderThumbnails'
});

// Thumbnail Slider
$('.sliderThumbnails').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<span class="sliderArrowLeft"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow: '<span class="sliderArrowRight"><i class="fa-solid fa-chevron-right"></i></span>',
    asNavFor: '.sliderMain',
    responsive: [
        {
            breakpoint: 992,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 767,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 575,
            settings: { slidesToShow: 3 }
        }
    ]
});

// Quantity Control
const qtyMinus = document.querySelector('.quantityMinus');
const qtyPlus = document.querySelector('.quantityPlus');
const qtyDisplay = document.querySelector('.quantityValue');
let quantity = 1;

// Update Quantity
const updateQuantity = (newQty) => qtyDisplay.value = newQty;

// Increase Quantity
qtyPlus.addEventListener('click', () => {
    if (quantity < 3) {
        updateQuantity(++quantity);
    } else {
        Swal.fire({
            title: 'Oops!',
            text: "Oho, I know you have a lot of money, but you can't take more than 3.",
            icon: 'warning',
            background: '#A52A2A',
            color: '#ffffff',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'Okay'
        });
    }
});

// Decrease Quantity
qtyMinus.addEventListener('click', () => {
    if (quantity > 1) {
        updateQuantity(--quantity);
    } else {
        Swal.fire({
            title: 'Minimum Quantity',
            text: "You can't go below 1 item.",
            icon: 'info',
            background: '#A52A2A',
            color: '#ffffff',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'Got it!'
        });
    }
});


// Related Product
$(".productWrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: `<span class="left"><i class="fa-solid fa-chevron-left"></i></span>`,
    nextArrow: `<span class="right"><i class="fa-solid fa-chevron-right"></i></span>`,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        },

    ]
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////PRODUCT DETAILS ENDS/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////SOIKAT DEV///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////