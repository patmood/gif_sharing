$(document).ready(function() {
  // var previous = $('#prev').data('prev')
  var nextGif = function(){
    window.location.href='/'+$('#neighbors').data('next')
  }
  var prevGif = function(){
    window.location.href='/'+$('#neighbors').data('prev')
  }

  $('div').click(nextGif)

  // keyboard controls
  $(document).keydown(function(e){
    var key = e.which

    // arrow keys
    // if(key == "37" && d != "right") d = "left"
    // else if (key == "38" && d != "up") d = "down"
    // else if (key == "39" && d != "left") d = "right"
    // else if (key == "40" && d != "down") d = "up"

    if(key == "39") nextGif()
    else if (key == "37") prevGif()

  })
})

