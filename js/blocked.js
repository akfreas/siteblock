// Copyright 2012 Constantine Sapuntzakis
//

function onload() {
    var ws = window.location.search;

  if (ws !== undefined) {
      var kvs = ws.substring(1).split('&');
      var state = JSON.parse(localStorage['state']);
      var next_start = state['ut']['last_end'];
      var current_time = new Date();
      var difference = next_start * 1000 - current_time.getTime();
      var df = new Date(difference);

      var diff_string = df.getHours()+":"+df.getMinutes()+":"+df.getSeconds();

      var remainder = document.getElementById("remaining");
      remainder.appendChild(document.createTextNode(diff_string));
    
      for (var i = 0; i < kvs.length; i++) {
         var kv = kvs[i].split('=');
         if (kv[0] == 'url') {
            
            var u = document.getElementById("url");
                       
            var url = decodeURIComponent(kv[1]);
            u.href = url;
            u.appendChild(document.createTextNode(url));
         }
      }
  }
}

document.addEventListener('DOMContentLoaded', onload);

