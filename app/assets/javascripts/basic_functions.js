$(document).ready(function() {
  var nextGif = function(){ window.location.href='/'+$('#neighbors').data('next') }
  var prevGif = function(){ window.location.href='/'+$('#neighbors').data('prev') }
  var vote = function(value){
    console.log('value argument: ',value)
    console.log('has voted: ',!hasVoted())
    var token = $('#neighbors').data('token')
    console.log(token,value)
    if (!hasVoted()) {
      $.ajax({
        type: 'POST',
        url: '/boat',
        success: function(){
          if (value === "down") {
            highlightDown()
            // nextGif()
          }
          if (value === "up") highlightUp()
        },
        data: {token: token, vote: value},
        async:false
      })
    }
  }


  $('#huge').click(nextGif)
  $('#upvote').click(function(){ vote("up") })
  $('#downvote').click(function(){ vote("down") })

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
  $('#upvote').addClass('highlight')
  $('#downvote').removeClass('highlight')
  var newScore = parseInt($('.score').text())+1
  $('.score').text(newScore)
}
function highlightDown(){
  $('#downvote').addClass('highlight')
  $('#upvote').removeClass('highlight')
  var newScore = parseInt($('.score').text())-1
  $('.score').text(newScore)
}
function hasVoted(){
  return $('#upvote').hasClass('highlight') || $('#downvote').hasClass('highlight')
}
