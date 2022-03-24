import React from "react";
import ReactDOM from "react-dom";
import faker from '@faker-js/faker';




const App = () => {



    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Robert O
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6pm
                        </span>
                    </div>
                    <div className="text">Nice blog post brahhhh</div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))