function openPDF() {
  var links = [
              "google.com",
              "youtube.com",
              "reddit.com",
              "apple.com"]
              
  
              openPDF = function() {
                // get a random number between 0 and the number of links
                var randIdx = Math.random() * links.length;
                // round it, so it can be used as array index
                randIdx = parseInt(randIdx, 10);
                // construct the link to be opened
                var link = 'http://' + links[randIdx];
                };
                
      return link;
      
      document.getElementById("link").innerHTML = openSite();
  }