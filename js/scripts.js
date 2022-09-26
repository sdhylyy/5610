/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/


function stopScroll(){
  var el = document.getElementsByTagName('body')[0];
  el.style.overflow = "hidden";
}

stopScroll();

function openScroll(){
  var el = document.getElementsByTagName('body')[0];
  el.style.overflow = "auto";
}


$("#enter").on("click", function(){ 
	$("#mask").fadeOut(3000,function(){
		openScroll();
	});
});