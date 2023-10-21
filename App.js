import React from "react";
import ReactDOM from "react-dom/client";

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


const root= ReactDOM.createRoot(document.getElementById("root")); 
root.render(parent);



/**
 * 1. npm init (test command: jest, keyword: namaste react,akshay sain,S.R)
 *    we will get package.json a/f s1 (package.json is a configuration for npm)
 *      npm needs package.json->  to help identify the project and handle dependencies.
 * Bundlres->   a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser
 * webpack,vite,parcel these all are bundlers
 * 
 * 2. npm install -D parcel (-D means i want parcel as a dev dependencies)
 *  dev dependencies-> req in developmet phase that is when we are developing our app
 *  normal dep-> used in production also 
 *  
 * In package.json under devdependencies we will find ~ and ^ sign(tidle and caret) 
 * ~: it install the "MAJOR" version of parcel release
 * ^: it automatically upgrade parcel to the new "MINOR" version of parcel release
 * no sign: no upgrade
 * t/f it is safe to use ^ because if major version is installed then alot of code will break
 * 
 * 
 * a/f s2 we wil get node modules && package-lock.json (it keeps the track of the exact version of teh depedencies that is being installed)
 * node modules-> it has all the packages inside it that we will use (our proj need parcel and parcel needs its own dependies and its dependies also depended on the other dependendcies "THESE ALL ARE KNOWN AS TRANSITIVE DEPENDENCIES")
 * every dependencies have its own package.json and many other things thats why node modules is huge
 *
 * put node modules in gitignore as we dont want it to go into production b/c it can be automatically recreated using package.json and package-lock.json just type npm install it will reinstall the node modules if it gets deleted
 * package.json and package-lock.json have the version of the dependencies t/f these are needed in the production
 * 
 * 3. npm parcel index.html (app gets ignited)
 * npx parcel package_name means to execute a package while npm is just  
 * when we do npx parcel goes to the source index.html and build a dev built for our app and host that dev built to local host 1234 if that is busy then it host the built to a new location
 *  
 * cdn link is not good to use -> it is a costly operation as we dont want to get our react from some other network call as we can already have it inside the node modules and the second thing is if some other version of react comes then we always have to change the cdn link to the new version 
 * t/f we can install react as a package inside our node modules 
 * 
 * 4. npm install react (react comes in the ndoe modules and the package.json and package-lock.json)
 * 5. npm i react-dom (i is short form of install)
 * everytime we want to see our development we have to ignite our app usign npx parcel index.html
 * 
 * 6. npx parcel index.html (creates .parcel-cache and dist for faster build)
 * use import from "react"; means react is coming from the node modules earlier it was coming from the cdn link
 * parcel beautifies the uix of the error
 * 
 * import is not a normal js file t/f to use it we have to write type="module" in the script...it tells the browser tha it is of type module and not the normal js file
 * 
 * npx parcel build index.html -> this is a production build(but it will give error...remove main from package.json...main is actually entry pt. of the parcel which is conflicting with the index.html)
 * 
 * dist and parcel-cache can be regenerated t/f these have to be pushed into the .gitignore
 * 
 * BrowserList -> gives us permit to decide on which browsers version we want our code to run 
 * 
 * 
 */