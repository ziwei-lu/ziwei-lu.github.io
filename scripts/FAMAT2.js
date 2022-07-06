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

$(document).ready(function () {
   var say = $('form').attr('sayThis');
   if (say) { alert(say); $('form').attr('sayThis', ''); }
})
 
 
 function SizeMainDiv() {
   var div = document.getElementById('MainDiv');
   
   div.style.width = (parseInt(windowWidth()) - 200) + 'px';
   
  div = document.getElementById('BannerDiv');
    
  div.style.width = (parseInt(windowWidth()) - 40 ) + 'px';


}

function windowWidth() {

  var myWidth = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;

   } 
   else 
     if ( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
  }
  return myWidth;
}

  
  function toggleTreasDel(obj){
   treasureHasChanged = true;
   var row = levelUpTo(obj, 'tr');
   var allBoxes = row.getElementsByTagName('input');
   var allLabels = row.getElementsByTagName('label');
   if (obj == allBoxes[0]) {
     if (allBoxes[0].checked) {
       row.setAttribute('oldClass', row.className);
       row.className = 'D';
       allBoxes[1].style.display = 'none';
       allBoxes[2].style.display = 'none';
       allLabels[1].style.display = 'none';
       allLabels[2].style.display = 'none';
     }
     else  {
       row.className = row.getAttribute('oldClass');
       allBoxes[1].style.display = '';
       allBoxes[2].style.display = '';
       allLabels[1].style.display = '';
       allLabels[2].style.display = '';
     }  
   }
     
   if (allBoxes[1].checked || allBoxes[2].checked) {
     allBoxes[0].style.display = 'none';
     allLabels[0].style.display = 'none';
   }
   else {
     allBoxes[0].style.display = '';
     allLabels[0].style.display = '';        
   }
 }

 
 function MakeMenuPretty() {
 
    var menu = document.getElementById('tblMainMenu').getElementsByTagName('tr');
    for (var i=0; i<menu.length; i++) {
       var item = menu[i];
       if (item.getElementsByTagName('a').length > 0) {
         var loc = item.getElementsByTagName('a')[0].href;
         var tex = item.getElementsByTagName('a')[0].innerHTML;
         item.getElementsByTagName('td')[0].innerHTML = tex;
         item.setAttribute('loc', loc);
         attachEventListener(item, 'click', navIt);
       }
    }
 }
 
 function navIt(e){
   var obj = getEventTarget(e, 'tr');
   document.location.href = obj.getAttribute('loc');
 }
 
 function KeepMenuUgly(){
   var menu = document.getElementById('tblMainMenu').getElementsByTagName('td');
   for (var i=0; i<menu.length; i++) {
     menu[i].style.cursor = 'default';
     menu[i].getElementsByTagName('a')[0].style.cursor = 'pointer';
   }
 }

}
/*
     FILE ARCHIVED ON 20:48:43 Oct 26, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:04:47 Jun 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1205.911
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.076
  cdx.remote: 0.061
  esindex: 0.008
  LoadShardBlock: 110.743 (3)
  PetaboxLoader3.datanode: 156.33 (6)
  CDXLines.iter: 16.201 (3)
  load_resource: 187.324 (2)
  PetaboxLoader3.resolve: 99.808 (2)
  loaddict: 39.465
*/