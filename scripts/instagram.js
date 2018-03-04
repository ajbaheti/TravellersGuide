var result1= "https://api.instagram.com/v1/users/2017228644/media/recent/?access_token=2017228644.c7b6955.1a9bbc322ba54eed98d68314208adc08";
var result;
var accessToken = '2017228644.c7b6955.1a9bbc322ba54eed98d68314208adc08';

function callService(){$.ajax({
	  type: "GET",
	  dataType: "jsonp",
	  url: "https://api.instagram.com/v1/users/2017228644/media/recent/?access_token=2017228644.c7b6955.1a9bbc322ba54eed98d68314208adc08",
	  success: function(data) {
		  makeGloabal(data);  
	  }
	});
}
	
function makeGloabal(data){
	result = data;
	var image = "";
	for(var i=1;i<=9;i++){
		image = document.getElementById("img"+i);
		image.style.backgroundImage="url("+result.data[i-1].images.thumbnail.url+")";// low_resolution
	}
	window.setInterval(autoSlide(),1000);
}

function autoSlide(){
	var image = document.getElementById("imagediv");
	var totalImages = result.data.length;
	var count = 0;
	
	if(totalImages > 0){
		while(count < totalImages){
			image.style.backgroundImage="url("+result.data[count].images.standard_resolution.url+")";
			count++;
		}
	}else{
		image.style.backgroundImage="url(./images/nomad.jpg)";
	}
	/*currentCount = currentCount + 1;
	if(currentCount >= totalImages){
		currentCount = 1;
	}
	if(currentCount <= 1){
		currentCount = totalImages;
	}*/
}