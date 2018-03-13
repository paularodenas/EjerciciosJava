$("#imagen1");
$("#mensaje_img1");

$("#imagen1") .hover(function(){
 $("#mensaje_img1").show()

 }, function(){
     $("#mensaje_img1").hide()
 });

 $("document").ready(function(){
     $("#mensaje_img1").hide()
 });
