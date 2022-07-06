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


   monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var keyActive;
var savedBGcolor;
var savedFGcolor;

function getGrossOffsetLeft(elem) {
         var offset = 0;
         while (elem.offsetParent) {
            // correct for IE/Mac discrepancy between offset and style coordinates,
            // but not if the parent is HTML element (NN6)
            offset += (elem.offsetParent.tagName != "HTML") ? parseInt(elem.style.left) - parseInt(elem.offsetLeft) : 0;
            elem = elem.offsetParent;
            offset += elem.offsetLeft;
         }
         return offset;
      }
      function getGrossOffsetTop(elem) {
         var offset = 0;
         while (elem.offsetParent) {
            // correct for IE/Mac discrepancy between offset and style coordinates,
            // but not if the parent is HTML element (NN6)
            offset += (elem.offsetParent.tagName != "HTML") ? parseInt(elem.style.top) - parseInt(elem.offsetTop) : 0;
            elem = elem.offsetParent;
            offset += elem.offsetTop;
         }
         return offset;
      }
      
      // offsets within element's positioning context
      function getNetOffsetLeft(offset, elem) {
         while (elem = getParentLayer(elem)) {
            // correct for IE/Mac discrepancy between offset and style coordinates,
            // but not if the parent is HTML element (NN6)
            offset -= (elem.offsetParent.tagName != "HTML") ? parseInt(elem.style.left) - parseInt(elem.offsetLeft) : 0;
            offset -= elem.offsetLeft;
         }
         return offset;
      }
      function getNetOffsetTop(offset, elem) {
         while (elem = getParentLayer(elem)) {
            // correct for IE/Mac discrepancy between offset and style coordinates,
            // but not if the parent is HTML element (NN6)
            offset -= (elem.offsetParent.tagName != "HTML") ? parseInt(elem.style.top) - parseInt(elem.offsetTop) : 0;
            offset -= elem.offsetTop;
         }
         return offset;
      }
      // find positioning context parent element
      function getParentLayer(elem) {
         if (elem.parentNode) {
            while (elem.parentNode != document.body) {
               elem = elem.parentNode;
               while (elem.nodeType != 1) {
                  elem = elem.parentNode;
               }
               if (elem.style.position == "absolute" || elem.style.position == "relative") {
                  return elem;
               }
               elem = elem.parentNode;
            }
            return null;
         } else if (elem.offsetParent && elem.offsetParent.tagName != "HTML") {
            return elem.offsetParent;
         } else {
            return null;
         }
      }



function paintHover(obj, newcol) {
   savedBGcolor = obj.style.backgroundColor;
   obj.style.backgroundColor = newcol;
}

function paintUnHover(obj){
    obj.style.backgroundColor = savedBGcolor;
}

function AttyParaFlip() {
    if (dei('radAtty').checked) {SHOW('cmbAtty'); HIDE('cmbPara'); }
    else {HIDE('cmbAtty'); SHOW('cmbPara'); }
}



function daysInMonth (y, m) {
var Y = y;  var M = m;
if ( (M == 2 ) && 
                           ( Y % 400 == 0 ||  ((Y % 4 == 0)  &&  (Y % 100 != 0 ))  ) 
    )
    {return 29; }
  else { return monthMax(M); }
}

function CalCellClick (cell) {
   var par = getPAR(cell).id;
   var t = cell.innerText.toString();
   if (t.length > 2){     
      dei(par + '_Day').value = t.substr(3);
      dei(par + '_Month').value = getMonthNum(t.substr(0,3));
      if (t.substr(0,3) == 'Jan') { dei(par + '_YearList').selectedIndex = dei(par + '_YearList').selectedIndex + 1 ;  }
      dei(par + '_Year').value = ddlValue(dei(par + '_YearList'));
   } else {
   dei(par + '_Day').value = t;
   dei(par + '_Month').value = ddlValue (dei(par + '_MonthList'))  ;
   dei(par + '_Year').value = ddlValue(dei(par + '_YearList'));
   }
   HIDE(dei(par + '_popCal'));   
   SHOW(dei(par + '_datePanel'));     
   dei(par + '_theEye').value = 't';
   sendTab(dei(par + '_Year'));
}



