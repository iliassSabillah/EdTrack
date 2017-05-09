import React from 'react';
import {Link} from 'react-router';


const LoginForm = ({onSubmit, onChange})=>(
	<form id="loginForm" onSubmit={onSubmit}>
		<input id="email-in" type="email" placeholder="School email address" name="email" onChange={onChange} required/>
		<input id="password-in" type="password" onChange={onChange} name="password" placeholder="Enter a password" required/>
    <select id="account" style={{width:"200px"}} className="form-control" name="account">
      <option value="" disabled>Select Account</option>
      <option value="Instructor">Instructor</option>
      <option value="Student">Student</option>
    </select>
		<input id="create-account" type="submit" value="Log In" />
		<p id="have-account">Don't have an account?
			<Link to="/signup">
				<strong> Sign up</strong>
			</Link>
		</p>
	</form>
);

export default LoginForm;
//
// <form  onSubmit={onSubmit}>
//   <input id="email-in" type="email" placeholder="School email address" name="email" onChange={onChange} required/>
//   <br/>
//   <input id="password-in" type="password" onChange={onChange} name="password" placeholder="Enter a password" required/>
//   <br/>
//   <select style={{width:"200px"}} className="form-control" name="account">
//     <option value="" disabled>Select Account</option>
//   </select>
//   <br/>
//   <input id="create-account" type="submit" value="Log In" />
//   <p id="have-account">Don't have an account?
//     <Link to="/signup">
//       <strong> Sign up</strong>
//     </Link>
//   </p>
// </form>


