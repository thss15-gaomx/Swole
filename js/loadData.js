const equipmentList = {
  "cardio": ["Treadmill 1", "Treadmill 2", "Treadmill 3", "Treadmill 4", "Elliptical 1", "Elliptical 2", "Elliptical 3"],
  "weights": ["Benchpress 1", "Benchpress 2", "Bicep Curl 1", "Bicep Curl 2", "Lateral Pull Down 1", "Lateral Pull Down 2", "Leg Press 1", "Leg Press 2"],
  "pool": ["Lane 1", "Lane 2", "Lane 3", "Lane 4"],
  "basketball": ["Court 1", "Court 2"]
}

const badges = ['<span class="red lighten-2 badge" data-badge-caption="using"></span>', '<span class="new badge" data-badge-caption="available"></span>'];
const details = '<div class="collapsible-body"> \
                  <div>\
                      <i class="material-icons left">place</i>\
                      <span>Dodge fitness center floor 3</span>\
                  </div>\
                  <br/>\
                  <div>\
                      <i class="material-icons left">timelapse</i>\
                      <span>Usually available: 5pm - 6pm</span>\
                  </div>\
                </div>';

$(document).ready(function(){
  $('.collapsible').collapsible();
});

var url = document.location.toString();
var para = url.split("?")[1];

var collapsibleValue = equipmentList[para].map(x=>'<li><div class="collapsible-header">' + x + badges[Math.ceil(Math.random()*10) % 2] + '</div>' + details + '</li>');
$(".collapsible").empty().append(collapsibleValue);