var newElement = require('new-element')
var fs = require('fs')
var template = fs.readFileSync('./button.html').toString()

var buttons = document.querySelector('.html5-player-chrome')
var button = newElement(template)
var href = window.location.href
var parts = href.split(':')
parts.shift() // get rid of https
parts.unshift('playback')
button.href = parts.join(':')
buttons.insertBefore(button, buttons.firstChild)

button.addEventListener('click', function () {
  var pause = buttons.querySelector('.ytp-button-pause')
  if (pause) pause.click()
})
