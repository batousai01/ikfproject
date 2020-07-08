

// scroll effect


$(function() {
  var curBot = 0;
  var scrollable = true;

  function navDown() {
    curBot += 100;
    scrollable = false;
    $(".backgrounds").css("transform", "translateY(-" + curBot + "vh)");
    setTimeout(function() {
      scrollable = true
    }, 1000);
  }

  function navUp() {
    curBot -= 100;
    scrollable = false;
    $(".backgrounds").css("transform", "translateY(-" + curBot + "vh)");
    setTimeout(function() {
      scrollable = true
    }, 1000);
  }
  var stY;
  
  $(document).on("touchstart", function(event) {
    stY = event.originalEvent.touches[0].screenY;
  })
  
  $(document).on("touchmove", function(event) {
    event.preventDefault();
    var curY = event.originalEvent.touches[0].screenY;
    if (stY - curY > 50 && curBot <= 300 && scrollable)
      navDown();
    else if (curY - stY > 50 && curBot > 0 && scrollable) 
      navUp();
  })
  
  $(document).on("keydown", function(event) {
    if (event.keyCode == 40 && curBot <= 300 && scrollable) 
      navDown();
    else if (event.keyCode == 38 && curBot > 0 && scrollable)
      navUp();
  })

  $(document).on("mousewheel DOMMouseScroll", function(event) {
    event.preventDefault();
    if ((event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0) && curBot <= 300 && scrollable)
      navDown();
    else if ((event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) && curBot > 0 && scrollable)
      navUp();    
  })

})



// FADE IN FADE OUT IMAGE

$(document).ready(
  function() {
    var i = 0, j = 0; 
    var imgs = $('#header ul').children();
    runIt(imgs);

    function runIt() {
      $(imgs).eq(i).fadeIn(3000, function() {
        setTimeout(runIt,'3500');
      });
      i = i + 1; 
      if (i == imgs.length) {
        i = 0; $('#images li').fadeOut(3000)
      } 
    }
});

// on scroll nav bar


