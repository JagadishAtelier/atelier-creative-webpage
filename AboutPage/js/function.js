(function ($) {
    "use strict";
    
    var $window = $(window); 
    var $body = $('body'); 

    /* Preloader Effect */
    $window.on('load', function(){
        $(".preloader").fadeOut(600);
    });

    /* Optimized Sticky Header */ 
    if($('.active-sticky-header').length){
        // Function to set height
        var setHeaderHeight = function(){
            $("header.main-header").css("height", $('header .header-sticky').outerHeight());
        };

        // Run on load and resize only
        $window.on('load resize', function(){
            setHeaderHeight();
        });

        $(window).on("scroll", function() {
            var fromTop = $(window).scrollTop();
            var headerHeight = $('header .header-sticky').outerHeight();
            
            // Toggle classes based on scroll position
            // Note: Removed setHeaderHeight() from here to prevent "jumping" at page bottom
            $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
            $("header .header-sticky").toggleClass("active", (fromTop > 600));
        });
    }   
    
    /* Slick Menu JS */
    $('#menu').slicknav({
        label : '',
        prependTo : '.responsive-menu'
    });

    /* Smooth Internal Links */
    if($("a[href='#top']").length){
        $("a[href='#top']").on('click', function(e) {
            e.preventDefault();
            $("html, body").stop().animate({ scrollTop: 0 }, "slow");
        });
    }

    /* Typed subtitle */
    if ($('.typed-title').length) {
        $('.typed-title').typed({
            stringsElement: $('.typing-title'),
            backDelay: 2000,
            typeSpeed: 0,
            loop: true
        });
    }

    /* Hero Slider Layout JS */
    const hero_slider_layout = new Swiper('.hero-slider-layout .swiper', {
        effect: 'fade',
        slidesPerView : 1,
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.hero-pagination',
            clickable: true,
        },
    });

    if ($('.agency-supports-slider').length) {
        const agency_supports_slider = new Swiper('.agency-supports-slider .swiper', {
            slidesPerView : 2,
            speed: 2000,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                768:{ slidesPerView: 4 },
                991:{ slidesPerView: 6 }
            }
        });
    }

    /* testimonial Slider JS */
    if ($('.testimonial-slider').length) {
        const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
            slidesPerView : 1,
            speed: 1000,
            spaceBetween: 30,
            loop: true,
            autoplay: { delay: 5000 },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
            breakpoints: {
                768:{ slidesPerView: 1 },
                991:{ slidesPerView: 1 }
            }
        });
    }

    /* Youtube Background Video JS */
    if ($('#herovideo').length) {
        var myPlayer = $("#herovideo").YTPlayer();
    }

    /* Init Counter */
    if ($('.counter').length) {
        $('.counter').counterUp({ delay: 6, time: 3000 });
    }

    /* Image Reveal Animation */
    if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, { autoAlpha: 1 });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

    /* Text Effect Animation */
    if ($('.text-anime-style-1').length) {
        let staggerAmount = 0.05,
            delayValue = 0.5,
            animatedTextElements = document.querySelectorAll('.text-anime-style-1');
        
        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });
                gsap.from(animationSplitText.words, {
                    duration: 1,
                    delay: delayValue,
                    x: 20,
                    autoAlpha: 0,
                    stagger: staggerAmount,
                    scrollTrigger: { trigger: element, start: "top 85%" },
                });
        });     
    }
    
    if ($('.text-anime-style-2').length) {              
        let staggerAmount = 0.03,
            translateXValue = 20,
            delayValue = 0.1,
            easeType = "power2.out",
            animatedTextElements = document.querySelectorAll('.text-anime-style-2');
        
        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });
                gsap.from(animationSplitText.chars, {
                    duration: 1,
                    delay: delayValue,
                    x: translateXValue,
                    autoAlpha: 0,
                    stagger: staggerAmount,
                    ease: easeType,
                    scrollTrigger: { trigger: element, start: "top 85%"},
                });
        });     
    }
    
    if ($('.text-anime-style-3').length) {      
        let animatedTextElements = document.querySelectorAll('.text-anime-style-3');
        
         animatedTextElements.forEach((element) => {
            if (element.animation) {
                element.animation.progress(1).kill();
                element.split.revert();
            }

            element.split = new SplitText(element, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });
            gsap.set(element, { perspective: 400 });
            gsap.set(element.split.chars, { opacity: 0, x: "50" });

            element.animation = gsap.to(element.split.chars, {
                scrollTrigger: { trigger: element, start: "top 90%" },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: 0.02,
            });
        });     
    }

    /* Parallaxie js */
    var $parallaxie = $('.parallaxie');
    if($parallaxie.length && ($window.width() > 991)) {
        $parallaxie.parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }

    /* Magnific Popup Gallery */
    $('.gallery-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: { enabled: true },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) { return element.find('img'); }
        }
    });

    /* Contact form validation */
    var $contactform = $("#contactForm");
    if($contactform.length) {
        $contactform.validator({focus: false}).on("submit", function (event) {
            if (!event.isDefaultPrevented()) {
                event.preventDefault();
                submitForm();
            }
        });
    }

    function submitForm(){
        $.ajax({
            type: "POST",
            url: "form-process.php",
            data: $contactform.serialize(),
            success : function(text){
                if (text == "success"){
                    $contactform[0].reset();
                    $("#msgSubmit").removeClass().addClass("h4 text-success").text("Message Sent Successfully!");
                } else {
                    $("#msgSubmit").removeClass().addClass("h4 text-danger").text(text);
                }
            }
        });
    }

    /* Isotope Filtering */
    $window.on( "load", function(){
        if( $(".project-item-boxes").length ) {
            var $menuitem = $(".project-item-boxes").isotope({
                itemSelector: ".project-item-box",
                layoutMode: "masonry"
            });
            
            $(".our-Project-nav li a").on('click', function (e) { 
                e.preventDefault();
                var filterValue = $(this).attr('data-filter');
                $menuitem.isotope({ filter: filterValue }); 
                $(".our-Project-nav li a").removeClass("active-btn"); 
                $(this).addClass("active-btn");
            });     
        }           
    });

    /* Animated Wow Js */   
    new WOW().init();

    /* Popup Video */
    if ($('.popup-video').length) {
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            fixedContentPos: true
        });
    }
    
    /* Why Choose us hover */
    if ($('.why-choose-content').length) {
        $('.why-choose-item').on('mouseenter', function() {
            $('.why-choose-item').removeClass('active');
            $(this).addClass('active');
        });
    }
    
})(jQuery);