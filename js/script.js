function slideText() {
  $('.text').slideToggle()

  var button = document.getElementById('button')

  if (button.innerHTML === 'Show more') {
    button.innerHTML = 'Show less'
  } else {
    button.innerHTML = 'Show more'
  }
}

$('.button').click(slideText)