// library code here

// create a function called $ and pass in a string selector
const $ = (selector) => {
  // get all of the elements on the page with the secific selector that was passed in and store them into a variable, it is an array
  // const nodes = document.querySelectorAll(selector);

  // using a a ternary expression to check conditions 
  let nodes = Array.isArray(selector) ? selector : document.querySelectorAll(selector);

  // long way of doing if/else
  // if(Array.isArray(selector)) {
  //   nodes = selector
  // } else {
  //   nodes = document.querySelectorAll(selector);
  // }

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

    // return the $ function with the selector being passed in to be able to chain methods
    return $(selector);
  }

  // function that will iterate through every node and make the inner html equal to the markup passed in
  const html = (markup) => {
    nodes.forEach((node) => {
      node.innerHTML = markup;
    });

    return $(selector);
  }

  // function that will iterate through every node and will modify the css property being passed in and set it equal to the value passed in
  const css = (property, value) => {
    nodes.forEach((node) => {
      node.style[property] = value;
    })

    return $(selector);
  }

  // function that will target all sibling elements
  const siblings = () => {
    // empty array to hold all sibling elements
    let sibs = [];

    // looping through all the nodes, targeting the very first sibling at the top and getting all siblings after it except the current node we are working on
    nodes.forEach((node) => {
      el = node.parentNode.firstChild;

      while (el = el.nextElementSibling) {
        if (el != node) {
          sibs.push(el);
        }
      }
    })

    return $(sibs);
  }
  
  // return an object with the above functions to be used as methods, ES6 syntax lets us write the key/value pair as one word if the key/value pair is the same word
  return {
    text,
    html,
    css,
    siblings
  }

}


