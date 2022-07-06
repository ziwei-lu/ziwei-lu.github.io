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


 //**************************************************************************
 //******************    STANDARD FUNCTIONS  ********************************
 //**************************************************************************
 
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

function getEventTarget(evt, tagName) { 
  if (typeof evt == "undefined") 
    evt = window.event;  
  var targetElement = null; 
  if (typeof evt.target != "undefined") 
     targetElement = evt.target; 
  else 
     targetElement = evt.srcElement; 
  while (targetElement.nodeType == 3 && targetElement.parentNode != null) 
     targetElement = targetElement.parentNode; 
  if (tagName != null)
    while(targetElement.nodeName.toLowerCase() != tagName.toLowerCase()) 
      targetElement = targetElement.parentNode;  
  return targetElement;
}


function FindInnerText(obj)
{
  if ('string' == typeof obj.textContent) return obj.textContent;
  if ('string' == typeof obj.innerText) return obj.innerText;
  return obj.innerHTML.replace(/<[^>]*>/g,'');
}

function ChangeInnerText(obj, newText)
{
  if ('string' == typeof obj.textContent){
    obj.firstChild.nodeValue = newText;
  //  obj.appendChild(document.createTextNode(newText));
  }
  if ('string' == typeof obj.innerText) {
    obj.innerText = newText;
  }
}

function getActualTop(oElement) {
    if (oElement == null) return 0;
    var iTop = 0;
    var oNode = oElement;

    while (oNode != document.body) {
        iTop += oNode.offsetTop;
        oNode = oNode.offsetParent;
    }
    return iTop;
}

 function levelUpTo(obj, tagName) {
    obj = obj.parentNode;
    while(obj.nodeName.toLowerCase() != tagName.toLowerCase()) 
      obj = obj.parentNode;
    return obj;    
 }
 
function FormatCurrency(num, suppressDollarSign) {
num = num.toString().replace(/\$|\,/g,'');
if(isNaN(num))
num = "0";
sign = (num == (num = Math.abs(num)));
num = Math.floor(num*100+0.50000000001);
cents = num%100;
num = Math.floor(num/100).toString();
if(cents<10)
cents = "0" + cents;
for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
num = num.substring(0,num.length-(4*i+3))+','+
num.substring(num.length-(4*i+3));
if (suppressDollarSign == true)
    return (((sign)?' ':'(')  + num + '.' + cents + ((sign)?'':')'));
else
    return (((sign)?' ':'(') + '$' + num + '.' + cents + ((sign)?'':')'));
}

function ddlSetValue(ddl, value) {
  for (var i=0; i < ddl.options.length; i++){
    if (ddl.options[i].value == value){
      ddl.options[i].selected = true;
      return;
    }
  }
}

function ddlGetSelectedValue(ddl) {
  for (var i=0; i < ddl.options.length; i++)
    if (ddl.options[i].selected)
      return (ddl.options[i].value);
  return null;
}

function ddlGetSelectedText(ddl) {
  for (var i=0; i < ddl.options.length; i++)
    if (ddl.options[i].selected)
      return (ddl.options[i].text);
  return null;
}

function parseCurrency(moneyStr) {
  moneyStr = Trim(moneyStr);
  var amt;
  var neg = false;

  if (moneyStr.substring(0,1) == '(') {
    moneyStr = moneyStr.substring(1);
    moneyStr = moneyStr.substring(0, moneyStr.length - 1);
    neg = true;
  }
  if (moneyStr.substring(0,1) == '$') {
    moneyStr = moneyStr.substring(1);
  }
  amt = parseFloat(moneyStr);
  if (neg) amt = amt * -1.00000;
  return amt;
}


function Trim(s)
{
	return s.replace(/^\s+|\s+$/g, '');
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};

}
/*
     FILE ARCHIVED ON 20:48:57 Oct 26, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:04:45 Jun 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 61.363
  exclusion.robots: 0.126
  exclusion.robots.policy: 0.116
  RedisCDXSource: 0.754
  esindex: 0.023
  LoadShardBlock: 35.484 (3)
  PetaboxLoader3.datanode: 54.366 (6)
  CDXLines.iter: 21.168 (3)
  load_resource: 162.492 (2)
  PetaboxLoader3.resolve: 44.092 (2)
  loaddict: 56.845
*/