export const setToken = (eventObj) => {
    // TODO modify this action, so that it takes the onSubmit event handle object from Login,
    // perform the actual authentication, and then return as the "value" the actual retrieved token.
    return (dispatch) => {
        let newToken = null;
        // now perform authentication.

        // eventObj.preventDefault();
        // get the username and password from the form
        // e.target is the form and e.target.username is the input textfield with the name attribute of "username"
        let theUsername = eventObj.username;
        let thePassword = eventObj.password;
        console.log(`The given username is ${theUsername} and the given password is ${thePassword}.`);
        // Make a JSON object that will be passed to the backend API
        let credentials = {
            email_address: theUsername,
            password: thePassword
        }

        fetch("http://localhost:3000/users/authenticate", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((theData) => {
                console.log(`The data from logging is ${JSON.stringify(theData)}`);
                // Based on this API's successful authentication, theer should be a token field in the returned
                // JSON object.  Use that field to update the state's JWT field.
                // TODO Here, you need ot be able to somehow make use of the SET_TOKEN Redux action.
                // The Login component has a container that ties that cation to it, so the action should
                // be available to Login's props.setToken action function.
                const action = {
                    type: "SET_TOKEN",
                    value: theData.token
                }
                dispatch(action);

                const useraction = {
                    type: "SET_USER",
                    value: theData.user
                }
                dispatch(useraction);
            });



    }   // end of that dispatch anonymous function
    //return {
    //    type: "SET_TOKEN",
    //    value: newToken
    //}
}

export const unsetToken = (tokenToRemove) => {
    return {
        type: "UNSET_TOKEN",
        value: tokenToRemove
    }
}