function CalNextClick(Id, Months) {
   var id = getPAR(Id).id;
   var m = parseInt(dei(id + '_MonthList').selectedIndex + parseInt(Months));
   
   while (m < 12) { m = m + 12; }
   while (m > 12) { m = m - 12 ; }
   m = m % 12;

   var y = Math.floor(parseInt(Months) / 12);  
   var ny  = dei(id + '_YearList').selectedIndex + y;
   
   if (ny > -1 && ny <  dei(id + '_YearList').length)  {
         dei(id + '_YearList').selectedIndex = ny
         dei(id + '_MonthList').selectedIndex = m;
   }
}


function getMonthNum (m) {
for (var i = 0; i < 12; i ++) {
   if ( monthNames[i].toString().indexOf(m) >= 0) {return (i + 1);}
}
return 0;
}



function sameCalAs(y){
if (y > 1970) {return y; } else{
var i = 1970;
var exit = 0;
while (! ( FirstOfMonth(i, 1) == FirstOfMonth(y, 1) && FirstOfMonth(i, 3) == FirstOfMonth(y, 3)  ) ) {i++;}
return i;
}}




function hideByTitle (tag, value){

var i; 
for (i=0; i<document.getElementsByTagName(tag).length; i++) {
   var k =(document.getElementsByTagName(tag))(i); 
   if (k.getAttribute('title').toString() == value.toString()) { 
           k.style.display='none'; 
    } else {
    k.style.display = 'inline';
    }
}
}


function highlightBox(t) {
    try {
        t.focus();
        t.select();
    }
    catch (ex) {

    }
    }


function monthMax(M) {
  
if (M == 2) {return 28;}
else {if (M == 4 || M == 6 || M == 9 || M == 11) {return 30;}
         else {return 31;}
}
}


function monthName (m) {
var M = m;
while (M > 12) { M = M - 12; }
while (M < 1) { M = M + 12; }
   return monthNames[M - 1];
}

function focusFirstAvailable( )  {
    var els = document.forms[0].elements;
    for(var i = 0; i < els.length; i++)
              if   (TryToFocus(els[i])) return;
}   


function sendTab (t) {

 var els = t.form.elements;
  var thisMax = 2 * els.length;
  var pastIt = false;
  
 event.returnValue=false;
 event.cancel = true;
 
        for(var i = 0; i < els.length * 2; i++){
        if (!pastIt) { if(els[i] == t ){ pastIt = true; } }
              else if   (TryToFocus(els[i % els.length]))  return;         
        } 
}   
  
 function TryToFocus(e){
        if (e.getAttribute('NoAutoFocus') != null) {return false;} else{
              switch(e.tagName) {
              case 'TEXTAREA':
              case 'INPUT':
                 if ( e.style.visibility != 'hidden'  && e.type != 'hidden' && e.style.display != 'none' ){
                   e.focus();
                   e.select();
                   return true;
                 }
                 break;
               case 'SELECT':
               if  (e.style.visibility != 'hidden'  &&  e.style.display != 'none' ){
                  if (e.focus()){
                     e.focus;
                     return true;
                  }
                  else return false;
                }
               default:
                  return false;            
              }
         }
}

function setOldText (t){
  oldText = t.value;
}


function pendingIsValid (t, allowEmpty, mustFill, tabAfter, vrexp)   {
  if (t.value ==  "")  {
     return ( allowEmpty  );
  }
  if (mustFill) {
     if (t.value.length != t.maxLength) { return false;}
  }
  if (vrexp == null) {return true;}

  return (t.value.toString().match(vrexp) != null);
}


function txtValidate(t, b, tabAfter) {

  if (!b) { t.value = oldText; }
  else {
     if (t.value.maxLength == t.value.length && tabAfter) sendTab(t);
  }
}

function curKey( ){
    if (event.keyCode) {return String.fromCharCode(event.keyCode);}
}


function isValidDate (Y, M, D) {
if ( isNaN(Y) || isNaN(D) || isNaN(M) ) {return false;}
else if ( monthMax(M) < D  ||  D < 1 )   { return false; } 
else if (M != 2) { return true;}
else if (D < 29) {return true;}
else if (D != 29) {return false;}
else if (Y % 400 == 0) {return true;}
else if (Y % 100 == 0) {return false;}
else if (Y % 4 == 0) {return true;}
else {return false;}  
}


function datepicker_v(obj, allowBlank) {

var panid = getPAR(obj).id;
var D =    parseInt(dei(panid + '_Day').value);
 var M =  parseInt(dei(panid + '_Month').value);
 var Y =  parseInt( dei(panid + '_Year') .value);
 
 if ( allowBlank &&  isNaN(D)  &&  isNaN(M) &&  isNaN(Y) )
      { dei(panid + '_theEye').value = 't' ; } else 
{


 if  (isValidDate(Y, M, D) )   { dei(panid + '_theEye').value = 't' ; dei(panid + '_curDate').value = M + '/' + D +'/' + Y ;    } 
 else  { dei(panid + '_theEye').value = 'f' ;  dei(panid + '_curDate').value = '';} 
 }

}

