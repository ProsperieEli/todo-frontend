import React, { Component } from 'react'
import { signIn} from '../utils';

export default class Signin extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { token } = await signIn(this.state.email, this.state.password);

        this.props.handleTokenChange(token);

        this.props.history.push('/Todolist');
    }
    render() {


        return (
            <div>
       
            <form onSubmit = {this.handleSubmit}>
                    <label>
                        Email
                        <input value={this.state.email} onChange ={(e) => this.setState({email: e.target.value})} type='email' />
                    </label>
                    <label>
                        Password
                        <input value={this.state.password} onChange ={(e) => this.setState({password: e.target.value})} type='password' />
                    </label>
                        <button>Let's Go!</button>
                
                </form>
            </div>
        )
    }
}