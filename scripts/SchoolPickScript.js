var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var lastVisibleRow = null;

function makeIndPickBox(tbl) {
   
   var AllNames = new Array();
   var lastName = '';
   
   var rows = tbl.getElementsByTagName('tr');
   for (var i=1; i < rows.length; i++) {
      var name = rows[i].getElementsByTagName('td')[1].innerHTML;
      if (name != '&nbsp;') AllNames.push(name);  
   }
   AllNames.sort();

   var DistinctNames = new Array();
   for (var i=0; i < AllNames.length; i++) {
      var name = AllNames[i];
      if (name != lastName) DistinctNames.push(name);
      lastName = name;
   }
 
   var sel = document.createElement('select');
   document.getElementById('boxdiv').appendChild(sel);

   addOpt(sel, '(all schools)', '');  
   for (var i=0; i < DistinctNames.length; i++) {
     addOpt(sel, DistinctNames[i], DistinctNames[i]);   
   }
   attachEventListener(sel, 'change', selChanged); 
}

function setLVR(thick){
  
   if (lastVisibleRow != null) {
     var cells = lastVisibleRow.getElementsByTagName('td');
     for (var i=0; i < cells.length; i++)
        cells[i].style.borderBottomWidth = thick ;     
   }
}

function selChanged(e) {
    setLVR(1)
    var sel = document.getElementsByTagName('select')[0];
    var rows = document.getElementsByTagName('table')[0].getElementsByTagName('tr');

   var nam = sel.options[sel.selectedIndex].value;
   var altRow = true;
   var lastRank = '';
   
   for (var i = 1; i < rows.length; i++) {
       if (rows[i].getElementsByTagName('td')[1].innerHTML == nam || sel.selectedIndex == 0) {
          rows[i].style.display = '';
          if (rows[i].getElementsByTagName('td')[0].innerHTML != lastRank) altRow = !(altRow);
          if (altRow) rows[i].className = 'A'; else rows[i].className = '';
          lastRank = rows[i].getElementsByTagName('td')[0].innerHTML ;
          lastVisibleRow = rows[i];
       }  
       else
          rows[i].style.display = 'none';
   }
   
   setLVR(2);
      
   var tail = document.getElementById('tail');
   if (sel.selectedIndex == 0) {
     tail.innerHTML = ''; 
   }
   else {
      tail.innerHTML = '<br />A total of ' + 
                 //rows[rows.length - 1].getElementsByTagName('td')[0].innerHTML.match(/[0-9]+/) 
                 (rows.length - 1)                 + ' students took this test.';
   }
}

function addOpt(sel, optText, optValue) {
    var opt = document.createElement('option');
    opt.text = optText;
    opt.value = optValue;
    try{
        sel.add(opt);
     }
     catch (eXcpt) {
        sel.add(opt, null); 
     } 
}


 function attachEventListener(target, eventType, functionRef, capture) { 
   if (typeof target.addEventListener != "undefined")  { 
     target.addEventListener(eventType, functionRef, capture); 
   } 
   else  
     if (typeof target.attachEvent != "undefined")  { 
       target.attachEvent("on" + eventType, functionRef); 
     }
     else  { 
       eventType = "on" + eventType; 
       if (typeof target[eventType] == "function") { 
         var oldListener = target[eventType]; 
         target[eventType] = function() { 
           oldListener(); 
           return functionRef(); 
         }; 
       } 
     else { 
       target[eventType] = functionRef; 
     } 
   } 
 }

}
/*
     FILE ARCHIVED ON 06:04:45 Jul 26, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:50:59 Jun 23, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 208.876
  exclusion.robots: 0.146
  exclusion.robots.policy: 0.136
  cdx.remote: 0.08
  esindex: 0.012
  LoadShardBlock: 75.872 (3)
  PetaboxLoader3.datanode: 90.5 (4)
  CDXLines.iter: 15.347 (3)
  load_resource: 17.5
*/