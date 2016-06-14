


chrome.storage.sync.get(function(whole) {
    // Notify that we saved.
    
    var arr = whole["whole_storage"];

    arr.forEach(function(item){
      var html_table = document.getElementById("all_rules").innerHTML;
      html_table += "<tr>";
      html_table += "<td>" + item['name'] + "</td>";
      html_table += "<td>" + item['URL'] + "</td>";
      html_table += "<td>" + item['select'] + "</td>";
      if (item['delete'])
        html_table += "<label><td><input type='checkbox'></td></label>";
      else
        html_table += "<td></td>";
      html_table += "</tr>";
      document.getElementById("all_rules").innerHTML = html_table;
    });
    document.getElementById("all_rules").innerHTML += "</table>";
});


/*
"options_ui": {
    "page": "html/options.html",
    "chrome_style": false,
    "open_in_tab": true
  },


"options_page": "html/options.html",
  
  */



