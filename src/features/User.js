import React, {Component} from 'react';

export default class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            userList : []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:8080/users')
        .then(function(result){
            return result.json();
        }).then(function(json){
            this.setState({userList:json.data});
        }.bind(this));
    }


    render(){
        var listTag = [];
        for(var i=0;i<this.state.userList.length;i++){
            listTag.push(<li key={this.state.userList[i].identity}>{this.state.userList[i].name}</li>);
        }

        return (
            <nav>
                <ul>{listTag}</ul>
            </nav>
        )
    }
}