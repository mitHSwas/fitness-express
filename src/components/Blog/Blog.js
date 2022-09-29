import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className="blog">
                <h1>How Does React.js works ?</h1>
                <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.
                    Users can create a representation of a DOM node by declaring the Element function in React.
                    You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.
                    JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.
                    In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
            </div>
            <div className="blog blog-2">
                <h1>What are the difference between Props and State ?</h1>
                <div>
                    <h3>State</h3>
                    <p>
                        The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render.
                    </p>
                    <h3>Props</h3>
                    <p>
                        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components.
                    </p>
                </div>
            </div>
            <div className="blog">
                <h1>Instead of data loading why useEffect needs for react?</h1>
                <p>
                    useOnUpdate() This is another useful hook for when we want to trigger an action when the component state changes, and not when the component mounts. You can consider it the ComponentWIllUpdate alternative for functional React. This one - calls the callback each time the state changes, triggering an action.The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components.
                </p>
            </div>
        </div>
    );
};

export default Blog;