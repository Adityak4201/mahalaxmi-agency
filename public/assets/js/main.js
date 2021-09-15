/* =====================================
Template Name: 	Ucorpa
Author Name: Nthemer
Description: Ucorpa is a Multipurpose Corporate HTML5 Theme.
Version:	1.1
========================================*/
/*=======================================
[Start Activation Code]
=========================================
	* Mobile Menu JS
	* Search JS
	* Home Slider JS
	* Portfolio Slider JS
	* Testimonial Slider JS
	* Clients Slider JS
	* Portfolio Single Slider JS
	* Counter JS
	* Magnific Popup JS
	* Video Popup JS
	* Stellar JS
	* Wow JS JS
	* Scroll Up JS
	* Preloader JS
=========================================
[End Activation Code]
=========================================*/
(function ($) {
  "use strict";
  $(document).on("ready", function () {
    // Mobile Menu JS  //
    $(".mobile-menu").slicknav({
      prependTo: ".mobile-nav",
    });

    // Search JS  //
    $(".search a").on("click", function () {
      $(".search-top").toggleClass("active");
    });

    // Home Slider JS  //
    $(".home-slider").owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      dots: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
    });

    // Portfolio Slider JS  //
    $(".slider-portfolio").owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      dots: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
    });

    // Testimonial Slider JS  //
    $(".testimonial-slider").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3500,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      margin: 30,
      dots: true,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        1170: {
          items: 2,
        },
      },
    });

    // Clients Slider JS  //
    $(".clients-slider").owlCarousel({
      items: 6,
      autoplay: true,
      autoplayTimeout: 3500,
      margin: 15,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        300: {
          items: 2,
        },
        480: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1000: {
          items: 6,
        },
      },
    });

    // Portfolio Single Slider JS  //
    $(".single-p-slider").owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
    });

    // Counter JS  //
    $(".counter").counterUp({
      delay: 10,
      time: 5000,
    });

    // Magnific Popup JS  //
    $(".popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    // Video Popup  //
    $(".video-popup").magnificPopup({
      type: "video",
    });

    // stellar //
    $.stellar({
      horizontalOffset: 0,
      verticalOffset: 0,
    });

    /*====================================
			Wow JS
		======================================*/
    var window_width = $(window).width();
    if (window_width > 767) {
      new WOW().init();
    }

    // Scroll Up //
    $(function () {
      $.scrollUp({
        scrollName: "scrollUp", // Element ID
        topDistance: "300", // Distance from top before showing element (px)
        topSpeed: 800, // Speed back to top (ms)
        animation: "fade", // Fade, slide, none
        easingType: "easeInOutQuart", // Scroll to top easing (see http://easings.net/)
        animationInSpeed: 900, // Animation in speed (ms)
        animationOutSpeed: 900, // Animation out speed (ms)
        scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647, // Z-Index for the overlay
      });
    });
  });
  /*====================================
		Preloader JS
	======================================*/
  $(window).on("load", function () {
    "use strict";
    $(".preeloader").fadeOut(1000);
  });
})(jQuery);

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

queryForm.onsubmit = async (e) => {
  e.preventDefault();
  var form = document.querySelector("#queryForm");
  console.log(form.querySelector('textarea[id="message"]').value);
  var error = document.getElementById("error");
  var success = document.getElementById("success");
  error.innerHTML = "";
  error.style.display = "none";
  success.innerHTML = "";
  success.style.display = "none";
  if (form.querySelector('select[id="subject"]').value === "") {
    error.innerHTML = "Select a valid option from dropdown menu<br>";
    error.style.display = "visible";
  } else if (!form.querySelector('input[id="name"]').value === "") {
    error.innerHTML = "Name is required <br>";
    error.style.display = "visible";
  } else if (form.querySelector('input[id="city"]').value === "") {
    error.innerHTML = "City is required <br>";
    error.style.display = "visible";
  } else if (form.querySelector('input[id="email"]').value === "") {
    error.innerHTML = "Email ID is required <br>";
    error.style.display = "visible";
  } else if (
    validateEmail(form.querySelector('input[id="email"]').value) === false
  ) {
    error.innerHTML = "Enter a valid Email Address";
    error.style.display = "visible";
  } else if (form.querySelector('input[id="mobile"]').value === "") {
    error.innerHTML = "Mobile is required <br>";
    error.style.display = "visible";
  } else if (form.querySelector('textarea[id="message"]').value === "") {
    error.innerHTML = "Enter a feedback/query<br>";
    error.style.display = "visible";
  } else {
    error.innerHTML = "";
    try {
      payload = {
        email: form.querySelector('input[id="email"]').value,
        subject: form.querySelector('select[id="subject"]').value,
        name: form.querySelector('input[id="name"]').value,
        phone: form.querySelector('input[id="mobile"]').value,
        city: form.querySelector('input[id="city"]').value,
        feedback: form.querySelector('textarea[id="message"]').value,
      };
      let response = await fetch(
        "https://mahalaxmifinance-backend.herokuapp.com/api/auth/sendMail",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            success.innerHTML =
              "Query Successfull!!!<br/>Proceed to Login Page to continue.";
            success.style.display = "block";
          } else {
            error.innerHTML = "Something is wrong!!";
            error.style.display = "block";
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } catch (error) {
      console.log(error.response);
      // if(error.response.errors.code===11000)
      // {
      //     error.innerHTML="Email already exists"
      // }
    }
  }
};
