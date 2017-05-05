import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SignupForm = ({onSubmit, onChange})=> (
	<form onSubmit={onSubmit} >
		<input id="email-in" type="email" name="email" placeholder="School email address" onChange={onChange} required/>
		<br/>
		<input id="password-in" type="password"  name="password" placeholder="Create a password" onChange={onChange} required/>
		<br/>
		<input id="create-account" type="submit"  value="Create your account" />
		<p id="have-account">Already have an account?
			<Link to="/instructor/1">
				<strong>Sign in</strong>
			</Link>
		</p>
	</form>
);


export default SignupForm;
