window.onload = function Start() { 
   console.log('hello world'); 

   var app_1 = document.getElementById("app"); 
   app_1.innerHTML = '<b>hello world</b>'; 

   app_1.innerHTML = app_1.innerHTML + 
      '<br><input type="button" value="Add Data" onclick="loadOutlookData();" />'; 
} 

Office.initialize = function (reason) { 
}; 

window.loadOutlookData = loadOutlookData; 
function loadOutlookData() { 
   console.log('outlook data loaded'); 

   var item = Office.context.mailbox.item; 
   document.getElementById("app").innerHTML = "<b>Subject:</b> <br/>" + item.subject 
} 