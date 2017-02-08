import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import MentorContainer from '../features/mentor/MentorContainer';
import StudentContainer from '../features/student/StudentContainer';
import GradeContainer from '../features/grade/GradeContainer';


export default (
	<Route path="/" component={App}>
		<Route path='/student' component={StudentContainer}/>
		<Route path='/mentor' component={MentorContainer}/>
		<Route path='/grade' component={GradeContainer}/>
	</Route>
);
