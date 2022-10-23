

var span = document.getElementById('val')

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

var show=false;
  $("li.option").on( "click",function(){
    console.log("clicked")
    if(show){
      $("#list-2").show()
      $("#list-1").show()
show= false;
//$("#header").removeClass("small")

    }
    else{
    //  $("#header").addClass("small")
      $("#list-1").hide()
      $("#list-2").hide()
      show=true;

    }

  })





  var page = 1;
  $( "#ind-2" ).on('click',function() {

    $(".pg-"+page.toString()).hide()
    $(this).addClass("chos")
    $("#ind-"+page.toString()).removeClass("chos")

    $(".pg-2").show()
    page = 2

  });
  $( "#ind-3" ).on('click',function() {
    $(".pg-"+page.toString()).hide()
    $(this).addClass("chos")
    $("#ind-"+page.toString()).removeClass("chos")
    $(".pg-3").show()
  page = 3


  });
  $( "#ind-4" ).on('click',function() {
    $(".pg-"+page.toString()).hide()
    $(this).addClass("chos")
    $("#ind-"+page.toString()).removeClass("chos")
    $(".pg-4").show()
  page = 4


  });
  $( "#ind-5" ).on('click',function() {
    $(".pg-"+page.toString()).hide()
    $(this).addClass("chos")
    $("#ind-"+page.toString()).removeClass("chos")
    $(".pg-5").show()
  page = 5


  });
  $( "#ind-6" ).on('click',function() {
    $(".pg-"+page.toString()).hide()
    $(this).addClass("chos")
    $("#ind-"+page.toString()).removeClass("chos")
    $(".pg-6").show()
  page = 6


  });
  $( "#ind-1" ).on('click',function() {
    $(".pg-"+page.toString()).hide()
  $(this).addClass("chos")
  $("#ind-"+page.toString()).removeClass("chos")
    $(".pg-1").show()
  page = 1
  });



  function goto(page){
          location.href = page;
  }
