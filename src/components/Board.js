import React, { Component } from 'react'
import Comments from './Comments';

class Board extends Component {
    constructor(props){
        super(props)
        this.state={
            comments:[
                'I am Rakesh',
                'Okay!! This is cool.. Lets have fun now'
            ]
        }
    }
    
    add(text){
        var arr = this.state.comments;
        arr.unshift(text);
        this.setState({
            comments: arr
        })
    }

    removeComment(i){
        console.log('Removing comment: '+i);
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({
            comments: arr
        })
    }

    updateComment(newText, i){
        console.log('Updating comment:');
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({
            comments: arr
        })
    }
    
    eachComment(text, i){
        return (
          <Comments key={i} index={i} 
          updateCommentText={(value, index)=>this.updateComment(value, index)} 
          deleteFromBoard={(index)=>this.removeComment(index)}>
    
            {text}
    
          </Comments>
        );
      }
    
      render(){
        return (
            <div>
                <div className="top">
                    <button className="newbtn" onClick={()=>this.add("Write a Comment")}>Add New</button>
                </div>
                <div className="board">
                    {this.state.comments.map(this.eachComment,this)}
                </div>
            </div>
            
    
        );
    }
}

export default Board
