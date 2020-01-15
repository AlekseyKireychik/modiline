//BackForm input-file

jQuery.each(jQuery("textarea[data-autoresize]"), function() {
  var offset = this.offsetHeight - this.clientHeight;

  var resizeTextarea = function(el) {
    jQuery(el)
      .css("height", "auto")
      .css("height", el.scrollHeight + offset);
  };
  jQuery(this)
    .on("keyup input", function() {
      resizeTextarea(this);
    })
    .removeAttr("data-autoresize");
});

$(document).ready(function() {
  //vacancies
  $(".vacancies__btn").on("click", function(event) {
    event.preventDefault();
    if ($(this).hasClass("is-active")) {
      $(".panel-title").removeClass("is-active");
      $(".vacancies__btn").removeClass("is-active");
    } else {
      $(".panel-title").removeClass("is-active");
      $(".vacancies__btn").removeClass("is-active");
      $(this)
        .closest(".panel-heading")
        .children(".panel-title")
        .addClass("is-active");
      $(this).addClass("is-active");
    }
  });

  //news
  $(".news__btn").on("click", function(event) {
    event.preventDefault();
    if ($(this).hasClass("is-active")) {
      $(".news__btn").removeClass("is-active");
      $(this).removeClass("is-active");
    } else {
      $(".news__btn").removeClass("is-active");
      $(this).addClass("is-active");
    }
  });

  $(".news__selectValue").on("click", function(event) {
    event.preventDefault();
    $(".news__nav").toggleClass("is-active");
  });

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

  $("#comment").bind("input", function() {
    if ($("#comment").html($(this).val().length)) {
      $(this).addClass("change");
    } else {
      $(this).removeClass("change");
    }
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
  //gallery

  $(".gallery__link").on("click", function() {
    event.preventDefault();
    $(this)
      .closest(".gallery__item")
      .children(".gallery__imgBefore")
      .toggleClass("is-active");
    $(this)
      .closest(".gallery__item")
      .children(".gallery__imgAfter")
      .toggleClass("is-active");
    $(this)
      .closest(".gallery__item")      
      .children(".gallery__caption")
      .children(".gallery__descriptiongAfter")
      .toggleClass("is-active");
    $(this)
      .closest(".gallery__item")
      .children(".gallery__caption")
      .children(".gallery__descriptionBefore")
      .toggleClass("is-active");
  });
  //header sticky
  if ($(document).scrollTop() > $(".fixed-top").height()) {
    $(".fixed-top").toggleClass("scrolled");
  }

  $(window).on("scroll", function() {
    $(".container__header").toggleClass(
      "scrolled",
      $(this).scrollTop() > $(".container__header").height()/2
    );
  });
  //nav-menu

  $(".burger-menu").on("click", function(event) {
    event.preventDefault();
    $(".header__nav").toggleClass("is-active");
    $(".burger-menu").toggleClass("is-active");
    $(".header__subList").removeClass("is-active");
    $("body").toggleClass("is-active");
  });

  //sub-menu

  $(".submenu").on("click", function() {
    event.preventDefault();
    $(".submenu").toggleClass("is-active");
    $(".header__subList").toggleClass("is-active");
  });
  $(".reviews__list").slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    variableWidth: true
  });
});
