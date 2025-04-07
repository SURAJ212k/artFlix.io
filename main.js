// $(document).ready(function ($) {
//     "use strict";


//     var book_table = new Swiper(".book-table-img-slider", {
//         slidesPerView: 1,
//         spaceBetween: 20,
//         loop: true,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//         },
//         speed: 2000,
//         effect: "coverflow",
//         coverflowEffect: {
//             rotate: 3,
//             stretch: 2,
//             depth: 100,
//             modifier: 5,
//             slideShadows: false,
//         },
//         loopAdditionSlides: true,
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//     });

//     var team_slider = new Swiper(".team-slider", {
//         slidesPerView: 3,
//         spaceBetween: 30,
//         loop: true,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//         },
//         speed: 2000,

//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//         breakpoints: {
//             0: {
//                 slidesPerView: 1.2,
//             },
//             768: {
//                 slidesPerView: 2,
//             },
//             992: {
//                 slidesPerView: 3,
//             },
//             1200: {
//                 slidesPerView: 3,
//             },
//         },
//     });

//     jQuery(".filters").on("click", function () {
//         jQuery("#menu-dish").removeClass("bydefault_show");
//     });
//     $(function () {
//         var filterList = {
//             init: function () {
//                 $("#menu-dish").mixItUp({
//                     selectors: {
//                         target: ".dish-box-wp",
//                         filter: ".filter",
//                     },
//                     animation: {
//                         effects: "fade",
//                         easing: "ease-in-out",
//                     },
//                     load: {
//                         filter: ".Snacks, .burger, .Beverages, .Deserts",
//                     },
//                 });
//             },
//         };
//         filterList.init();
//     });

//     jQuery(".menu-toggle").click(function () {
//         jQuery(".main-navigation").toggleClass("toggled");
//     });

//     jQuery(".header-menu ul li a").click(function () {
//         jQuery(".main-navigation").removeClass("toggled");
//     });

//     gsap.registerPlugin(ScrollTrigger);

//     var elementFirst = document.querySelector('.site-header');
//     ScrollTrigger.create({
//         trigger: "body",
//         start: "30px top",
//         end: "bottom bottom",

//         onEnter: () => myFunction(),
//         onLeaveBack: () => myFunction(),
//     });

//     function myFunction() {
//         elementFirst.classList.toggle('sticky_head');
//     }

//     var scene = $(".js-parallax-scene").get(0);
//     var parallaxInstance = new Parallax(scene);


// });


// jQuery(window).on('load', function () {
//     $('body').removeClass('body-fixed');

//     //activating tab of filter
//     let targets = document.querySelectorAll(".filter");
//     let activeTab = 0;
//     let old = 0;
//     let dur = 0.4;
//     let animation;

//     for (let i = 0; i < targets.length; i++) {
//         targets[i].index = i;
//         targets[i].addEventListener("click", moveBar);
//     }

//     // initial position on first === All 
//     gsap.set(".filter-active", {
//         x: targets[0].offsetLeft,
//         width: targets[0].offsetWidth
//     });

//     function moveBar() {
//         if (this.index != activeTab) {
//             if (animation && animation.isActive()) {
//                 animation.progress(1);
//             }
//             animation = gsap.timeline({
//                 defaults: {
//                     duration: 0.4
//                 }
//             });
//             old = activeTab;
//             activeTab = this.index;
//             animation.to(".filter-active", {
//                 x: targets[activeTab].offsetLeft,
//                 width: targets[activeTab].offsetWidth
//             });

//             animation.to(targets[old], {
//                 color: "#0d0d25",
//                 ease: "none"
//             }, 0);
//             animation.to(targets[activeTab], {
//                 color: "#fff",
//                 ease: "none"
//             }, 0);

//         }

//     }
// });



$(document).ready(function ($) {
    "use strict";

    // Swiper for Book Table
    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            init: function () {
                // Check if swiper is in view when initializing
                if (!isInViewport(this.el)) {
                    this.autoplay.stop();
                }
            }
        }
    });

    // Swiper for Team Slider
    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    // Filter menu
    jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".Snacks, .burger, .Beverages, .Deserts",
                    },
                });
            },
        };
        filterList.init();
    });

    // Toggle navigation
    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });

    // GSAP ScrollTrigger for sticky header
    gsap.registerPlugin(ScrollTrigger);
    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",
        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
        once: true // Ensure it only triggers once
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    // Parallax Effect
    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });

    // Helper function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    // GSAP animation for filter active state
    $(function () {
        var filterList = {
            init: function () {
                let targets = document.querySelectorAll(".filter");
                let activeTab = 0;
                let old = 0;
                let dur = 0.4;
                let animation;

                for (let i = 0; i < targets.length; i++) {
                    targets[i].index = i;
                    targets[i].addEventListener("click", moveBar);
                }

                // initial position on first === All 
                gsap.set(".filter-active", {
                    x: targets[0].offsetLeft,
                    width: targets[0].offsetWidth
                });

                function moveBar() {
                    if (this.index != activeTab) {
                        if (animation && animation.isActive()) {
                            animation.progress(1);
                        }
                        animation = gsap.timeline({
                            defaults: {
                                duration: 0.4
                            }
                        });
                        old = activeTab;
                        activeTab = this.index;
                        animation.to(".filter-active", {
                            x: targets[activeTab].offsetLeft,
                            width: targets[activeTab].offsetWidth
                        });

                        animation.to(targets[old], {
                            color: "#0d0d25",
                            ease: "none"
                        }, 0);
                        animation.to(targets[activeTab], {
                            color: "#fff",
                            ease: "none"
                        }, 0);
                    }
                }
            }
        };
        filterList.init();
    });

    // Ensure body is no longer fixed once page is loaded
    jQuery(window).on('load', function () {
        $('body').removeClass('body-fixed');
    });

});
