import React from "react";
import ReactDOM from "react-dom/client";

const Title= () => (
    <h1 className="head" tabIndex="5">
        Namaste React using jsx
    </h1>
);

const HeadingComponent=()=> (
    <div id="container">
       {Title()}
       {<Title/>}
       {<Title></Title>}
        <h1 className="heading"> Namaste React Functional Component</h1>
    </div>
);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);





/**
*           // creating react elem using core react
            const heading = React.createElement(
                "h1",
                { id:"heading"},
                "Namaste React"
            );

            const root= ReactDOM.createRoot(document.getElementById("root"));
            root.render(<HeadingComponent/>);
 */



/**
 *      // JSX -> this is not html inside js...it is html/xml like syntax
*       // creating react element usign jsx
        const jsxHeading= (
                <h1 id="heading">
                    Namaste React using JSX
                </h1>
        );

        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(jsxHeading);
 */


/**
 * there is no diff btw jsxheading and heading both are obj
 * Our browser doesnt understand jsx...js engines can only read ES6 code
 * But jsx code is working cz of parcel...jsx code is transpiled b/f it reaches to js engines and who does it? it is done by Babel
 * Parcel already have Babel...babel is a js compiler or transpiler..it converts the jsx to react code 
 * jsx is converted to react.createElement and then it is later on it is converted to js object and then to html element
 * 
 * Diff btw jsx and html -> jsx has className while html has class
 *                          jsx uses camelcase while html has normal small alphabets
 * If you want to write jsx in multiple lines then have to write inside () o/w for one liner no need to use () 
 *      eg-> const jsxHeading= <h1 id="heading">Namaste React using JSX</h1>;
 * 
 * 
 * 
 * React Component -> class based component => old way => uses js classes => no one writes in this way
 *                    functional component => uses js fxn => have to use this only
 * functional component => fxn which returns some piece of jsx code/ returns react element
 *      if there is only one line used then can skip return
 *      in the below code HeadingComponent1 and HeadingComponent2 both are the same thing
                    const Title= () => (
                                    <h1 className="head" tabIndex="5">
                                        Namaste React using jsx
                                    </h1>
                                );
*                    // React Fxnal Component
                    
                    const HeadingComponent1= () => {
                        return <h1 className="heading">Namaste React Functional Component</h1>;
                    };

                    const HeadingComponent2= () => (
                        <h1 className="heading">Namaste React Functional Component</h1>
)
 */



/**
 * Component Composition-> we used functional component title inside another functional component this ika comp composition
 * Inside JSX code if we use curly bracket {}, then we can write any js code inside this curly bracket
 *              eg-> const number=300;
                    const HeadingComponent=()=> (
                        <div id="container">
                            <Title/>
                            <Title></Title>  //both type of Title are same
                            {number} {2+3} {"my name is khan"} {console.log(HeadingComponent)}
                            <h1 className="heading"> Namaste React Functional Component</h1>
                        </div>
                    );

                    const root= ReactDOM.createRoot(document.getElementById("root"));
                    root.render(<HeadingComponent/>);
 * 
 * 
 */


/**
*       // Inserting js variable or react elem inside functional comp
        const title= (
            <h1 className="head" tabIndex="5">
                Namaste React using jsx
            </h1>
        );

        const HeadingComponent=()=> (
            <div id="container">
            {title}
                <h1 className="heading"> Namaste React Functional Component</h1>
            </div>
        );

        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(<HeadingComponent/>);
 */



/**
*      // inserting elem inside elem
        const elem= <span>React element</span>
        const title= (
            <h1 className="head" tabIndex="5">
                {elem}
                Namaste React using jsx
            </h1>
        );

        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(title);
        
 */




/**
 *    // what if data coming from api call is some malicious data that can attack our system=> then jsx wil sanitize this data b/f running into our system...and this type of attack ika cross site scripting attack
        const data= api.getData();

        const HeadingComponent=()=> (
            <div id="container">
            {data}
                <h1 className="heading"> Namaste React Functional Component</h1>
            </div>
        );
 */



/**
 *      // 3 ways to use functiona component inside another functional component
        const Title= () => (
            <h1 className="head" tabIndex="5">
                Namaste React using jsx
            </h1>
        );

        const HeadingComponent=()=> (
            <div id="container">
            {Title()}
            {<Title/>}
            {<Title></Title>}
                <h1 className="heading"> Namaste React Functional Component</h1>
            </div>
        );
 */