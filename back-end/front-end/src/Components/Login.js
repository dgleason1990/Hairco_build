import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super();
        this.usernameRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    state={
        username: '',
        password: ''
    }

    handleSubmit = async (e) => {
        let url = 'http://localhost:8080'
        // 'https://hairco.herokuapp.com'
        e.preventDefault();
        await this.setState ({
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value
        });
        let init = {
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
              "content-type": "application/json"
            }
          }
        fetch(url + '/login', init)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            this.setState ({
                id: data.id
            });
            localStorage.setItem('token', data.token);
            this.props.history.push(`/dashboard/${this.state.username}`)}
        )}

  render() {
    return (
      <div className='login'>
        <form>
            <label>
                Username:
                <input ref={this.usernameRef}/>
            </label>
            <label>
                Password:
                <input ref={this.passwordRef} type='password'/>
            </label>
            <button onClick={ this.handleSubmit }> <img src='./Assets/button.jpg' alt='Button Image'/>Login</button>
        </form>
      </div>
    )
  }
}
