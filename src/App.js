import React, { Component } from 'react';

import './App.css';


import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {

    state = {
        useroutputs :[
            {username : 'ANTONIO'},
            {username : 'DAVID'},
            {username : 'MARIA'}
        ]
    };

    changeUsernameHandler = (event) => {
        this.setState(
            {
                useroutputs :[
                    {username : event.target.value},
                    {username : 'DAVD'},
                    {username : 'MARA'}
                ]
            }
        )
    }
    
    render() {

        return (
            <div className="App">
              
              <UserOutput username={this.state.useroutputs[0].username}/>
              <UserOutput username={this.state.useroutputs[1].username}/>
              <UserOutput username={this.state.useroutputs[2].username}/>
              
              <UserInput changed={this.changeUsernameHandler} username={this.state.useroutputs[0].username}></UserInput>
            </div>
        );
    }
}

export default App;
