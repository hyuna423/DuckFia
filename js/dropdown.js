/* 
function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
}



function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}



function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}
 */

$(document).on('click', '.dropDownAll li', function(e){
    e.stopPropagation();
    $('.dropDownAll li').not($(this)).removeClass('active');
    $(this).toggleClass('active');
  });
  
     $(document).on('click', function() {
    $('.dropDownAll li').removeClass('active');
  });
  
  $(document).on('click', '.dropDownAll li div', function(e){
    e.stopPropagation(); 
  })