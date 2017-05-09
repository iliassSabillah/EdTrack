import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SignupForm = ({onSubmit, onChange})=> (
	<form id="signupForm" onSubmit={onSubmit} >
		<input id="email-in" type="email" name="email" placeholder="School email address" onChange={onChange} required/>
		<input id="password-in" type="password"  name="password" placeholder="Create a password" onChange={onChange} required/>
    <select id="account" style={{width:"200px"}} onChange={onChange} className="form-control" name="type">
      <option disabled>Select Account</option>
      <option value="instructor">Instructor</option>
      <option value="student">Student</option>
    </select>
		<input id="create-account" type="submit"  value="Create your account" />
		<p id="have-account">Already have an account?
			<Link to="/login">
				<strong>Sign in</strong>
			</Link>
		</p>
	</form>
);


export default SignupForm;
