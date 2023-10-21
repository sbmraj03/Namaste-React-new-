// creating nested html structure inside react
/**
 * react elem at the end of the day is obj and this obj becomes html that the browser understand
 * react.createElement creates and obj and while rendering into the dom it converts obj into the html
 * 
 *  if 2 or more siblings are there then the 3rd arg will be an array aka array of children
 *  but what if no. of child incr, code becomes messy => t/f JSX came into exist
 * 
 * diff btw lib and framework-> react is a lib b/c it can work even in a smaller portion of our code like header or footer 
 * react is just a some piece of JS code
 */


/**
 *  <div id="parent">
 *      <div id="child1">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * 
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *  </div>
 */


const parent= React.createElement("div",{id: "parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
    ]),
]);

console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root")); 
root.render(parent);
