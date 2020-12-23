console.log("Reading JS");
$(function () {
	// Smooth load in ***NOT FULLY IMPLEMENTED***
	console.log("=== Document Loaded ===");
	var $body = $("body");
	$body.addClass("smooth-load-transition");

	findAndCreateButtons();
});

// Allows shorthand HTML to be written for buttons.  Contains code that
// populates HTML withe the markup necessary to display button correctly.
function findAndCreateButtons() {
	// Foreach button container, assign the button variant and write the inner html.
	$(".btn-main--container").each(function () {
		let variant = "";
		// Determine which variant to create
		if ($(this).attr("data-variant-success") != undefined) variant = " btn-main--success ";
		else if ($(this).attr("data-variant-danger") != undefined) variant = " btn-main--danger ";

		// If the URL is empty, don't bother putting in href=""
		// Replace all spaces in the text with &nbsp; to fix a bug where each word starts on a new line.
		// If the data-text attribute was left out, set text to a default value		

		let url = $(this).attr("data-href") != "" && $(this).attr("data-href") != undefined ? "href='" + $(this).attr("data-href") + "'" : "";
		let text = $(this).attr("data-text") != undefined ? $(this).attr("data-text").replace(/ /g, "&nbsp;") : "Button";

		// Add the components that make up the button to the button container
		let $button = $("<a class='btn btn-main" + variant + "' " + url + " target='_blank'>" + text + "</a>").appendTo($(this));
		let $buttonHeight = $("<div class='button-height'></div>").appendTo($(this));
		let $platform = $("<div class='platform'></div>").appendTo($(this));
		let $platformWall = $("<div class='platform-wall'></div>").appendTo($(this));

		// These next lines set the width and height of the components of the button.

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

		// On Click Events for buttons
		$button.on("mousedown", function () {
			c("Button Clicked!");
		});
	});
}

// function to do console.log() (I didn't want to keep writing it out)
function c(s) {
	console.log(s);
}