function montreToi(){
alert("bonjour à tous");
}

function changecss(myclass,element,value) {
// usage: onclick="changecss('.english','color','red')"
	var CSSRules
	if (document.all) {
		CSSRules = 'rules'
	}
	else if (document.getElementById) {
		CSSRules = 'cssRules'
	}
	for (var i = 0; i < document.styleSheets[0][CSSRules].length; i++) {
		if (document.styleSheets[0][CSSRules][i].selectorText == myclass) {
			document.styleSheets[0][CSSRules][i].style[element] = value
		}
	}	
}

function changecss2(myclass,element,value1, value2) {
// usage: onclick="changecss('.english','color','red')"
	var CSSRules
	if (document.all) {
		CSSRules = 'rules'
	}
	else if (document.getElementById) {
		CSSRules = 'cssRules'
	}
	for (var i = 0; i < document.styleSheets[0][CSSRules].length; i++) {
		if (document.styleSheets[0][CSSRules][i].selectorText == myclass) {
			if (document.styleSheets[0][CSSRules][i].style[element] == value1){
			document.styleSheets[0][CSSRules][i].style[element] = value2;
			}else{
			document.styleSheets[0][CSSRules][i].style[element] = value1;
			}
		}
	}	
}