function fillYears(ddl, bYear, eYear, defYear){
    if (ddl.options.length < 1){
        ddl.options.length = 0;
        for (var i = bYear; i <= eYear; i++){
           ddl.options[i -  bYear] = new Option(i,i);
        }
        if (defYear >= bYear && defYear <= eYear) ddl.options[defYear - bYear].selected = true;
        else  ddl.options[(eYear - bYear) / 2].selected = true;
    }
}

function poofScrollAdjust (appearingIsTrue, obj) {
     var i = obj.height;
     if (!appearingIsTrue) i = i * (-1);
     document.forms["_ctl0"].scrollTop.value =  document.forms["_ctl0"].scrollTop.value;
}

function fillCalendar(y, m, Nam){

var nam = getPAR(Nam).id;
   dei(nam).enabled = false;
  var Y = parseInt(y);
  var M = parseInt(m);
    var realNow =  (new Date()).getYear();
    while( (realNow) < 2000 ) { realNow = realNow + 100;}
    if (Y == NaN ||  Y == 0 || Y == null) Y = realNow;
   if (Y < 99  && Y > 0) Y = Y + 1930;
   if (M == NaN || M < 1 || M > 12) M = (new Date()).getMonth + 1;
   var  fdm = FirstOfMonth(Y, M);
   var  dprevm = daysInMonth   (  Y - Math.floor(1 / M ) , ((M + 11) % 12) + 1 );
   var dcurrm = daysInMonth (Y, M);
  
  var pma = monthName(M - 1).toString().substring(0, 3) ;
  var nma = monthName(M + 1).toString().substring(0, 3) ;

 var i;

fdm = ((fdm + 21) % 7) + 1;
var curOne;

 for (i = fdm - 1 ;  i >= 1 ; i--) { 
   curOne = dei(nam + '_spot' + i );
    curOne.innerText =  pma + '\n' + new String (dprevm + i - fdm + 1) ;
    curOne.style.fontSize = 'xx-small';
     curOne.style.color = 'white';
     curOne.style.backgroundColor = 'gray';
    burnColors(curOne);
}
 for (i = fdm; i < dcurrm + fdm;  i++){   
        curOne = dei(nam + '_spot' + i );
       curOne.innerText =    new String(i - fdm + 1) ;
       curOne.style.color = 'blue';
           curOne.style.fontSize = 'medium';
     curOne.style.backgroundColor = 'white';
         burnColors(curOne);
 }
     var count=1;
for (i = dprevm + fdm; i <= 42; i++ ) {
        curOne = dei(nam + '_spot' + i );
      curOne.innerText =  nma  + '\n' +  count ;
      curOne.style.color = 'white';
          curOne.style.fontSize = 'xx-small';
     curOne.style.backgroundColor = 'gray';
       burnColors(curOne);
   count ++ ;
}

setDDL(nam + '_YearList', Y);
setDDL(nam + '_MonthList', M);
   dei(nam).enabled = true;
}
   
   
function FirstOfMonth (Y, M) {

   var m;
   if (M == 1) { m = 11 ;  y = Y - 1; }
   if (M == 2) { m = 12 ;  y = Y - 1; }
   if (M > 2)   { m = parseInt(M) - 2 ; y = Y; }
   var k = 1; 
   var C = parseInt((y).toString().substring(0,2), 10);   
   var D = parseInt( (y) % 100, 10);  
   var G =  k + Math.floor(((13 * m) -1)/5.0) + D + Math.floor(D/4.0) + Math.floor(C/4.0) - (2 * C);

  while (G < 7) { G = G + 7 ;}    
  return (G % 7);
}

function SHOWCAL (q){
  var Q = getPAR(q).id;
  if (q){
  if (q.style == null) {q.setAttribute('style',''); }
    SHOW(q);
    dei(Q + '_justCal').style.display = 'block';
  }
}

function SHOW (Q) { 
var q = dei(Q);

if (q){
if (q.style == null) {q.setAttribute('style',''); }
 // q.style.visibility = 'visible';
  q.style.display = 'inline';
  }
 
}

