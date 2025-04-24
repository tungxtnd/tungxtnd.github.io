
    function calculateCircle() {
      var radius = parseFloat(document.getElementById("radius").value);
      var pi = 3.14;

      if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive radius.");
        return;
      }

      var perimeter = 2 * pi * radius;
      var area = pi * radius * radius;

      document.getElementById("perimeter").innerText = "Perimeter: " + perimeter.toFixed(2);
      document.getElementById("area").innerText = "Area: " + area.toFixed(2);
    }