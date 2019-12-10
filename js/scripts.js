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
  $(".port1").hover(function(){
  $(".port1").mouseenter(function(){
  $("#button").show();
  });

  $(".port1").mouseleave(function(){
  $("#button").hide();
  });
  });
  $(".port1").hover(function(){
   $(".port1").mouseenter(function(){
    $("#button").show();
  });
    $(".port1").mouseleave(function(){
    $("#button").hide();
  });
  });
  $(".port2").hover(function(){
  $(".port2").mouseenter(function(){
  $("#button2").show();
  });
  $(".port2").mouseleave(function(){
  $("#button2").hide();
   });
  });
  $(".port3").hover(function(){
   $(".port3").mouseenter(function(){
     $("#button3").show();
     });
    $(".port3").mouseleave(function(){
    $("#button3").hide();
  });
  });
  $(".port4").hover(function(){
  $(".port4").mouseenter(function(){
    $("#button4").show();
    });
    $(".port4").mouseleave(function(){
    $("#button4").hide();
    });
    });
  $(".port5").hover(function(){
    $(".port5").mouseenter(function(){
    $("#button5").show();
    });
    $(".port5").mouseleave(function(){
    $("#button5").hide();
          });

      });
      $(".port6").hover(function(){
        $(".port6").mouseenter(function(){
        $("#button6").show();
        });
        $(".port6").mouseleave(function(){
          $("#button6").hide();
          });

      });
      $(".port7").hover(function(){
        $(".port7").mouseenter(function(){
        $("#button7").show();
        });
        $(".port7").mouseleave(function(){
        $("#button7").hide();
          });

      });
      $(".port8").hover(function(){
        $(".port8").mouseenter(function(){
        $("#button8").show();
        });
        $(".port8").mouseleave(function(){
          $("#button8").hide();
          });

      });
    });
$(document).ready(function() {
  $("#submit").click(function(){
  var name=$("#name").val();
  var email=$("#email").val();
  var textarea=$("#styled").val();

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

alert("Dear" +name +";"+" we have received your message.Thank you for reaching out to us.");
  }
});

});
