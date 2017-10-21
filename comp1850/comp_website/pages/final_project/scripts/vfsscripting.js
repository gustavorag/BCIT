/*
*auth: Gustavo Rocha de Almeida Guimaraes
*bcit_id: A01041004
*creation_date: 2017-10-09
*update_date: 2017-10-09
*notes: Clientside scripting for COMP1850 Final Project
*/

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function switchShowHide(elementId){
	console.log("Verifing for "+elementId);
	var element = document.getElementById(elementId);
	if(hasClass(element, "hidden")){
		element.classList.remove("hidden");
	}else{
		element.classList.add("hidden");
	}
}

function showSubMenu(subMenuNavId, activeMenuId){
	//Showing only the selected sub menu navigation inside the sub menu and hidding others
	var subMenuElements = document.getElementsByClassName("sub-menu");
	for (var i = 0, len = subMenuElements.length; i < len; i++) {
	  var actualElement = subMenuElements[i];
	  if(actualElement.id == subMenuNavId){
		actualElement.classList.remove("hidden");

	  }else{
	  	actualElement.classList.add("hidden");
	  }
	}
	//If the active menu is informed, apply class to make it has style as same as when hover
	if(activeMenuId){
		var activeMenu = document.getElementById(activeMenuId);
		activeMenu.classList.add("menu_hover");
	}
	
}

function hideSubMenu(elementId, activeMenuId){
	//Hide all submenus
	var subMenuElements = document.getElementsByClassName("sub-menu");
	for (var i = 0, len = subMenuElements.length; i < len; i++) {
		var actualElement = subMenuElements[i];
		actualElement.classList.add("hidden");

	}
	//If the active menu is informed, clear hover status
	if(activeMenuId){
		var activeMenu = document.getElementById(activeMenuId);
		activeMenu.classList.remove("menu_hover");
	}
}

function submitSuggestion(){
	console.log("Submiting")
	window.location.replace("../pages/contact/contact_ok.html")
}