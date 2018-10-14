/*jslint browser: true*/
/*global $, jQuery*/

const navbarLi = document.querySelectorAll('.navbar li');

//for (let i = 0; i < navbarLi.length; i++) {
//    $(navbarLi[i]).hide().fadeIn(1000).delay(3000);
//}

$('ul.navbar').hide().each(function() {
    $(this).fadeIn('slow');
})