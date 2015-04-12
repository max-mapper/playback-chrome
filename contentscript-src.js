var newElement = require('new-element')
var fs = require('fs')
var domready = require('domready')
var template = fs.readFileSync('./button.html').toString()

domready(inject)

function inject () {
  var buttons = document.querySelector('.html5-player-chrome')
  var button = newElement(template)
  
  button.href = getHref()
  buttons.insertBefore(button, buttons.firstChild)

  button.addEventListener('click', function () {
    var pause = buttons.querySelector('.ytp-button-pause')
    if (pause) pause.click()
  })
  
  // hack if wrong href got set at inject time
  button.addEventListener('mouseover', function () {
    button.href = getHref()
  }) 
}

function getHref() {
  var href = window.location.href
  var parts = href.split(':')
  parts.shift() // get rid of https
  parts.unshift('playback')
  return parts.join(':')
}
