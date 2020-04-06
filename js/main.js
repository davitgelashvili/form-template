$("form.continue").submit(function( event ) {
  event.preventDefault();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("step").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "signup-step2.html", true);
  xhttp.send();
});