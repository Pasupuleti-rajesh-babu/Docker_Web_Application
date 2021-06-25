
function myfunc(){

    var command = document.getElementById("ip").value;
    
    var xhr = new XMLHttpRequest();
    
    var queryString = "http://192.168.1.6/cgi-bin/main.py?cmd=" + command;
    
    // go to the API
    xhr.open("GET", queryString, true);
    
    xhr.send();
    
    xhr.onload = function() {
      // get the response from API
      var output = xhr.responseText;
        
      // writing the output to a division
      document.getElementById("d1").innerHTML = output;
      }
    }
    function myfunc1(){

    
    
    var xhr = new XMLHttpRequest();
    
    var queryString = "http://192.168.1.6/cgi-bin/docker1.py";
    
    // go to the API
    xhr.open("GET", queryString, true);
    
    xhr.send();
    
    xhr.onload = function() {
      // get the response from API
      var output = xhr.responseText;
        
      // writing the output to a division
      document.getElementById("d1").innerHTML = output;
      }
    }
    
    function myfunc2(){

    
    
    var xhr = new XMLHttpRequest();
    
    var queryString = "http://192.168.1.6/cgi-bin/docker2.py";
    
    // go to the API
    xhr.open("GET", queryString, true);
    
    xhr.send();
    
    xhr.onload = function() {
      // get the response from API
      var output = xhr.responseText;
        
      // writing the output to a division
      document.getElementById("d1").innerHTML = output;
      }
    }
function myfunc3(){

    
    
    var xhr = new XMLHttpRequest();
    
    var queryString = "http://192.168.1.6/cgi-bin/centos.py";
    
    // go to the API
    xhr.open("GET", queryString, true);
    
    xhr.send();
    
    xhr.onload = function() {
      // get the response from API
      var output = xhr.responseText;
        
      // writing the output to a division
      document.getElementById("d1").innerHTML = output;
      }
    }  
function myfunc4(){

    
    
    var xhr = new XMLHttpRequest();
    
    var queryString = "http://192.168.1.6/cgi-bin/ubuntu.py";
    
    // go to the API
    xhr.open("GET", queryString, true);
    
    xhr.send();
    
    xhr.onload = function() {
      // get the response from API
      var output = xhr.responseText;
        
      // writing the output to a division
      document.getElementById("d1").innerHTML = output;
      }
    }  
function myfunc5(){

    
    
    var xhr = new XMLHttpRequest();
    
    var queryString = "http://192.168.1.6/cgi-bin/debian.py";
    
    // go to the API
    xhr.open("GET", queryString, true);
    
    xhr.send();
    
    xhr.onload = function() {
      // get the response from API
      var output = xhr.responseText;
        
      // writing the output to a division
      document.getElementById("d1").innerHTML = output;
      }
    }  
function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


