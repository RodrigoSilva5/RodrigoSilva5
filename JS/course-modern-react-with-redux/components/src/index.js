import React from "react";
import ReactDOM from "react-dom"
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import './style/App.css'

const App = () => {
    return (
            <div className="ui container comments">
                <ApprovalCard>
                    <div>
                        <h4>WARNING</h4>
                        Are sure about this ?
                    </div>
                </ApprovalCard>
                <ApprovalCard>           
                    <CommentDetail 
                        author='Sam' 
                        timeAgo='Today at 4:45PM' 
                        text='Nice dick bro' 
                        avatar={faker.image.image()} 
                    /> 
                </ApprovalCard>    
                <ApprovalCard>
                    <CommentDetail 
                            author='Alex' 
                            timeAgo='Today at 2:45PM' 
                            text='Agree !!!' 
                            avatar={faker.image.image()} 
                        /> 
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail 
                        author='Jane' 
                        timeAgo='Today at 6:45AM' 
                        text="How this will influence the Palmeiras Football Club ?" 
                        avatar={faker.image.image()} 
                    /> 
                </ApprovalCard>


            </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))