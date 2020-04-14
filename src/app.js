/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

let arr = [3, 4, 2, 1, 5];
const sort = new Sort(arr);
const result = sort.sort();

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle(sort.returnValue("Re-Engineer Yourself"));
document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
const containerEl = document.querySelector("#newsfeed");

// setTimeout(function() {
//   showNewsfeed();
// }, 3000);

let next = document.getElementById("next item");
next.innerText = "Next";
next.addEventListener("click", () => {
  let next_part = document.createElement("div");
  next_part.id = "next_part";
  next_part.innerText = "result";
  containerEl.append(next_part);
});

containerEl.appendChild(next);

// this just makes things appear

function showNewsfeed() {
  const next_part = document.createElement("div");
  next_part.id = "next_part";
  next_part.innerText = "result";
  containerEl.append(next_part);
}
// showNewsfeed();
