const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(setTime, 1000);


function setTime(){
  var date = new Date ();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var secondsDegree = (seconds / 60 ) * 360 + 90;
  second.style.transform = `rotate(${secondsDegree}deg)`;

  var minDegree = ((minutes / 60 ) * 360) + 90;
  minute.style.transform = `rotate(${minDegree}deg)`;

  var hourDegree = ((hours / 12) * 360) + 90;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}
