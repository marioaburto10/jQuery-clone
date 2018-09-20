# jQuery-clone
Creating a jQuery like library. It is a function that you can pass in a string selector to manipulate a certain element in the DOM. It returns an object of methods and you can call on those methods.

* for example: 
``` javascript
$(".main")
  .siblings()
  .css("background", "red")
  .text("Some other changed text")
  .html("<i>Some Italic text</i>");
```
