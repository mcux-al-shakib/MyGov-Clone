
/*==================== Change background header ====================*/ 
var header = document.querySelector('header');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          header.classList.add('bg-white');
        } else {
          header.classList.remove('bg-white');
        }
      });

/*==================== Commonly asked section ====================*/ 
function divShowHide(toggle_div_id, icon_div_id) {
    // console.log($("#" + icon_div_id).html());
    $("#" + toggle_div_id).toggle('slow');

    if($("#" + icon_div_id).html().indexOf('<i class="uil uil-angle-up uil-lg"></i>') != -1){
        $("#" + icon_div_id).html('<i class="uil uil-angle-down uil-lg"></i>');
    }else{
        $("#" + icon_div_id).html('<i class="uil uil-angle-up uil-lg"></i>');
    }
}

$(document).ready(function () {
    var i=0;
    for(i=2;i<8;i++){
        if(i!=7)
            $("#commonly_asked_div_"+i).toggle('slow');
    }

});

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

// ===================Owl Carusel===========================
$(document).ready(function(){
 
  $(".owl-carousel").owlCarousel({
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
 
});