import React from 'react';
import {Link} from 'react-router';


const LoginForm = ({onSubmit, onChange})=>(
	<form onSubmit={onSubmit}>
		<input id="email-in" type="email" placeholder="School email address" name="email" onChange={onChange} required/>
		<br/>
		<input id="password-in" type="password" onChange={onChange} name="password" placeholder="Enter a password" required/>
		<br/>
		<input id="create-account" type="submit" value="Log In" />
		<p id="have-account">Don't have an account?
			<Link to="/signup">
				<strong> Sign up</strong>
			</Link>
		</p>
	</form>
);

export default LoginForm;




