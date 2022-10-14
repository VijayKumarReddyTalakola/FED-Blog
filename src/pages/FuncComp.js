import React from "react";
import code7 from "./Images/code.png"
import code8 from "./Images/code8.png"
import code9 from "./Images/code9.png"
import code10 from "./Images/code10.png"
import code11 from "./Images/code11.png"
import code12 from "./Images/code12.png"
const FuncComp = () => {
  return (
    <>
    <div className="event" >
    <h1>Components</h1><br/>
    Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.<br/><br/>
    Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.<br/><br/>
    <h1>Function Components</h1><br/>
    The simplest way to define a component is to write a JavaScript function:<br/><br/>
     < img className="small" src= {code7} alt ="" /><br/><br/>
    This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.<br/><br/>
    <h1>Rendering a Component</h1><br/>
    Previously, we only encountered React elements that represent DOM tags:<br/><br/>
     < img className="small" src= {code8} alt ="" /><br/><br/>
    However, elements can also represent user-defined components:<br/><br/>
     < img className="small" src= {code9} alt ="" /><br/><br/>
    When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.<br/>
    For example, this code renders “Hello, Sara” on the page:<br/><br/>
     < img className="medium" src= {code10} alt ="" /><br/><br/>
    <h4>Let’s recap what happens in this example:</h4><br/>
    <ol>
      <li>We call root.render() with the &lt; Welcome name="Sara" / &gt; element.</li><br/>
      <li>React calls the Welcome component with { 'Sara'} as the props.</li><br/>
      <li>Our Welcome component returns a &lt;h1&gt;Hello, Sara&lt;/h1&gt; element as the result.</li><br/>
      <li>React DOM efficiently updates the DOM to match &lt;h1&gt;Hello, Sara&lt;/h1&gt;.</li><br/>
    </ol>
    <h1>Composing Components</h1><br/>
    Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.<br/><br/>
    For example, we can create an App component that renders Welcome many times:<br/>
    <br/>
     < img className="large" src= {code11} alt ="" /><br/><br/>
     Typically, new React apps have a single App component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like Button and gradually work your way to the top of the view hierarchy.<br/><br/>
     <h1>Extracting Components</h1><br/>
     Don’t be afraid to split components into smaller components.<br/><br/>
     For example, consider this Comment component:<br/><br/>
     < img className="large" src= {code12} alt ="" /><br/><br/>
     Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be extracted to a separate component.
    
    </div>
    
    </>
  )
};

export default FuncComp;
