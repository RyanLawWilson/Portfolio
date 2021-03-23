console.log("Reading JS");
$(() => {
	// Smooth load in ***NOT FULLY IMPLEMENTED***
	console.log("=== Document Loaded ===");
	$("body").addClass("smooth-load-transition");

	findAndCreateButtons();

	activateBootstrapCarousels();

	//initializeGifffer();

	console.log("=== All JS Complete ===");
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
		// If the URL has a # at the start, don't put in target='_blank'
		// Replace all spaces in the text with &nbsp; to fix a bug where each word starts on a new line.
		// If the data-text attribute was left out, set text to a default value

		let target = ($(this).attr("data-href") != undefined && $(this).attr("data-href")[0] == '#') ? "" : "target='_blank'";
		let url = $(this).attr("data-href") != "" && $(this).attr("data-href") != undefined ? "href='" + $(this).attr("data-href") + "'" : "";
		let text = $(this).attr("data-text") != undefined ? $(this).attr("data-text").replace(/ /g, "&nbsp;") : "Button";

		// Add the components that make up the button to the button container
		let $button = $(`<a class='btn btn-main ${variant}' ${url} ${target}>${text}</a>`).appendTo($(this));
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
			// c("Button Clicked!");
		});
	});
}

function activateBootstrapCarousels() {
	// Start amiibo carousel
	$('#amiibo-indicators.carousel').carousel({
		interval: 30000
	});

	// Start space traders carousel
	$('#space-traders-indicators.carousel').carousel({
		interval: 20000
	});

	// Detect when any one of the portfolio carousel slides.
	$(".portfolio-carousel").bind("slide.bs.carousel", (e) => {
		// Need to wait for the Bootstrap to add the carousel-item-next class to the carousel item.
		setTimeout(() => {
			let prevOrNext = e.target.getElementsByClassName("carousel-item-next")[0] ?? e.target.getElementsByClassName("carousel-item-prev")[0];
			let page = prevOrNext.getAttribute("data-page");
			console.log(`Going to ${page}`);
			let carouselName = e.target.getAttribute('data-carousel-name');

			// Find the page we are moving to and display the text for that page.
			$(`.portfolio-carousel--text-container[data-associated-carousel="${carouselName}"] > div[data-page="${page}"]`).css({ display: "block", opacity: 1 });

			// Hide all of the text that doesn't match the page that the carousel is moving to.
			$(`.portfolio-carousel--text-container[data-associated-carousel="${carouselName}"] > div[data-page]:not([data-page="${page}"])`).css("display", "none");
		}, 50);
	});
}

function initializeGifffer() {
	// https://github.com/krasimir/gifffer
	Gifffer({
		playButtonStyles: {
			'width': '60px',
			'height': '60px',
			'border-radius': '30px',
			'background': 'rgba(50, 49, 48, 0.9)',
			'position': 'absolute',
			'top': '50%',
			'left': '50%',
			'margin': '-30px 0 0 -30px'
		},
		playButtonIconStyles: {
			'width': '0',
			'height': '0',
			'border-top': '14px solid transparent',
			'border-bottom': '14px solid transparent',
			'border-left': '14px solid rgba(255, 0, 0, 0.8)',
			'position': 'absolute',
			'left': '26px',
			'top': '16px'
		}
	});
}

// function to do console.log() (I didn't want to keep writing it out)
function c(s) {
	console.log(s);
}