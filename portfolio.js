//  $(document).ready(function(){
//      $(".navbar a[herf='#']").on("click", function(event){
//          var target = $(this.getAttribute("herf"));
//          if(target.length) {
//              event.preventDefault();
//              $("html,body").animate({
//                  scroll: target.offset().top
//              },1000)
//          }

//      })
//  })

//  $(document).ready(function(){
//      $(".navbar-one").click(function(){
//         $(".navbar-two").slideToggle("slow");
//      });
//  });
$(document).ready(function () {
    $("#magic").click(function () {
        $("#inmagic").slideToggle("fast");

        $("#inmagic1").slideUp("fast");
        $("#inmagic2").slideUp("fast");
        $("#inmagic3").slideUp("fast");
        $("#inmagic4").slideUp("fast");

    });
   
    $("#inmagic").hide();
1
    $("#magic1").click(function () {
        $("#inmagic1").slideToggle("fast");
        $("#inmagic").slideUp("fast");
        $("#inmagic").slideUp("fast");
        $("#inmagic2").slideUp("fast");
        $("#inmagic3").slideUp("fast");
        $("#inmagic4").slideUp("fast");
    });
    $("#inmagic1").hide();

    $("#magic2").click(function () {
        $("#inmagic2").slideToggle("fast");
        $("#inmagic1").slideUp("fast");
        $("#inmagic").slideUp("fast");
        $("#inmagic3").slideUp("fast");
        $("#inmagic4").slideUp("fast");
    });
    $("#inmagic2").hide();

    $("#magic3").click(function () {
        $("#inmagic3").slideToggle("fast");
        $("#inmagic1").slideUp("fast");
        $("#inmagic2").slideUp("fast");
        $("#inmagic").slideUp("fast");
        $("#inmagic4").slideUp("fast");
    });
    $("#inmagic3").hide();

    $("#magic4").click(function () {
        $("#inmagic4").slideToggle("fast");
        $("#inmagic1").slideUp("fast");
        $("#inmagic2").slideUp("fast");
        $("#inmagic3").slideUp("fast");
        $("#inmagic").slideUp("fast");
    });
    $("#inmagic4").hide();
});
$(document).ready(function () {
$(".navbar-menu").click(function(){
    $(".navbar-two").slideToggle("fast");
});
$(".navbar-two").click(function(){
    $(".navbar-two").hide();
});
$(".navbar-two").hide();
});
$(document).ready(function () {
    $(".but-first").click(function(){
        $("this").html("a ")
    })
})