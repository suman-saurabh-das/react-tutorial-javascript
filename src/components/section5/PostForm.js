import React, { Component } from 'react'
import axios from 'axios'

/*
    We have created a form to collect the data and post it in the server using axios
    We will be posting data to the endpoint -> https://jsonplaceholder.typicode.com/posts
    
    Steps to Send the data
    1. import the axios library
    2. In the submitHandler(), we will make the post request using axios.post() method
    3. The post method takes a 2nd argument which is the data that has to be sent
    4. Once the request is complete, we either get a response or an error
        then() - accepts an arrow function as its argument which gives us access to the response.
        catch() - accepts an arrow function as its argument which gives us access to the error if something goes wrong.
*/

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form action="" onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name='userId' placeholder='UserID' value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name='title' placeholder='Title' value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name='body' placeholder='Body' value={body} onChange={this.changeHandler} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
