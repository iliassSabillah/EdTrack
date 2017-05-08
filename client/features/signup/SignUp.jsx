import React from 'react';
import { browserHistory} from 'react-router';
import '../../styles/SignUp.css';
import SignupForm from './SignupForm';


class Signup extends React.Component {
	constructor(props) {
		super(props);

		// set the initial component state
		this.state = {
			user: {
				email: '',
				password: ''
			}
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onSubmit(e){
		e.preventDefault();
		console.log(this.state);
		browserHistory.push('/upload-picture');
	}
	onChange(e){
		const field = e.target.name;
		const value = e.target.value;
		const user = this.state.user;

		user[field]= value;
		this.setState({
			user
		})
	}
	render() {
    return (
      <div>
				<div className="log">
					<img id="edtrack-logo" src={require('../../../public/edTrack.png')} />
					<br/>
					<h4 id="signup">Sign Up</h4>
					<SignupForm
						onSubmit = {this.onSubmit}
						onChange = {this.onChange}
					/>
				</div>
      </div>
    );
  }
}

export default Signup;