function HIDE (Q){ 
var q = dei(Q);
if (q){
if (q.style == null) {q.setAttribute('style',' '); }
// q.style.visibility = 'hidden'; 
 q.style.display = 'none';
  }
}

 function setDDL (q, val) {
 var done = false;
 var ddl = dei(q);
 for (var i = 0; i < ddl.length; i++)  {
   if (ddl.options[i].value == val) {ddl.selectedIndex = i; return;}
  }
 //  if (!done) ddl.selectedIndex = 0;
 }
 
function getPAR(Q) {
   var q = dei(Q);
   var o = (q.id).toString().split('_')[0];
   return dei(o);
}

function getSIB(Q, sibid) {
var q = dei(Q);
var o = (q.id).toString().split('_')[0];
 return dei(o + '_' + sibid);
}

function isString(s) {    
   var m = new String(s);
   if (m.toString() == '[object]') return false; 
   else return true;
}  
      
function dei (s) { 

if  (isString(s) ) {
return (document.getElementById(s)); 
}
else return s;
}


 function ddlValue(dd) {
   var ddl = dei(dd);
   return (ddl.options[ddl.selectedIndex].value);
}

function ddlText(dd) {
   var ddl = dei(dd);
   return (ddl.options[ddl.selectedIndex].value);
}

function setPickedColor(obj, newRGB) {
   if (newRGB.length != 7) newRGB = '#' + newRGB;
   savedBGcolor = newRGB;
   dei(obj + '_pickedcolor').value =  newRGB;
   dei(obj + '_showcolor').style.backgroundColor = newRGB;
   HIDE(dei(obj + '_colorlist'));

}




//--------------------------------------------
function makeHoverableChild (curOne, forColor, bakColor) {
  curOne.setAttribute('hoverFC', forColor);
  curOne.setAttribute('hoverBC', bakColor);
  addEvent(curOne, 'mouseover', mePPHover_event);
  addEvent(curOne, 'mouseout', mePPUnHover_event); 
  curOne.style.cursor = 'pointer';
}


function mePPHover_event(e) {
       var obj = getEventSrc(e); 
        obj.parentElement.parentElement.style.color = obj.getAttribute("hoverFC");
       obj.parentElement.parentElement.style.backgroundColor = obj.getAttribute("hoverBC");
       obj.parentElement.parentElement.style.fontSizeAdjust = 'larger';
       obj.parentElement.parentElement.style.fontWeight = 'bold';
       
}
function mePPUnHover_event(e) {
        var obj = getEventSrc(e); 
        obj.parentElement.parentElement.style.color = obj.parentElement.parentElement.getAttribute("savedFC");
       obj.parentElement.parentElement.style.backgroundColor = obj.parentElement.parentElement.getAttribute("savedBC");
              obj.parentElement.parentElement.style.fontSizeAdjust = 'smaller';
       obj.parentElement.parentElement.style.fontWeight = 'normal';
}       

function makeHoverable (curOne, forColor, bakColor) {
  curOne.setAttribute('hoverBC', bakColor);
  curOne.setAttribute('hoverFC', forColor);
  addEvent(curOne, 'mouseover', meHover_event);
  addEvent(curOne, 'mouseout', meUnHover_event); 
  curOne.style.cursor = 'hand';
}

function makeAMCHoverable (curOne, forColor, bakColor) {
  curOne.setAttribute('hoverBC', bakColor);
  curOne.setAttribute('hoverFC', forColor);
  addEvent(curOne, 'mouseover', AMCHover_event);
  addEvent(curOne, 'mouseout', AMCUnHover_event); 
  curOne.style.cursor = 'hand';
  for (var i = 0; i < curOne.all.length; i++) {
    curOne.all[i].setAttribute('hoverBC', bakColor);
     curOne.all[i].setAttribute('hoverFC', forColor);
  }
}

function setFocusColors(curOne, forColor, bakColor) {
  curOne.setAttribute('focusBC', bakColor);
  curOne.setAttribute('focusFC', forColor);
  addEvent(curOne, 'focus', meFocus_event);
  addEvent(curOne, 'blur', meBlur_event); 

 }

function EventLatch ( ) {
    EventLatchSingle(document);
}

