//BackForm input-file

// jQuery.each(jQuery("textarea[data-autoresize]"), function() {
//   var offset = this.offsetHeight - this.clientHeight;

//   var resizeTextarea = function(el) {
//     jQuery(el)
//       .css("height", "auto")
//       .css("height", el.scrollHeight + offset);
//   };
//   jQuery(this)
//     .on("keyup input", function() {
//       resizeTextarea(this);
//     })
//     .removeAttr("data-autoresize");
// });

$(document).ready(function() {
  var stop_mobile_scroll = false;

    $('.callback__link').click(function(e){
      stop_mobile_scroll = true;
    });

    $('.popup__close').click(function(e){
      stop_mobile_scroll = false;
    });

    // $(document).on('touchmove',function(e){
    //   if (stop_mobile_scroll)
    //     e.preventDefault();
    // });

  //form
  $(".register").on("click", function(event) {
    event.preventDefault();
    stop_mobile_scroll = true;

    $(".main__form").addClass("is-active");
    $("body").addClass("is-active");
    $(".overlay").addClass("is-active");

    $(document).on('touchmove',function(e){
      if (stop_mobile_scroll)
        e.preventDefault();
    });

    $(".overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".main__form").removeClass("is-active");
      $("body").removeClass("is-active");
      stop_mobile_scroll = false;
      $(document).on('touchmove',function(e){
        if (stop_mobile_scroll)
          e.preventDefault();
      });      
    });

    $(".form__btnClose").on("click", function(event) {
      $(".overlay").removeClass("is-active");
      $(".main__form").removeClass("is-active");
      $("body").removeClass("is-active");
      stop_mobile_scroll = false;
      $(document).on('touchmove',function(e){
        if (stop_mobile_scroll)
          e.preventDefault();
      });
    });

  });
  //form success
  $("#btn-success").on("click", function(event) {
    $(".main__form-success").removeClass("is-active");
  });

  // $("#comment").bind("input", function() {
  //   if ($("#comment").html($(this).val().length)) {
  //     $(this).addClass("change");
  //   } else {
  //     $(this).removeClass("change");
  //   }
  // });

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

  //gallery -- PC
  let widthWorksPC = "1199";

  if ($(window).outerWidth() > widthWorksPC) {
    $(".gallery__item").on("mouseover", function() {
      $(this).addClass("hover");   
      console.log('111');   
      $(".gallery__item").on("click", function() {
        $(".gallery__item").removeClass("hover");
        event.preventDefault();        
        if (
          $(this).children(".gallery__imgBefore")
            .hasClass("is-active")
        ) {
          $(this).children(".gallery__imgBefore")
            .removeClass("is-active");
          $(this).children(".gallery__imgAfter")
            .toggleClass("is-active");
          $(this).children(".gallery__caption")
            .children(".gallery__descriptiongAfter")
            .toggleClass("is-active");
          $(this).children(".gallery__caption")
            .children(".gallery__descriptionBefore")
            .toggleClass("is-active");
        } else {
          $(this).children(".gallery__imgBefore")
            .toggleClass("is-active");
          $(this).children(".gallery__imgAfter")
            .toggleClass("is-active");
          $(this).children(".gallery__caption")
            .children(".gallery__descriptiongAfter")
            .toggleClass("is-active");
          $(this).children(".gallery__caption")
            .children(".gallery__descriptionBefore")
            .toggleClass("is-active");
        }
      });
    });
    $(".gallery__item").on("mouseout", function() {
      $(this).removeClass("hover");
    });
  }

  // if ($(window).outerWidth() > widthWorksPC) {
  //   $(".gallery__item").on("mousemove", function() {
  //     $(this).addClass("hover");      
  //     $(".gallery__link").on("click", function() {
  //       $(this)
  //       .closest(".gallery__item")
  //       .removeClass("hover");
  //       event.preventDefault();        
  //       if (
  //         $(this)
  //           .closest(".gallery__item")
  //           .children(".gallery__imgBefore")
  //           .hasClass("is-active")
  //       ) {
  //         $(this)
  //           .closest(".gallery__item")
  //           .children(".gallery__imgBefore")
  //           .removeClass("is-active");
  //         $(this)
  //           .closest(".gallery__item")
  //           .children(".gallery__imgAfter")
  //           .toggleClass("is-active");
  //         $(this)
  //           .closest(".gallery__item")
  //           .children(".gallery__caption")
  //           .children(".gallery__descriptiongAfter")
  //           .toggleClass("is-active");
  //         $(this)
  //           .closest(".gallery__item")
  //           .children(".gallery__caption")
  //           .children(".gallery__descriptionBefore")
  //           .toggleClass("is-active");
  //       } else {
  //         $(this)
  //           .closest(".gallery__item")
  //           .children(".gallery__imgBefore")
  //           .toggleClass("is-active");
  //         $(this)
  //           .closest(".gallery__item")
  //           .children(".gallery__imgAfter")
  //           .toggleClass("is-active");
  //         $(this)
  //           .closest(".gallery__item")
  //           .children(".gallery__caption")
  //           .children(".gallery__descriptiongAfter")
  //           .toggleClass("is-active");
  //         $(this)
  //           .closest(".gallery__item")
  //           .children(".gallery__caption")
  //           .children(".gallery__descriptionBefore")
  //           .toggleClass("is-active");
  //       }
  //     });
  //   });
  //   $(".gallery__item").on("mouseout", function() {
  //     $(this).removeClass("hover");
  //   });
  // }

  //gallery -- Phone
  if ($(window).outerWidth() < widthWorksPC) {
    let textDescriptionPhoto =
      "Нажмите на фото еще раз, если вы хотите посмотреть первоначальное состояние";
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


  // contacts map
  const heightMap = $(".contacts__caption").innerHeight();
  $(".contacts__containerMap").css('height', heightMap);
  console.log(heightMap);
  
  //sub-menu

  $(".submenu").on("click", function() {
    event.preventDefault();
    $(".submenu").toggleClass("is-active");
    $(".header__subList").toggleClass("is-active");
    $(".header__subList").on("mouseleave", function() {
      $(".submenu").removeClass("is-active");
      $(".header__subList").removeClass("is-active");
    });
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
