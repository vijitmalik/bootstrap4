/*for tooltip
  <script>
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });
  </script> */
  
    $(document).ready(function(){
      $("#mycarousel").carousel( { interval: 2000 } );
      $("#carouselButton").click(function(){

        if ($("#carouselButton").children("span").hasClass("fa-pause"))
        {
          $("#mycarousel").carousel("pause");
          $("#carouselButton").children("span").removeClass("fa-pause");
          $("#carouselButton").children("span").addClass("fa-play");
        }
        else if($("#carouselButton").children("span").hasClass("fa-play")){
          $("#mycarousel").carousel("cycle");
          $("#carouselButton").children("span").removeClass("fa-play");
          $("#carouselButton").children("span").addClass("fa-pause");
        };
      });
      //showing login and reserve table modal
        $("#login").click(function(){
          $("#loginmodal").modal("show");
        });
        $("#reservebutton").click(function(){
          $("#reservemodal").modal("show");
        });
      //dismiss modal
        $("#modaldismiss1").click(function(){
          $("#loginmodal").modal("hide");
        });
        $("#modaldismiss2").click(function(){
          $("#reservemodal").modal("hide");
        });

    });
