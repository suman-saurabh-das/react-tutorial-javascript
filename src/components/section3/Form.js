import React, { Component } from 'react'

/*
    Note - Initially form elements are not controlled elements as their state is handled by the HTML components
    Steps to convert HTML form elements into controlled components -
    
        Step 1 - Create a component state that can control the value of the input element
        Step 2 - Handling the onChange event
*/

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comments: "",
            topic: "React",
            gender: ""
        }
    }

    // When we assign a handler to the onChange event, the event itself is passed as a parameter to the handler
    // We can extract the value of element using event.target.value
    handleUsernameChange = (event) => {
        this.setState ({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    // Default behaviour of form button is to reload the page
    // We can have a JS method to handle form submission and this method will also have access to the form data
    // NOTE - for submit button onSubmit handler method is in form element and not in submit button
    // To prevent the page from refereshing when submitted, we can use event.preventDefault()
    handleSubmit = (event) => {
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}, ${this.state.gender}`)
        event.preventDefault()
    }

    render() {
        const {username, comments, topic} = this.state;
        return (
            <>
                <h3>Form Component</h3>
                <form action="" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username : </label>
                        <input type="text" value={username} onChange={this.handleUsernameChange}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="gender">Male</label>
                        <input name='gender' type="radio" value="male" onChange={this.handleGenderChange}/>
                        <label htmlFor="gender">Female</label>
                        <input name='gender' type="radio" value="female" onChange={this.handleGenderChange}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="comments">Comments : </label>
                        <textarea name="comments" cols="21" rows="5" value={comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="topic">Topic : </label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Form
