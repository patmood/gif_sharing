$(document).ready(function() {
  checkPreviousVote()
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
          if (value === "up"){
            highlightUp()
            changeScoreDisplay(1)
          }
          if (value === "down"){
            highlightDown()
            changeScoreDisplay(-1)
            // nextGif()
          }
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
}
function highlightDown(){
  $('#downvote').addClass('highlight')
  $('#upvote').removeClass('highlight')
}
function hasVoted(){
  return $('#upvote').hasClass('highlight') || $('#downvote').hasClass('highlight')
}
function checkPreviousVote(){
  if ($('#neighbors').data('vote') === "up") highlightUp()
  if ($('#neighbors').data('vote') === "down") highlightDown()
}
function changeScoreDisplay(change){
  var newScore = parseInt($('.score').text())+change
  $('.score').text(newScore)
}
