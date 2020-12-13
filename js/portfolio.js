console.log("Reading JS");
$(function() {
  	// Smooth load in ***NOT FULLY IMPLEMENTED***
	console.log("Document Loaded");
	var $body = $("body");
	$body.addClass("smooth-load-transition");
	
	findAndCreateButtons();

	setButtonWidthAndHeight();

});

// Allows shorthand HTML to be written for buttons.  Contains code that
// populates HTML withe the markup necessary to display button correctly.
function findAndCreateButtons() {
	let $buttonContainers = $(".btn-main--container[data-href]");
	let variant = "";
	let url = "";

	// Foreach button container, assign the button variant and write the inner html.
	$buttonContainers.each(function() {
		if ($(this).attr("data-variant-success") != undefined) variant = " btn-main--success ";
		else if ($(this).attr("data-variant-danger") != undefined) variant = " btn-main--danger ";

		// If the URL is empty, don't bother putting in href=""
		url = $(this).attr("data-href") != "" ? "href='" + $(this).attr("data-href") + "'" : ""; 

		$(this).html(
			  "<a class='btn btn-main" + variant + url
			+ "' target='_blank'>" + $(this).attr("data-text") + "</a>"
			+ "<div class='button-height'></div>"
			+ "<div class='platform'></div>"
			+ "<div class='platform-wall'></div>");

		let $button = $(this).find(".btn.btn-main");

		console.log("Text: " + $(this).attr("data-text"));
		console.log("Height: " + $button.height());

	});
}

// Set the width and height of the components of the button.
function setButtonWidthAndHeight() {
	let $buttonContainers = $(".btn-main--container");
	// var $buttons = $(".btn-main--container > .btn.btn-main");

	$buttonContainers.each(function() {
		let $button = $(this).find(".btn.btn-main");
		let $buttonHeight = $(this).find(".button-height");
		let $platform = $(this).find(".platform");
		let $platformWall = $(this).find(".platform-wall");

		$(this).height($button.outerHeight());
		$(this).width($button.outerWidth());

		// Set buttonHeight to be 2/3 the size of the button
		$buttonHeight.height(2 * $button.outerHeight() / 3);
		$buttonHeight.width($button.outerWidth());

		$platform.height($button.outerHeight() + $platform.height());
		$platform.width($button.outerWidth() + $platform.width());

		// Set the platformWalls to be 1/3 the size of the button
		$platformWall.height($button.outerHeight() / 3);
		$platformWall.width($button.outerWidth());

		$button.on("mousedown", function() {
			c("Button Clicked!");
		});
	});

	// $buttonContainers.height($buttons.outerHeight());
	// $buttonContainers.width($buttons.outerWidth());

	// // Set buttonHeight to be 2/3 the size of the button
	// $buttonHeight.height(2 * $buttons.outerHeight() / 3);
	// $buttonHeight.width($buttons.outerWidth());

	// $platforms.height($buttons.outerHeight() + $platforms.height());
	// $platforms.width($buttons.outerWidth() + $platforms.width());

	// // Set the platformWalls to be 1/3 the size of the button
	// $platformWalls.height($buttons.outerHeight() / 3);
	// $platformWalls.width($buttons.outerWidth());

	// $buttons.on("mousedown", function() {
	// 	c("Button Clicked!");
	// });
}

// function to do console.log() (I didn't want to keep writing it out)
function c(s) {
	console.log(s);
}

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
  