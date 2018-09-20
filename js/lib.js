// create a function called $ and pass in a string selector
const $ = (selector) => {
  // get all of the elements on the page with the secific selector that was passed in and store them into a variable, it is an array
  const nodes = document.querySelectorAll(selector);

  // create a function called text that will take in a string argument, loop through all the nodes (or elements with that specific selector) and change their text to whatever string is being passed in
  const text = (str) => {
    for(let i=0; i < nodes.length; i++) {
      nodes[i].innerText = str;
    }
  }
  
  // return an object with the text function to be used as a method, ES6 syntax lets us write the key/value pair as one word if the key/value pair is the same
  return {
    text
  }

}

// pass in a string selector and call on the text() method to change the text of whatever is being targeted
$(".main").text("Some other changed text");