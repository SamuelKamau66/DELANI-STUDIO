$(document).ready(function(){
  $(".onClick1").click(function() {
    $("#design").toggle();
    $("#click1").toggle();
  });

  $("onClick2").click(function()  {
    $("#dev").toggle();
    $("#click2").toggle();
  });
  $(".onClick3").click(function() {
    $("#mgt").toggle();
    $("#click3").toggle();
  });
});

$(document).ready (function() {
  $("div.image-frame").hover(function() {
    $(".work4").addClass();
  });
  $("div.image-frame").hover(function() {
    $(".work3").addClass();
  });
  $("div.image-frame").hover(function() {
    $(".work2").addClass();
  });
  $("div.image-frame").hover(function() {
    $(".work1").addClass();
  });
});

var btn = document.getElementById("myBtn");

btn.onClick = function(event) {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name not entered");
    return false;
  }
  var y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Email not entered");
    return false;
  }
  var z = document.forms["myForm"]["message"].value;
  if (z == "") {
    alert("You have no message to send");
    return false;
  }
  var person1Input = $("input#name").val();
  $("span#outputName").append(person1Input);
  $(".toast").toast("show");
  event.preventDefault();
}
$(".image").hover(function(){
  $(this).find(".proje").fadeIn()
}, function(){
  $(this).find(".proje").fadeOut()
}
)
})
