// create a function called $ and pass in a string selector
const $ = (selector) => {
  // get all of the elements on the page with the secific selector that was passed in and store them into a variable, it is an array
  const nodes = document.querySelectorAll(selector);

  // create a function called text that will take in a string argument, loop through all the nodes (or elements with that specific selector) and change their text to whatever string is being passed in
  const text = (str) => {
    // using a for loop
    // for(let i=0; i < nodes.length; i++) {
    //   nodes[i].innerText = str;
    // }

    // using the higher order function forEach() to iterate through the nodes array and make the inner html of every node equal to the string being passed in
    nodes.forEach((node) => {
      node.innerHTML = str;
    });
  }

  // function that will iterate through every node and make the inner html equal to the markup passed in
  const html = (markup) => {
    nodes.forEach((node) => {
      node.innerHTML = markup;
    });
  }

  // function that will iterate through every node and will modify the css property being passed in and set it equal to the value passed in
  const css = (property, value) => {
    nodes.forEach((node) => {
      node.style[property] = value;
    })
  }
  
  // return an object with the above functions to be used as methods, ES6 syntax lets us write the key/value pair as one word if the key/value pair is the same word
  return {
    text,
    html,
    css
  }

}

// pass in a string selector and call on the text() method to change the text of whatever is being targeted
// $(".main").text("Some other changed text");
// $(".main").html("<i>Some Italic text</i>");
$(".main").css("background", "red");