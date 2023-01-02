// // function add(a = 3, b = 2) {
// //   // return a+b;

// //   function print() {
// //     console.log(a + b);
// //   }
// //   print();
// // }
// // add();
// // function add(a = 2, b = 3) {
// //   console.log(c);
// //   function d() {
// //     var c = a + b;
// //   }
// //   d();
// // }

// // add();

// // c = 3;
// console.log(a);
// var a = 10;
// console.log(c);
// let c;
// // function add() {

// // }

// // add();

const appDiv = "app";
// Both set of different routes and template generation functions
let routes = {};
let templates = {};
// Register a template (this is to mimic a template engine)
let template = (name, templateFunction) => {
  return (templates[name] = templateFunction);
};
// Define the routes. Each route is described with a route path & a template to render
// when entering that path. A template can be a string (file name), or a function that
// will directly create the D

let route = (path, template) => {
  if (typeof template == "function") {
    return (routes[path] = template);
  } else if (typeof template == "string") {
    return (routes[path] = templates[template]);
  } else {
    return;
  }
};
