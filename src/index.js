import React from "react";
import ReactDOM from "react-dom";
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail.js'




const App = () => {



    return (
        <div className="ui container comments">
            <CommentDetail name="Robert O" date="jan 10" text="Im some text" />
            <CommentDetail name="Dis odda Guy" date="march 4" text="me too!" />
            <CommentDetail name="one more dude" date="feb 2" text="Dont forget about me!" />
            
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))