$(document).ready(function() {
  $("#click1").click(function() {
  $(".desc").show();
  $("#click1").hide();
  });
  $(".desc").click(function() {
  $("#click1").show();
  $(".desc").hide();
  });

  $("#click2").click(function() {
  $(".desc2").show();
  $("#click2").hide();
  });
  $(".desc2").click(function() {
  $("#click2").show();
  $(".desc2").hide();
  });

  $("#click3").click(function() {
  $(".desc3").show();
  $("#click3").hide();
  });
  $(".desc3").click(function() {
  $("#click3").show();
  $(".desc3").hide();
  });
  });

$(document).ready(function() {
  $(".pt1").hover(function(){
  $(".pt1").mouseenter(function(){
  $("#button").show();
  });

  $(".pt1").mouseleave(function(){
  $("#button").hide();
  });
  });
  $(".pt1").hover(function(){
   $(".pt1").mouseenter(function(){
    $("#button").show();
  });
    $(".pt1").mouseleave(function(){
    $("#button").hide();
  });
  });
  $(".pt2").hover(function(){
  $(".pt2").mouseenter(function(){
  $("#button2").show();
  });
  $(".pt2").mouseleave(function(){
  $("#button2").hide();
   });
  });
  $(".pt3").hover(function(){
   $(".pt3").mouseenter(function(){
     $("#button3").show();
     });
    $(".pt3").mouseleave(function(){
    $("#button3").hide();
  });
  });
  $(".pt4").hover(function(){
  $(".pt4").mouseenter(function(){
    $("#button4").show();
    });
    $(".pt4").mouseleave(function(){
    $("#button4").hide();
    });
    });
  $(".pt5").hover(function(){
    $(".pt5").mouseenter(function(){
    $("#button5").show();
    });
    $(".pt5").mouseleave(function(){
    $("#button5").hide();
          });

      });
      $(".pt6").hover(function(){
        $(".pt6").mouseenter(function(){
        $("#button6").show();
        });
        $(".pt6").mouseleave(function(){
          $("#button6").hide();
          });

      });
      $(".pt7").hover(function(){
        $(".pt7").mouseenter(function(){
        $("#button7").show();
        });
        $(".pt7").mouseleave(function(){
        $("#button7").hide();
          });

      });
      $(".pt8").hover(function(){
        $(".pt8").mouseenter(function(){
        $("#button8").show();
        });
        $(".pt8").mouseleave(function(){
          $("#button8").hide();
          });

      });
    });
$(document).ready(function() {
  $("#myBtn").click(function(){
  var name=$("#name").val();
  var email=$("#email").val();
  var textarea=$("#message").val();

  if ($('#name').val() == '') {
    alert('please fill the form');
  }
  else if ($('#email').val() == '') {
    alert('please fill the form');
  }
  else if ($('#styled').val() == '') {
    alert('please fill the form');
  }
  else{

alert("Dear" + name +";"+" we have received your message.Thank you for reaching out to us.");
  }
});

});
