$('document').ready(function() {



//things to hide
$('.loading-section').addClass( "show-me-not")
$('.home-website-info').addClass( "show-me-not")
$('.home-css-info').addClass( "show-me-not")
$('.home-design-info').addClass( "show-me-not")
$('.home-js-info').addClass( "show-me-not")

// home state start now button
$('.enter-button').on('click', function() {
  $('.home-screen-section').slideToggle( "show-me-not" );
  $('.loading-section').addClass( "show-me")
  setTimeout(function(){
    $('.loading-section').removeClass( "show-me")
  }, 3800);
})

// home page info reveal
$('.website-widget').on('click', function() {
  $('.home-website-info').slideToggle( "show-me" );
})
$('.css-widget').on('click', function() {
  $('.home-css-info').slideToggle( "show-me" );
})
$('.design-widget').on('click', function() {
  $('.home-design-info').slideToggle( "show-me" );
})
$('.js-widget').on('click', function() {
  $('.home-js-info').slideToggle( "show-me" );
})


});
