// BACKEND
function Movie(movie, time, adult, youth, senior, cost) {
  this.movie = movie;
  this.time = time;
  this.adult = adult;
  this.youth = youth;
  this.senior = senior;
  this.cost = cost;
}

Movie.prototype.ticket = function() {
  if (movieTitle === 'R'){
    return "You have reserved " + this.adult + " adult ticket(s) " + this.youth + " youth ticket(s) and" + this.senior + " senior ticket(s) for " + this.movie + " at " + this.time + "PM today. Please rember to bring your I.D. Your total is $"+ this.cost+ ". Enjoy the show!";
  } else {
    return "You have reserved " + this.adult + " adult ticket(s) " + this.youth + " youth ticket(s) and" + this.senior + " senior ticket(s) for " + this.movie + " at " + this.time + "PM today. Your total is $"+ this.cost+ ". Enjoy the show!";
  }
}



// FRONTEND
$(document).ready(function() {
  $('#movieForm').submit(function (event) {
    event.preventDefault();

    var movieTitle = $('#movieTitle').val();
    var time = $("input:radio[name=choice]:checked").val();

    if (movieTitle === 'Conjuring 2'){
      var ageGate = confirm ('This movie is for viewers over the age of 18. If you are under 18, you must be accompanied by a guardian. ID will be checked at entry.');
    }
    if (ageGate !== false){
      $('#timetable').show();
    }
    if (!time) {
      alert("Please select a time.");
      return;
    }

    var adultTicket = parseInt($('#adult').val());
    var youthTicket = parseInt($('#youth').val());
    var seniorTicket = parseInt($('#senior').val());
    if (!adultTicket) {
      adultTicket = 0;
    }
    if (!youthTicket) {
      youthTicket = 0;
    }
    if (!seniorTicket) {
      seniorTicket = 0
    }
    var cost = (adultTicket * 15) + (youthTicket * 10) + (seniorTicket * 8);

    if ((time === "12") || (time === "1") || (time === "2") || (time === "3")) {
      cost = cost -(2*(adultTicket+youthTicket+seniorTicket));
    }

    var booking = new Movie(movieTitle, time, adultTicket, youthTicket, seniorTicket, cost);
    $('#ticket').append(booking.ticket()).show();
  });
});
