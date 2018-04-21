$(document).ready(function() {
  var typed = new Typed(".type", {
    strings: ["Web Developer", "Software Developer"],

    smartBackspace: true,
    loop: true, // Default value
    typeSpeed: 100,
    backSpeed: 100
  });
  var set = 1;
  $(window).scroll(function() {
    if ($("#header").offset().top > 100) {
      if (set == 1) {
        $("#header").addClass("header-white");
        // .fadeOut(0)
        // .fadeIn(700);
        set = 0;
      }
    } else if ($("#header").offset().top < 80) {
      if (set == 0) {
        $("#header").removeClass("header-white");
        // setTimeout(function() {
        //   $("#header").removeClass("header-white");
        // }, 500);
        // $("#header")
        //   .fadeOut(500)
        //   .fadeIn(100);
        set = 1;
      }
    }
  });

  $(".my-description .tabs ul li a").click(function() {
    $(".my-description .tabs ul li").toggleClass("active");
    // if ($(".my-description .tab-content #section2").css("display") == "none") {
    //   $(".my-description .tab-content #section2").css("display", "block");
    //   $(".my-description .tab-content #section1").css("display", "none");
    // } else {
    //   $(".my-description .tab-content #section2").css("display", "none");
    //   $(".my-description .tab-content #section1").css("display", "block");
    // }
    if ($(".my-description .tab-content #section2").css("display") == "none") {
      $(".my-description .tab-content #section1").fadeOut(200, function() {
        $(".my-description .tab-content #section2").fadeIn(200);
      });
    } else {
      $(".my-description .tab-content #section2").fadeOut(200, function() {
        $(".my-description .tab-content #section1").fadeIn(200);
      });
    }
  });
  $("a.smooth-scroll").on("click", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 0
        },
        1000
      );
    event.preventDefault();
  });

  $(".service-relative").on("hover", function() {
    $(".service-relative > .service-animation").animate("height", "inherit");
  });
});
