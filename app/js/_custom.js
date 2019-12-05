//BackForm input-file

function getFileName() {
  let file = document.getElementById("uploaded-file").value;

  file = file
    .replace(/\\/g, "/")
    .split("/")
    .pop();

  document.getElementById("file-name").innerHTML =
    '<div id="del__container" class="del__container">' +
    file +
    '<span id="del-file"><span onclick="RemoveFunc()" class="name del-file-btn">Удалить файл</span></span>' +
    "</div>";
}
function RemoveFunc() {
  document.getElementById("uploaded-file").value = null;

  let remove = document.getElementById("del__container").remove();
  return false;
}

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
    $(".overlay").addClass("is-active");
    $(".overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".main__form").removeClass("is-active");
    });
    $(".form__btnClose").on("click", function(event) {
      $(".overlay").removeClass("is-active");
      $(".main__form").removeClass("is-active");
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

  $(".form").on("submit", function(e) {
    e.preventDefault();

    var formdata = {};
    var fields = [];
    var form = $(this);

    $(this)
      .find("[data-type]")
      .each(function(i, e) {
        var item = {};
        if ($(e).data("type") == "Radio Button") {
          if ($(e).is(":checked")) {
            item["type"] = $(e).data("type");
            item["label"] = $(e).data("label");
            item["value"] = $(e).val();
            item["required"] =
              typeof $(e).data("validation") != "undefined" ? "true" : "false";
            fields.push(item);
          }
        } else {
          item["type"] = $(e).data("type");
          item["label"] = $(e).data("label");
          if (item["type"] == "Checkbox") {
            $(e).is(":checked")
              ? (item["value"] = "ticked")
              : (item["value"] = "not ticked");
          } else {
            item["value"] = $(e).val();
          }
          item["required"] =
            typeof $(e).data("validation") != "undefined" ? "true" : "false";
          fields.push(item);
        }
      });

    formdata["formid"] = form.find("[name=formid]").val();
    formdata["url"] = form.find("[name=url]").val();
    formdata["culturecode"] = form.find("[name=culturecode]").val();
    formdata["fields"] = fields;

    formdata = JSON.stringify(formdata);

    $.ajax({
      type: "POST",
      url: "",
      data: formdata,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        form.trigger("reset");
      },
      error: function(data) {}
    });
  });

  //nav-menu

  $(".burger-menu").on("click", function(event) {
    event.preventDefault();
    $("#nav-menu").toggleClass("is-active");
    $(".burger-menu").toggleClass("is-active");
    $(".profile__subList").removeClass("is-active");
  });

  //menu

  $(".menu-title").on("click", function() {
    if ($(this).hasClass("is-active")) {
      $(".menu-title").removeClass("is-active");
      $(".menu__list").removeClass("is-active");
    } else {
      $(".menu-title").removeClass("is-active");
      $(".menu__list").removeClass("is-active");
      $(this)
        .children(".menu__list")
        .addClass("is-active");
      $(this).addClass("is-active");
    }
  });

  $(".header__link").hover(function(event) {
    event.preventDefault();
    $(this)
      .siblings(".header__subList")
      .toggleClass("is-active");
    $(".header__subList").on("mouseenter", function() {
      $(this).addClass("is-active");
    });
    $(".header__subList").on("mouseleave", function() {
      $(this).removeClass("is-active");
    });
  });

});