function EventLatchSingle (Parm){
//alert('Latching');
  var curOne;
  var allEm = dei(Parm).getElementsByTagName('*');
  for (var i = 0; i < allEm.length; i++) {
     curOne = allEm[i];
     burnColors(curOne);
       switch (curOne.className.toLowerCase()) {
          case 'navbuttonstyle':
               makeHoverable(curOne, 'yellow', 'black');
               break;
          case 'calcel':
               makeHoverable(curOne, 'white','purple');
               addEvent(curOne, "click", CalCellClick_event);
               break;
         case 'calbtm':
              makeHoverable(curOne, 'white','purple');
               break;
          case 'searchgobtn':
              makeHoverableChild(curOne, 'white','purple');
    //           addEvent(curOne, "click", SearchGoBtnClick_event);
               break;
          case 'hoverbox':
              makeAMCHoverable (curOne, 'yellow','black') ;
              break;
          default:
               if (curOne.type == 'button' || curOne.type == 'submit' )
                   makeHoverable(curOne, 'yellow', 'black');
               if (curOne.type == 'checkbox' || curOne.type == 'text' || curOne.type == 'radio' || curOne.type == 'textarea' || 
                   curOne.tagName == 'SELECT' || curOne.tagName == 'OPTION') {
                     setFocusColors(curOne, 'black',  'D1FFB3');
               }
               break;
               
       }
  }
}
function SearchGoBtnClick_event(e) {
    dei('idPick').value = getEventSrc(e).parentElement.previousSibling.outerText;
    dei('bkPick').value = getEventSrc(e).parentElement.nextSibling.nextSibling.outerText;

}
function burnColors(curOne){
     curOne.setAttribute('savedBC',curOne.style.backgroundColor);
     curOne.setAttribute('savedFC',curOne.style.color);
}

function addEvent(objObject, strEventName, fnHandler) {
    if (objObject.addEventListener)
        objObject.addEventListener(strEventName, fnHandler, false);
   else
        objObject.attachEvent("on" + strEventName, fnHandler);
}

  function getEventSrc(e) {
      if (!e) e = window.event;

      if (e.originalTarget)
        return e.originalTarget;
      else if (e.srcElement)
        return e.srcElement;
    }

 

function AllMyChildrenHover(obj) {
     var child = dei(obj).all;        
     for (var i = 0; i < child.length; i++) {
             child[i].style.backgroundColor = obj.getAttribute('hoverBC');
             child[i].style.color = obj.getAttribute('hoverFC');               
       }
}

function AMCHover_event(e) {
       AllMyChildrenHover(getEventSrc(e)); 
}   


function AllMyChildrenUnHover(obj) {
     var child = dei(obj).all;
     for (var i = 0; i < child.length; i++)
        meUnHover(child[i]) ;        
}
  function AMCUnHover_event(e) {
       AllMyChildrenUnHover(getEventSrc(e)); 
}     

function meHover (obj) {
   obj.style.color = obj.getAttribute("hoverFC");
   obj.style.backgroundColor = obj.getAttribute("hoverBC");
}
function meHover_event(e) {
       meHover(getEventSrc(e)); 
}

function meUnHover (obj) { 
       obj.style.color = obj.getAttribute("savedFC");
       obj.style.backgroundColor = obj.getAttribute("savedBC");
}

function meUnHover_event(e) {
       meUnHover(getEventSrc(e)); 
}              

function meFocus (obj) {
   obj.style.color = obj.getAttribute("FocusFC");
   obj.style.backgroundColor = obj.getAttribute("FocusBC");
}
function meFocus_event(e) {
       meFocus(getEventSrc(e)); 
}

function meBlur (obj) { 
       obj.style.color = obj.getAttribute("savedFC");
       obj.style.backgroundColor = obj.getAttribute("savedBC");
}

function meBlur_event(e) {
       meBlur(getEventSrc(e)); 
}              

function CalCellClick_event(e) {
    CalCellClick(getEventSrc(e));
}

 function Scroller_GetCoords()
  {
    var scrollX, scrollY;
    if (document.all)
    {
      if (!document.documentElement.scrollLeft)
        scrollX = document.body.scrollLeft;
      else
        scrollX = document.documentElement.scrollLeft;

      if (!document.documentElement.scrollTop)
        scrollY = document.body.scrollTop;
      else
        scrollY = document.documentElement.scrollTop;
    }
    else
    {
      scrollX = window.pageXOffset;
      scrollY = window.pageYOffset;
    }
    document.forms["_ctl0"].scrollLeft.value = scrollX;
    document.forms["_ctl0"].scrollTop.value = scrollY;
  }


  function Scroller_Scroll()
  {
    var x = document.forms["_ctl0"].scrollLeft.value;
    var y = document.forms["_ctl0"].scrollTop.value;
    window.scrollTo(x, y);
  }

