/**
 * Stretches the HR element in the BWNF section
 */
(function stretch() {
 $(".main-hr").animate({width: "250px"}, 1500);
})();

/**
 * Creates Date Object and returns the year value for the footer.
 */
const date = new Date();
$("#year").html(date.getFullYear());

/**
 * Loop through the following every half a second just in case window size changes:
 ** If the window has room for more content, send the footer to the bottom of the page.
 ** If the screen is smaller than 550px, keep the footer on regular flow.
 *** In some cases both will be true, order of the if statements allows the removal to be prioritized.
 */
let findHeight = setInterval(function() {
  if ($(document).height() == $(window).height()) {
    $("footer").addClass("absolute-bottom");
  }
  if ($(window).height() < 550) {
    $("footer").removeClass("absolute-bottom");
  }
}, 500);

/**
 * Loop through the following every 5 seconds just in case the window size changes:
 ** If the window size is less than 220px, give a countdown and reload the page.
 */
let findWidth = setInterval(function() {
  let timer = 5;
  if ($(window).width() < 220) {
    setInterval(function() {
      $("body").html("Your screen size is too small for this page. Please utilize a larger screen. Page will reload in " + timer);
      timer--;
      if (timer == 0) {
        location.reload();
      }
    }, 1000);
  }
}, 5000);

/**
 * Iterates through the array of background images and displys each image
 */
let images = ["./imgs/bwnf-1.jpg", "./imgs/bwnf-2.jpg", "./imgs/bwnf-3.jpg"];
$('.bg-image').fadeIn(1000, changeBackgroundImage());
function changeBackgroundImage() {
  window.setTimeout(function(){
    var url = images[images.push(images.shift()) - 1];
    $('.bg-image').delay(4000).fadeOut(1000, function(){
      $(this).css("background-image", "url(" + url + ")")
    }).fadeIn(1000, changeBackgroundImage())
  });
}
