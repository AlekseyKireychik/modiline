
$(document).ready(function() {    

  //form

  $(".register").on("click", function(event) {
    event.preventDefault();

    $(".main__form").addClass("is-active");
    $("body").addClass("is-active");
    $(".overlay").addClass("is-active");

    $(".overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".main__form").removeClass("is-active");
      $("body").removeClass("is-active");
    });

    $(".form__btnClose").on("click", function(event) {
      $(".overlay").removeClass("is-active");
      $(".main__form").removeClass("is-active");
      $("body").removeClass("is-active");
    });

  });

  //form success
  $("#btn-success").on("click", function(event) {
    $(".main__form-success").removeClass("is-active");
  });

  
  $(document).on("keypress", ".validate-numeric", function(event) {
    return isNumber(event);
  });

  function isNumber(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    if (unicode != 8 && unicode != 9) {
      //if the key isn't the backspace key (which we should allow)
      if (unicode < 48 || unicode > 57)
        //if not a number
        return false; //disable key press
    }
  }

  //news block - add new elemen in endlist
  $(".news-home__list, .pagenews__list").append('<li class="news__itemLast"></li>');
  
  //gallery -- PC
  const widthWorksPC = "1199";

  if ($(window).outerWidth() > widthWorksPC) {

    $(".gallery__item").on("mouseenter", function() {
      $(this).addClass("hover");
    });
    $(".gallery__link").on("click", function() {
      $(this).closest(".gallery__item").removeClass("hover");
      if ($(this).closest(".gallery__item").children(".gallery__imgBefore").hasClass("is-active")) {
        $(this).closest(".gallery__item").children(".gallery__imgBefore").removeClass("is-active");
        $(this).closest(".gallery__item").children(".gallery__imgAfter").toggleClass("is-active");
        $(this).closest(".gallery__item").children(".gallery__caption").children(".gallery__descriptiongAfter").toggleClass("is-active");
        $(this).closest(".gallery__item").children(".gallery__caption").children(".gallery__descriptionBefore").toggleClass("is-active");
      } else {
        $(this).closest(".gallery__item").children(".gallery__imgBefore").toggleClass("is-active");
        $(this).closest(".gallery__item").children(".gallery__imgAfter").toggleClass("is-active");
        $(this).closest(".gallery__item").children(".gallery__caption").children(".gallery__descriptiongAfter").toggleClass("is-active");
        $(this).closest(".gallery__item").children(".gallery__caption").children(".gallery__descriptionBefore").toggleClass("is-active");
      }
    });
    $(".gallery__item").on("mouseleave", function() {
      $(this).removeClass("hover");
    });
  }

  //gallery -- Phone
  if ($(window).outerWidth() < widthWorksPC) {
    let textDescriptionPhoto = "Нажмите на фото еще раз, если вы хотите посмотреть первоначальное состояние";
    $(".gallery__descriptiongAfter").html(textDescriptionPhoto);

    $(".gallery__item").on("click", function() {
      event.preventDefault();
      if (
        $(this)
          .closest(".gallery__item")
          .children(".gallery__imgBefore")
          .hasClass("is-active")
      ) {
        if (
          $(this)
            .closest(".gallery__item")
            .children(".gallery__caption")
            .children(".gallery__descriptiongAfter")
            .hasClass("is-active")
        ) {
          $(this)
            .closest(".gallery__item")
            .children(".gallery__caption")
            .children(".gallery__descriptiongAfter")
            .removeClass("is-active");
          $(this)
            .closest(".gallery__item")
            .children(".gallery__imgAfter")
            .addClass("is-active");
          $(this)
            .closest(".gallery__item")
            .children(".gallery__imgBefore")
            .removeClass("is-active");
        } else {
          $(".gallery__item").removeClass("is-active");
          $(this).addClass("is-active");
          $(".gallery__item")
            .closest(".gallery__item")
            .children(".gallery__caption")
            .children(".gallery__descriptiongAfter")
            .removeClass("is-active");
          $(this)
            .closest(".gallery__item")
            .children(".gallery__caption")
            .children(".gallery__descriptiongAfter")
            .addClass("is-active");
        }
      } else {
        $(".gallery__item").removeClass("is-active");
        $(this).addClass("is-active");
        $(this)
          .closest(".gallery__item")
          .children(".gallery__imgAfter")
          .removeClass("is-active");
        $(this)
          .closest(".gallery__item")
          .children(".gallery__imgBefore")
          .addClass("is-active");
      }
    });
  }

  //header sticky
  if ($(document).scrollTop() > $(".fixed-top").height()) {
    $(".fixed-top").toggleClass("scrolled");
  }

  $(window).on("scroll", function() {
    $(".container__header").toggleClass(
      "scrolled",
      $(this).scrollTop() > $(".container__header").height() / 3
    );
  });


  //nav-menu
  $(".burger-menu").on("click", function(event) {
    event.preventDefault();
    $(".header__nav").toggleClass("is-active");
    $(".burger-menu").toggleClass("is-active");
    $(".header__subList").removeClass("is-active");
    $("body").toggleClass("is-active");
    $(".header__home").toggleClass("is-active");
    $(".header__requestMobile").toggleClass("is-active");
  });
  
  //sub-menu
  if ($(window).outerWidth() > widthWorksPC) {
    $(".submenu").on("mouseenter", function() {
      event.preventDefault();
      $(this).addClass("is-active");
      $(".header__subList").addClass("is-active");    
    });
    $(".header__subList").on("mouseleave", function() {
      $(".submenu").removeClass("is-active");
      $(".header__subList").removeClass("is-active");
    });
  } else {
  $(".submenu").on("click", function() {
      event.preventDefault();
      $(".submenu").toggleClass("is-active");
      $(".header__subList").toggleClass("is-active");
      $(".header__subList").on("mouseleave", function() {
        $(".submenu").removeClass("is-active");
        $(".header__subList").removeClass("is-active");
      });
    });
  }
  
  // $(".submenu").on("mouseleave", function() {
  //   event.preventDefault();
  //   $(this).removeClass("is-active");
  //   $(".header__subList").removeClass("is-active");
  // });

  


  $(".reviews__list").slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    variableWidth: true
  });
});
