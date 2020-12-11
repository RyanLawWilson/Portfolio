console.log("Reading JS");
$(function() {
  	// Smooth load in
	console.log("Doc Loaded");
	var $body = $("body");
	$body.addClass("smooth-load-transition");



	var $buttonContainers = $(".btn-main--container2");
	var $buttons = $(".btn-main--container2 > .btn.btn-main2");
	var $platform = $(".btn-main--container2 > .platform");
	var $buttonHeight = $(".btn-main--container2 > .button-height");

	$buttonContainers.height($buttons.outerHeight());
	$buttonContainers.width($buttons.outerWidth());

	$buttonHeight.height($buttons.outerHeight());
	$buttonHeight.width($buttons.outerWidth());

	$platform.height($buttons.outerHeight() + $platform.height());
	$platform.width($buttons.outerWidth() + $platform.width());

	$buttons.on("mousedown", function() {
		console.log("Button Clicked!");
	});
});


// Smooth scrolling
/* $(document).ready(function(){   
    $("a").on('click', function(event) {
        
    if (this.Link !== "") {
        event.preventDefault();

        var Link = this.Link;

        $('html, body').animate({
            scrollTop: $(Link).offset().top
        }, 2000, function(){
            window.location.Link = Link;
        });
    }
    });
  });
  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
  } */
  