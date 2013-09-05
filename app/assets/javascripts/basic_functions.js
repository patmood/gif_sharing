$(document).ready(function() {
  var nextGif = function(){ window.location.href='/'+$('#neighbors').data('next') }
  var prevGif = function(){ window.location.href='/'+$('#neighbors').data('prev') }
  var vote = function(value){
    console.log(hasVoted())
    if (!hasVoted()) {
      $.post('/boat', {token: $('#neighbors').data('token'), vote: value})
      if (value === "down") {
        nextGif()
        highlightDown()
      }
      if (value === "up") highlightUp()
    }
  }

  $('div').click(nextGif)

  // keyboard controls
  $(document).keydown(function(e){
    var key = e.which

    // arrow keys
    if(key === 32) nextGif() // space
    else if (key === 39) nextGif() // right
    else if (key === 37) prevGif() // left
    else if (key === 38) vote("up") // up
    else if (key === 40) vote("down") // down
  })

})

function highlightUp(){
  $('.icon-arrow-up').addClass('highlight')
  $('.icon-arrow-down').removeClass('highlight')
  var newScore = parseInt($('.score').text())+1
  $('.score').text(newScore)
}
function highlightDown(){
  $('.icon-arrow-down').addClass('highlight')
  $('.icon-arrow-up').removeClass('highlight')
  var newScore = parseInt($('.score').text)-1
  $('.score').text(newScore)
}
function hasVoted(){
  return $('.icon-arrow-up').hasClass('highlight') || $('.icon-arrow-down').hasClass('highlight')
}
