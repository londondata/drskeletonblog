// bringing in react even tho i dont think we need it bc react doesnt require it, ima test that
import React from "react";

// bring in reactDOM to mount component and DOM the DOM
import reactDOM from "react-dom";

// base component without JSX
const App = React.createElement("h1", null, "hello world");

// rendering out the app to the dom, mounted on that root div i love so frickin much. it all comes out to that HTML babyyyyyyy
reactDOM.render(App, document.getElementById("root"));
