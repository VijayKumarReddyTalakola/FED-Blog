import React from "react";
import code from "./Images/code.png"
import code1 from "./Images/code1.png"
import code2 from "./Images/code2.png"
import code3 from "./Images/code3.png"
import code4 from "./Images/code4.png"
import code5 from "./Images/code5.png"
import code6 from "./Images/code6.png"
const Event = () => {
  return (
    <>
    <div className="event" >
    <h1>Event Handling </h1><br/>
    Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
    <br/><br/>
    <ol>
      <li>
        React events are named using camelCase, rather than lowercase.
      </li><br/>
      <li>
        With JSX you pass a function as the event handler, rather than a string.
      </li><br />
    </ol>
    For example, the HTML:<br/><br/>
    < img className="small" src= {code} alt ="" /><br/><br/>
    is slightly different in React:<br/><br/>
    < img className="small" src= {code1} alt ="" /><br/><br/>
    Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, you can write:<br/><br/>
    < img className="medium" src= {code2} alt ="" /><br/><br/>
    In React, this could instead be:<br/><br/>
    < img className="large" src= {code3} alt ="" /><br/><br/>
    Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the SyntheticEvent reference guide to learn more.<br /><br/>
    When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.<br/><br/>
    When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:<br/><br/>
    < img className="large" src= {code4} alt ="" /><br/><br/>
    You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.<br/><br/>
    < img className="large" src= {code5} alt ="" /><br/><br/>
    <h1>Passing Arguments to Event Handlers</h1><br/>
    Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:<br/><br/>
    < img className="medium" src= {code6} alt ="" /><br/><br/>
    The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.<br/>
    </div>
    </>
  );
};

export default Event;
