console.log("Reading JS");
$(function() {
	console.log("Doc Loaded");
	var $body = $("body");
	$body.addClass("smooth-load-transition");
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
  