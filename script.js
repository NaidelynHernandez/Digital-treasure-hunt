$("#NUMBER1").click(function() {
$("#a").hide();
});

$("#l").hide();
$(".hidden").hide();
$(".hidden2").hide();
$("#blue").hide();
$("#c").hide();
$("#dance").hide();
$("#color").hide();
$("#d").hide();
$("#gif").hide();

$("#NUMBER1").click(function(){
$("body").css("background","url(https://i.pinimg.com/originals/73/71/f9/7371f959e7ef1cdafb5cab980602964a.gif)");
});

$("#NUMBER1").click(function(){
$("#c").show();
});


$("#NUMBER1").click(function(){
$("#flower").show();
});

$("p").click(function(){
$("#happy").show();
});



$("#flower").click(function(){
    $("#happy").fadeIn();
    $("#l").show();
});

$("#happy").click(function(){
$("#flower").hide();
});

$("#happy").click(function(){
$("#l").hide();
});

$("#flower").click(function(){
    $("#blue").show();
});


$("#blue").click(function(){
$("body").css("background","url(https://i.gifer.com/guw.gif)");
$("#c").hide();
$("#happy").hide();
$("#dance").show();
$("#blue").fadeOut();
$("#d").show();
});
 $("#dance").click(function(){
    $("#color").show();
    $("#Number1").hide();
    $("#d").hide();    
 });
 
