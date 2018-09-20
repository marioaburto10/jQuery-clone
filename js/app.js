// app code here

// calling the $ function that we created and its methods, and chaning methods to it to manipulate the DOM
$(".main")
  .siblings()
  .css("background", "red")
  .text("Some other changed text")
  .html("<i>Some Italic text</i>");