import React from "react";
import ReactDOM from "react-dom";
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail.js'
import ApprovalCard from './ApprovalCard.js'




const App = () => {



    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail name="Robert O" date="jan 10" text="Im some text" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name="Dis odda Guy" date="march 4" text="me too!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                 <CommentDetail name="one more dude" date="feb 2" text="Dont forget about me!" avatar={faker.image.avatar()} />
            </ApprovalCard>
           
                
            
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))