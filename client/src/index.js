// we always have to bring it in ONCE, here on the root level, but then webpack enables us to only have to import once.
import React from "react";
import reactDOM from "react-dom";

const DrApp = () => {
	return <h1>DR Stack Forever</h1>;
};

// rendering out the app to the dom, mounted on that root div i love so frickin much. it all comes out to that HTML babyyyyyyy
reactDOM.render(DrApp, document.getElementById("root"));
