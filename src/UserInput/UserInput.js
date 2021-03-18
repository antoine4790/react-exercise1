import React from 'react';

const userInput = (props) => {

    const styleUserInput= {
        border : '1px solid #aaa',
        width : '80%',
        margin: '20px auto',
        boxShadow : '0 10px 10px #aff',
        backgroundColor : 'white',
        textAlign : 'center'
    };
    
    return (
        <div className="UserInput">
          <input style={styleUserInput} onChange={props.changed} value={props.username}></input>
        </div>
    )
    
};
    
export default userInput;
