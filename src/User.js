import React from 'react';
function User() {
    // return (
    //     <h1>User component</h1>
    // )
    // without JSX
    // return React.createElement('h1', null, 'User Component');
    return React.createElement("div", {id: 'hello', className: 'hello-class'}, 
    React.createElement('h1', null, 'Hello user component') );
};

export default User;

// default is not used then import {User} .. will happen
// like this means importing one by one.