function poofScrollAdjust (appearingIsTrue, obj) {
     var i = 4 * obj.offsetHeight / 5;
    // alert(i);
     if (!appearingIsTrue) i = i * (-1);
     window.scrollBy(0,i);
     //(window.pageXOffset, window.pageYOffset + i);
}
 
  //window.onclick = sstchur_SmartScroller_GetCoords;
 // window.onkeypress = sstchur_SmartScroller_GetCoords;
//window.onscroll = Scroller_GetCoords;


//****************************
//             shell sorter
//********************************
/*
function exchange(i, j)
  {
    if(i == j+1) {
      parent.insertBefore(items[i], items[j]);
    } else if(j == i+1) {
      parent.insertBefore(items[j], items[i]);
    } else {
      var tmpNode = parent.replaceChild(items[i], items[j]);
      if(typeof(items[i]) == "undefined") {
        parent.appendChild(tmpNode);
      } else {
        parent.insertBefore(tmpNode, items[i]);
      }
    }
  }
  
    // global variables
  var col = 0;
  var parent = null;
  var items = new Array();
  var N = 0;

  function isort(m, k, desc)
  {
    for(var j=m+k; j < N; j+= k) {
      for(var i=j; i >= k && compare(get(i), get(i-k), desc); i-= k) {
        exchange(i, i-k);
      }
    }
  }

  function sortTable(tableid, n, desc)
  {
    parent = dei(tableid);
    
    col = n;

    if(parent.nodeName != "TBODY")
      parent = parent.getElementsByTagName("TBODY")[0];
    if(parent.nodeName != "TBODY")
      return false;

    items = parent.getElementsByTagName("TR");
    N = items.length;

    // shell sort
    if((k = Math.floor(N/5)) > 7) {
      for(var m=0; m < k; m++) isort(m, k, desc);
    }

    if((k = Math.floor(N/7)) > 7) {
      for(var m=0; m < k; m++) isort(m, k, desc);
    }

    for(k=7; k > 0; k -= 2) {
      for(var m=0; m < k; m++) isort(m, k, desc);
    }
  }
*/


  // global variables
  var parent = null;		// 'parent' node
  var items = new Array();	//  array of 'child' nodes
  var col = 0;			// column for sorting

  function get(i)
  {
    var node = items[i].getElementsByTagName("TD")[col];

    if(node.childNodes.length == 0) return "";

    // assumes firstChild of node is a textNode
    var retval = node.firstChild.nodeValue;
    if(parseInt(retval) == retval) return parseInt(retval);
    return retval;
  }

  function compare(val1, val2, desc)
  {
    return (desc) ? val1 > val2 : val1 < val2;
  }

  function exchange(i, j)
  {
    // exchange adjacent items
    parent.insertBefore(items[i], items[j]);
  }

  function sortTable(tableid, n, desc)
  {
    // parent node identified by id="tableid"
    parent = dei(tableid);
    col = n;

    // parent node for sorting rows must be TBODY and not TABLE
    if(parent.nodeName != "TBODY")
      parent = parent.getElementsByTagName("TBODY")[0];
           
      
    if(parent.nodeName != "TBODY")
      return false;

    // parent is now a TBODY node
      items = parent.getElementsByTagName("TR");
    var N = items.length;

    // bubble sort - not very efficient but ok for short lists
    for(var j=N-1; j > 0; j--) {
      for(var i=0; i < j; i++) {
        if(compare(get(i+1), get(i), desc)) 
            exchange(i+1, i);
      }
    }
    
     items = parent.getElementsByTagName("TR");
     for (var i=0; i<items.length; i++) {
         if (i % 2 == 1) items[i].className = 'A'; else items[i].className='';
     }
  
    
    return true;
  }

function sortSR(colnum, eS) {   
 
     var tableName = levelUpTo(eS, 'table').id;
     eS.setAttribute('asc' ,  !(eS.getAttribute('asc')));   
     sortTable(tableName, colnum, eS.getAttribute('asc'));
}

}
/*
     FILE ARCHIVED ON 13:48:38 Oct 28, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:04:47 Jun 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 846.404
  exclusion.robots: 0.099
  exclusion.robots.policy: 0.091
  cdx.remote: 0.069
  esindex: 0.008
  LoadShardBlock: 817.324 (3)
  PetaboxLoader3.datanode: 197.123 (6)
  CDXLines.iter: 14.87 (3)
  load_resource: 882.664 (2)
  PetaboxLoader3.resolve: 297.416 (2)
  loaddict: 18.841
*/