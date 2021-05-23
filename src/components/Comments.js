import React, { Component, createRef } from 'react'
import '../main.css'

class Comments extends Component {

    constructor(props){
        super(props)
        this.state={
            editing: false
        }
        this.newText = createRef();
    }
    edit(){
        this.setState({
            editing: true
        })
    }
    save(){
        var val = this.newText.current.value;
        console.log("New Comment: " + val);
        this.props.updateCommentText(val, this.props.index);
        this.setState({
            editing: false
        });
    }
    remove(){
        console.log("Removing comment");
        this.props.deleteFromBoard(this.props.index)
    }

    renderNormal(){
        return(
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={()=>this.edit()} className="editbtn">Edit</button>
                <button onClick={()=>this.remove()} className="removebtn">Remove</button>
            </div>
        );
    }

    renderForm(){
        return(
            <div className="commentContainer">
                <textarea ref={this.newText} defaultValue={this.props.children}></textarea>
                <button onClick={()=>this.save()} className="savebtn">Save</button>
            </div>
        );
    }

    render() {
        if (this.state.editing){
            return this.renderForm();
        }
        else{
            return this.renderNormal();
        }
    }
}

export default Comments
