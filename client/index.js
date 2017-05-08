import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes/routes';
import configureStore from './store/configureStore';
import './styles/styles.css'; //Webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { fetchTopics } from './features/topic/TopicAction';
import { fetchAllGrades} from './features/grade/gradeActions';


const store = configureStore();

store.dispatch(fetchTopics());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('root')
);
