/*
*auth: Gustavo Rocha de Almeida Guimaraes
*bcit_id: A01041004
*creation_date: 2017-10-20
*update_date: 2017-10-20
*notes: Clientside scripting for COMP1850 Final Project
*/

/*
* Contants for Photo Gallery
*/

var photoGalleries = [
	{
		name:"vancouverCity",
		photos:[
			{src:"../../images/the_city/vancouver01.jpg",legend:"Vancouver Downtown and Mountains"},
			{src:"../../images/the_city/vancouver02.jpg",legend:"Stanley Park Seawall"},
			{src:"../../images/the_city/vancouver03.jpg",legend:"Granville Island"},
			{src:"../../images/the_city/vancouver04.jpg",legend:"Queen Elizabeth Park View of Mountains"},
			{src:"../../images/the_city/vancouver05.jpg",legend:"Vancouver Downtown Street"},
		]
	},
	{
		name:"vancouverMaps",
		photos:[
			{src:"../../images/the_city/vancouvermap_01.jpg",legend:"Downtown Map"},
			{src:"../../images/the_city/vancouvermap_02.jpg",legend:"Vancouver Neighborhoods"},
		]
	},
	{
		name:"vancouverEthnicity",
		photos:[
			{src:"../../images/the_city/ethnicity01.jpg",legend:"Asian Festival in Vancouver Chinatown"},
			{src:"../../images/the_city/ethnicity02.jpg",legend:"Multicultural Immigrants"},
		]
	},
	{
		name:"vancouverWeather",
		photos:[
			{src:"../../images/the_city/vancouver_rain-01.jpg",legend:"Downtown under rain - Close to Waterfront Station"},
			{src:"../../images/the_city/vancouver_rain-02.jpg",legend:"Raincouver"},
			{src:"../../images/the_city/vancouver_rain-03.jpg",legend:"Another rainy day"},
			{src:"../../images/the_city/vancouver_winter01.jpg",legend:"Vancouver's Winter"},
			{src:"../../images/the_city/vancouver_winter02.jpg",legend:"Yes, we have snow here too!"},
		]
	},
]

//Carousel IDs
"carouselBack"
var CAROUSEL_ID = "vfsCarousel";
var CAROUSEL_IMG_ID = "vfsCarouselImage";
var CAROUSEL_LEGEND_ID = "vfsCarouselLegend";
var CAROUSEL_BACK_ID = "vfsCarouselBack";
var CAROUSEL_NEXT_ID = "vfsCarouselNext";
var CAROUSEL_CLOSE_ID = "vfsCarouselClose";

//Carousel Classes
var CAROUSEL_CONTENT_CLASS = "carousel-content";
var CAROUSEL_IMG_CLASS = "carousel-img";
var CAROUSEL_BACK_CLASS = "carousel-back";
var CAROUSEL_NEXT_CLASS = "carousel-next";
var CAROUSEL_CLOSE_CLASS = "carousel-close";

var HIDDEN_CLASS = "hidden";
var STOP_SCROLLING= "stop-scrolling";

function createCarouselGallery(galleryName, carouselId){
	
	for(var i = 0; i < photoGalleries.length; i++){
		if(photoGalleries[i].name == galleryName){
			document.vfsPhotoGalley = photoGalleries[i].photos;
			break;
		}
	}

	if(document.vfsPhotoGalley){
		
		var body = document.getElementsByTagName("body")[0];
		body.classList.add(STOP_SCROLLING);

		var actualImg = document.vfsPhotoGalley[0];
			
		//Div that holds the carousel
		var carouselElement = document.getElementById(carouselId);
		carouselElement.style.display = "block";
		carouselElement.classList.remove(HIDDEN_CLASS);
		
		//Carousel div tag for content
		var contentElement = document.createElement("div");
		contentElement.classList.add(CAROUSEL_CONTENT_CLASS);
		// contentElement.style.backgroundImage = "url('"+actualImg.src+"')";

		//Img tag
		var imgElement = document.createElement("img");
		imgElement.id = CAROUSEL_IMG_ID;
		imgElement.classList.add(CAROUSEL_IMG_CLASS);
		imgElement.setAttribute("src", actualImg.src);

		//Legend tag
		var legendElement = document.createElement("legend");
		legendElement.id = CAROUSEL_LEGEND_ID;
		legendElement.innerHTML = actualImg.legend;

		//Adding the "Back" arrow
		var backElement = document.createElement("span")
		backElement.id = CAROUSEL_BACK_ID;
		backElement.classList.add(CAROUSEL_BACK_CLASS);
		backElement.classList.add(HIDDEN_CLASS);
		backElement.onclick = undefined;

		//Adding the "Next" arrow
		var nextElement = document.createElement("span");
		nextElement.id = CAROUSEL_NEXT_ID;
		nextElement.classList.add(CAROUSEL_NEXT_CLASS);
		nextElement.onclick = function(){
			getPhotoFromCarouselGallery(1);
		};

		//Adding the "Close" button
		var closeElement = document.createElement("span");
		closeElement.id = CAROUSEL_CLOSE_ID;
		closeElement.classList.add(CAROUSEL_CLOSE_CLASS);
		closeElement.onclick = function(){
			carouselElement.innerHTML = '';
			carouselElement.style.display = "none";
			var body = document.getElementsByTagName("body")[0];
			body.classList.remove(STOP_SCROLLING);
		};


		contentElement.appendChild(imgElement);
		contentElement.appendChild(legendElement);
		contentElement.appendChild(backElement);
		contentElement.appendChild(nextElement);
		contentElement.appendChild(closeElement);
		carouselElement.appendChild(contentElement);

	}
}


function getPhotoFromCarouselGallery(index){
	//Constructing the Photo carousel
	if(document.vfsPhotoGalley){

		console.log(JSON.stringify(document.vfsPhotoGalley[index]));
		var actualImg = document.vfsPhotoGalley[index];
		console.log(JSON.stringify(actualImg));
		//Img tag
		console.log("Getting "+CAROUSEL_IMG_ID)
		var imgElement = document.getElementById(CAROUSEL_IMG_ID);
		console.log(imgElement);
		imgElement.setAttribute("src", actualImg.src);

		//Legend tag
		var legendElement = document.getElementById(CAROUSEL_LEGEND_ID);
		legendElement.innerHTML = actualImg.legend;

		//If is not the first element then update "Back" arrow and make it visible
		var backElement = document.getElementById(CAROUSEL_BACK_ID);
		if(index != 0){
			//Adding the "Back" arrow
			backElement.classList.remove(HIDDEN_CLASS);
			backElement.onclick = function(){
				getPhotoFromCarouselGallery(index-1);
			};

		}else{
			backElement.classList.add(HIDDEN_CLASS);
			backElement.onclick = undefined;
		}

		//If is not the first element then update "Back" arrow and make it visible
		var nextElement = document.getElementById(CAROUSEL_NEXT_ID);
		if(index < (document.vfsPhotoGalley.length-1)){
			//Adding the "Back" arrow
			nextElement.classList.remove(HIDDEN_CLASS);
			nextElement.onclick = function(){
				getPhotoFromCarouselGallery(index+1);
			};

		}else{
			nextElement.classList.add(HIDDEN_CLASS);
			nextElement.onclick = undefined;
		}
	}
}