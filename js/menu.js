var txt;
var url;
var tab = "Home";
var ptr = 0;

$('#site-menu').on('show.bs.collapse', function (e) {
  $("#toggle").text("");
})

$('#site-menu').on('hide.bs.collapse', function (e) {
  $("#toggle").text("" + tab); 
})

$('.jump-page').click(function() {
  tab = $(this).text();
  $("#toggle").text("" + tab);
  if($(window).width() < 768) {
    if(ptr==0){ $('#toggle').click(); }
    else{ptr = 0;}
  }
  return true;
});

$('.ptr').click(function() {
  ptr = 1;
  $('#li-author').click();
  $('html,body').animate({scrollTop: $("#sp").offset().top}, 600);
  return false;
});

$('.ptr2').click(function() {
  ptr = 1;
  $('#li-author').click();
  $('html,body').animate({scrollTop: $("#ai").offset().top}, 600);
  return false;
});

$('.ptr3').click(function() {
  ptr = 1;
  $('#li-author').click();
  $('html,body').animate({scrollTop: $("#id").offset().top}, 600);
  return false;
});

$('.key3').click(function() {
  ptr = 1;
  $('#li-keynotes').click();
  $('html,body').animate({scrollTop: $("#keyinfo3").offset().top}, 600);
  return false;
});

$('.key5').click(function() {
  ptr = 1;
  $('#li-keynotes').click();
  $('html,body').animate({scrollTop: $("#keyinfo2").offset().top}, 600);
  return false;
});

$('.key6').click(function() {
  ptr = 1;
  $('#li-keynotes').click();
  $('html,body').animate({scrollTop: $("#keyinfo1").offset().top}, 600);
  return false;
});

$('.key7').click(function() {
  ptr = 1;
  $('#li-keynotes').click();
  $('html,body').animate({scrollTop: $("#keyinfo4").offset().top}, 600);
  return false;
});

$('.key9').click(function() {
  ptr = 1;
  $('#li-keynotes').click();
  $('html,body').animate({scrollTop: $("#keyinfo5").offset().top}, 600);
  return false;
});


