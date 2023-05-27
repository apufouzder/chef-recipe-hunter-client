/* eslint-disable react/no-unescaped-entities */

import html2pdf from 'html2pdf.js';


const Blogs = () => {
    const handleDownloadPDF = () => {
        const element = document.getElementById('blog-content');
        html2pdf().from(element).save('blog.pdf');
    };

    return (
        <div className="container mx-auto my-14">
            <button
                className="btn btn-warning mb-4"
                onClick={handleDownloadPDF}
            >
                Download PDF
            </button>

            <div id="blog-content">

                <div className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title bg-slate-100 text-xl font-medium">
                        1. Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content">
                        <p>
                            <li>Uncontrolled components: In an uncontrolled component, the form data is handled by the DOM itself, and React does not have direct control over it.</li>
                            <li>Controlled components: In a controlled component, React controls the state of the form data. The input elements are tied to React state variables, and their values are controlled and updated through event handlers. Whenever the state changes, React re-renders the component, and the form values are updated accordingly. </li>
                        </p>
                    </div>
                </div>

                <div className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title bg-slate-100 text-xl font-medium">
                        2. How to validate React props using PropTypes
                    </div>
                    <div className="collapse-content">
                        <p>React provides a library called prop-types that allows you to define and validate the props passed to a component.
                            <br />
                            <li>Import PropTypes</li>
                            <li>Define propTypes for a component</li>
                        </p>
                    </div>
                </div>

                <div className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title bg-slate-100 text-xl font-medium">
                        3. Difference between Node.js and Express.js
                    </div>
                    <div className="collapse-content">
                        <p>
                            <li>Node.js: Node.js is a runtime environment that allows you to run JavaScript code outside the browser. It uses the V8 JavaScript engine and provides a set of built-in modules to build server-side applications. Node.js allows you to create web servers, handle file operations, perform network operations, and more. It provides a non-blocking, event-driven architecture that allows for efficient handling of concurrent requests.</li>
                            <li>Express.js: Express.js is a web application framework built on top of Node.js. It provides a simple and minimalist approach to building web applications and APIs. It provides a set of features like routing, template engines, and middleware support to simplify the development of web applications in Node.js.</li>
                        </p>
                    </div>
                </div>

                <div className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title bg-slate-100 text-xl font-medium">
                        4. Custom hooks and their purpose
                    </div>
                    <div className="collapse-content">
                        <p>Custom hooks are reusable functions in React that encapsulate logic and can be shared across multiple components. They allow you to extract stateful logic from components and reuse it without duplicating code. Custom hooks follow a specific naming convention of starting with the word "use" to let React know that it's a hook.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;