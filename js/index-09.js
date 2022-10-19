// var body = document.querySelector('body');
// // create 3 input elements
// var input_num = 3
// for (var i = 0; i < input_num; i++) {
//     var input = document.createElement('input');
//     body.appendChild(input);
// }
// var input = $('input');
// $(input[0]).attr('class', 'fname');
// $(input[1]).attr('class', 'lname');
// $(input[2]).attr('class', 'address');

// $(".fname, .lname").on({
//     keydown: function (e) {
//         if ((e.which < 65 || e.which > 90) && (e.which != 8 && e.which != 32 && e.which != 9)) {
//             console.log(e.which)
//             e.preventDefault();
//         }
//     }
// });

// $(input[2]).on({
//     keydown: function (e) {
//         if ((e.which < 65 || e.which > 90) && (e.which < 48 || e.which > 57) && (e.which != 8 && e.which != 32 && e.which != 9)) {
//             console.log(e.which)
//             e.preventDefault();
//         }
//     }
// });

// $(input).on({
//     keydown: function (e) {
//         switch ($(e.target).attr('class')) {
//             case 'fname':
//             case 'lname':
//                 if ((e.which < 65 || e.which > 90) && (e.which != 8 && e.which != 32 && e.which != 9)) {
//                     console.log(e.which)
//                     e.preventDefault();
//                 }
//                 break;
//             case 'address':
//                 if ((e.which < 65 || e.which > 90) && (e.which < 48 || e.which > 57) && (e.which != 8 && e.which != 32 && e.which != 9)) {
//                     console.log(e.which)
//                     e.preventDefault();
//                 }
//                 break;
//         }
//     }
// });

// $($(".btn")[0]).on("click", function () {
//     $(".box").toggle(1000);
//     $(this).toggleClass("btnOpen")
// });
// $($(".btn")[1]).on("click", function () {
//     $(".box").fadeToggle(1000);
// });
// $($(".btn")[2]).on("click", function () {
//     $(".box").slideToggle(1000);
// });
// $($(".btn")[3]).on("click", function () {
//     $(".box").css("background-color", "red").show(1000).fadeIn(1000);
// });
// $($(".btn")[4]).on("click", function () {
//     $(".movingBox")
//         // rotate inside the box
//         .animate({
//             left: '+=90%',
//         })
//         .animate({
//             top: '+=90%',
//         })
//         .animate({
//             left: '-=90%',
//         })
//         .animate({
//             top: '-=90%',
//         })
// });
// $("input").on({
//     focus: function (e) {
//         $(e.target).css("background-color", "yellow");
//     },
//     blur: function (e) {
//         $(e.target).css("background-color", "white");
//     },
//     keydown: function (e) {
//         switch ($(e.target).attr("name")) {
//             case "fname":
//             case "lname":
//                 if ((e.keyCode < 65 || e.keyCode > 90) && (e.keyCode != 8 && e.keyCode != 32)) {
//                     e.preventDefault();
//                 }
//                 break;
//         }
//     }
// })
var button = $("button");
var selected = "";
var counter = 0;

// parentId = $(".parent");
$(button).on("click", function () {
    let box = $("<div></div>");
    counter++;
    box.text(counter);
    box.addClass("children");
    box.click(function () {
        $(".children").removeClass("selected");
        if (this == selected) {
            $(this).removeClass("selected");
            selected = null;
        } else {
            $(".children").removeClass("selected");
            $(this).toggleClass("selected");
            selected = this;
        }
        if (selected != null) {
            $(selected).after(box);
        } else {
            $("#parent").append(box);
        }
    });
    $("#parent").append(box);
});
