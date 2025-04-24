document.getElementById("calcBtn").onclick = function() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
  
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      alert("Please enter valid positive numbers.");
      return;
    }
  
    var perimeter = 2 * (length + width);
    var area = length * width;
  
    document.getElementById("perimeter").innerText = "Perimeter: " + perimeter;
    document.getElementById("area").innerText = "Area: " + area;
  };
  