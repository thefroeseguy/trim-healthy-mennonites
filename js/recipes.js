$(document).ready(function() {
    const recipes = document.querySelectorAll('.recipes');
    $(recipes).hide();
    $('.recipe-nav').on('click', function(e) {
        const navIndex = $(e.target).parent().parent().index();
        $('.recipes').fadeOut();
        $(recipes[navIndex]).fadeIn();
    })
    
});