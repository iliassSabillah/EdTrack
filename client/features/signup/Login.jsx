import React from 'react';
import '../../styles/Login.css';
import LoginForm from './LoginForm';


class Login extends React.Component{
	constructor(props){
		super(props);

    this.state = {
      userLogin:{
        email: '',
        password:''
      }
    };
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		const field = e.target.name;
		const value = e.target.value;
		const userLogin = this.state.userLogin;

		userLogin[field]= value;
		this.setState({userLogin});
	}

	onSubmit(e){
		e.preventDefault();
		console.log('login info',this.state);
		// (this.state.pass === 'iiii')
		// 	? browserHistory.push('/instructor/1')
		// 	: browserHistory.push('/upload-picture');
	}
	render(){
		return (
				<div className="log">
					<img id="edtrack-logo" src={require('../../../public/edTrack.png')} />
          <br/>
          <h4 id="signup">Log In</h4>
					<LoginForm
						onChange={this.onChange}
						onSubmit = {this.onSubmit}
					/>
				</div>
		);
	}
}

export default Login;

